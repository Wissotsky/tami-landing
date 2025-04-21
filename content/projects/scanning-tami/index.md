\<WRAP center round todo 60%\> Very WIP page(as of 3rd of April 2025),
you can help by asking questions in the telegram group or in-person on
Mondays \</WRAP\>

![enqvwett3dgqvudxdpmwrsozaihfjyfszimqkpblh0dqy5wdsgwpgmx5jzlhqva_b7ckp2bga2quwfkr3_11i0yqzbjg2slv5bxgz9s3uwbvakx-eecnut0ycxoec2m1s0kv0tdhr79uaj7qhpzn2837ln67eslxckxzwc3rbzaafyc6tjgf0jaorpvpqbf5iixtewrphb1zzmvnyc.svg](/tamiwiki/projects/enqvwett3dgqvudxdpmwrsozaihfjyfszimqkpblh0dqy5wdsgwpgmx5jzlhqva_b7ckp2bga2quwfkr3_11i0yqzbjg2slv5bxgz9s3uwbvakx-eecnut0ycxoec2m1s0kv0tdhr79uaj7qhpzn2837ln67eslxckxzwc3rbzaafyc6tjgf0jaorpvpqbf5iixtewrphb1zzmvnyc.svg)

\<blockquote\> flowchart TB

      subgraph sg1["Global Registration"]
          direction LR
          vf[(Video Frames)] --> undistort["Undistort Frames"] --> fd
          fd["Feature Detection"] --> fm
          
              subgraph fm["Feature Matching"]
                  direction LR
                  curframe@{ shape: circle, label: "Frame t" }
                  lcpairs[("Loop Closure Groups")]
                  mne["Match to all frames between t-15 and t+15"]
                  islcp{"Is frame in a loop closure group"}
                  mlcp["Match to all frames in the same loop closure group"]
                  findtransitivepairs["Find transitive pairs, If A-B and B-C match, attempt to match A-C"]
                  imgpairs[(Successfully Matched Image Pairs)]

                  curframe --> mne
                  lcpairs -..- islcp
                  mne --> islcp
                  mlcp --> findtransitivepairs
                  islcp --Yes--> mlcp
                  islcp -->|No| findtransitivepairs
                  findtransitivepairs --> imgpairs
              end

          imgpairs --> imgpair[("Image pair")] 
              subgraph ComputeEssentialMatrix["Compute Essential Matrix"]
                  direction LR
                  
                  imgpair --> ransacLoop["RANSAC Loop"]
                  
                  subgraph RANSACProcess["RANSAC Process"]
                      direction LR
                      ransacLoop --> randomSample["Randomly select 5 point-to-point matches"]
                      randomSample --> computeE["Compute 10 candidate essential matrices using 5-point algorithm"]
                      computeE --> countInliers["Count the amount of points where the algebraic epipolar error is lower than a set threshold"]
                      countInliers --> updateBest["Update best essential matrix if more inliers found in any of the candidates"]
                      updateBest --> checkIteration{"Max iterations
                      reached?"}
                      checkIteration -->|No| ransacLoop
                  end
                  
                  checkIteration -->|Yes| output[("Image Pairs With Estimated Essential Matricies and Keypoint Inlier Masks")]
              end
          
          output --> pgo["Bundle Adjustment"]
      end

      subgraph sg2["Depth Estimation"]
          direction LR
          pm["PatchMatch Multi-View Depth Estimation"]
          nde["DepthAnything v2 Neural Monocular Depth Estimate"]
          pm & nde --> preprocessing

          subgraph ConfidenceWeightedDepthCorrection["Confidence-Weighted Depth Map Correction"]
              direction LR
              
              preprocessing["Downscale Neural Estimate to PatchMatch resolution"] --> ransacLoopPolyfit["RANSAC Loop"]
              
              subgraph RANSACProcessPolyfit["RANSAC Polynomial Fitting"]
                  ransacLoopPolyfit --> sampleSelection
                  sampleSelection["Random sample selection
                  from depth maps"] --> weightSamples
                  
                  weightSamples["Weight samples by
                  confidence map values"] --> fitModel
                  
                  fitModel["Fit polynomial offset model
                  to weighted samples"] --> evaluateModel
                  
                  evaluateModel["Evaluate model by weighted error"] --> checkConvergence
                  
                  checkConvergence{"Max Iterations Reached?"} -->|No| ransacLoopPolyfit
                  
                  checkConvergence -->|Yes| bestModel["Select best polynomial
                  offset model"]
              end
              
              bestModel --> applyCorrection["Apply polynomial correction to full-res neural depth map"]
              
              applyCorrection --> outputPolyfit["Merge Depth and Color into RGBD"]
          end

          outputPolyfit --> rgbdpcd["RGBD Point Cloud Projection"] --> gsd["3D Gaussian Splat Training + Depth Rasterization"]
          gsd --> kde["KDE Outlier Filtering"]
          kde --> storergbd[(RGBD Images)]
      end

      subgraph sg3["Meshing"]
          direction LR
          tsdf --> gltfq["Quantize and Compress using the Draco GLTF Transcoder"]
      end

      subgraph tsdf["Hybrid RGBD TSDF Integration"]
          direction LR
          storergbd2[(RGBD Images)]
          gpuintgr["GPU VoxelBlockGrid Integration"]
          isvram{"VRAM Usage"}
          cpuintgr["CPU Uniform Voxel Grid Trilinear Interpolation"]
          exportmesh[(GLTF Mesh)]

          storergbd2 -.- gpuintgr
          gpuintgr --> isvram
          isvram --Low--> gpuintgr
          isvram --High--> cpuintgr
          cpuintgr --> gpuintgr
          gpuintgr -.Move Data.-o cpuintgr

          cpuintgr --> exportmesh
      end

      sg1 --> sg2 --> sg3

\</blockquote\>

3d scan of tami

![he-is-speaking-guy-explaining-with-a-whiteboard.gif](/tamiwiki/projects/he-is-speaking-guy-explaining-with-a-whiteboard.gif)

the scan is based on a phone video recording of me walking around tami.

Now to get from a video to a mesh/gaussian splat the first step is to
figure out where all the frames are relative to each other in space.
(aka Global Registration)

The first two steps consist of feature detection and matching.

The rolling shutter and overexposure from the video were too complex for
the SIFT based colmap feature detection. Given that we have 3014 frames
from the video, the exhaustive matching (3014\*\*2 matches) from colmap
is way too slow.

We can make assumptions about our data, such as the fact that time moves
forward and that our camera moves linearly in space(aka no
teleportation) to reduce the amount of matches we have to do.

At first I tried using RoMa which is the current SOTA model combining
feature detection and matching(<https://arxiv.org/abs/2305.15404v2>).
But it was too slow per each pair.

After that I switched to superpoint for the feature detection and
lightglue for feature matching which seems to be a fairly popular combo
currently.

![animation_tamiscan_superpoint_lightglue.gif](/tamiwiki/projects/animation_tamiscan_superpoint_lightglue.gif)

First I matched every frame with its 30 nearest frames(by time). Then I
manually found cases where I revisit the same place in the video and
matched between such frames to serve as loop closure points. After
converting the point data into a colmap database, I used colmap\'s
transitive pair generator to complete the matching.

Then used GLOMAP on the image pairs to get the global poses and a sparse
point cloud.

This scene can already be used for 3d gaussian splatting, but it had
alot of issues recovering fine details anywhere outside the initial
sparse point cloud, random initialization helped but then it struggled
with big floaters and incredibly long training times.

I tried other 3dgs pruning schedules/techniques such as AbsGS and
PixelGS but they had overall worse results as their repos didnt include
depth regularization and antialiasing.

I decided to try making a dense point cloud, but the colmap mvs was way
too slow to compute.

I tried projecting points from a monocular depth estimate(apple depth
pro) but it was too globally unstable between frames.

Fortunately OpenMVS\'s patchmatch implementation was much faster and had
more flexible parameters compared to colmap

I was able to run a quick low resolution depth estimate that I then used
as ground truth for realigning a neural monocular depth estimate.

OpenMVS .dmap files include a depth map and a confidence map, I was able
to use this with RANSAC to fit a polynomial which offset the neural
depth map The confidence map was used to change the contribution of
samples and allowed me to fit even very hard cases.

Now I was able to reproject all the realigned depths into a very dense
pointcloud for the scene. Much denser that would even be possible with
patchmatch

Albeit this point cloud had visible layers because of small
discrepancies between the depths and views

Fortunately 3dgs is specifically good at optimizing these kinds of cases
into a multiview consistent scene.

After running 3dgs the results were quite good, and I decided to move
onto creating a mesh that could be used in software like blender.

Trying a bunch of papers, the best results I got were from ones using
TSDF integration for their meshing workflow, but none of them had all
the features that I wanted so I decided to do it myself.

After rendering depth maps from 3dgs and integrating them into a tsdf
volume I saw that there were alot of \"spikes\" and outliers in the
depth(due to just splat ordering)

I was able smooth the depth over by rasterizing the median
depth(according to RaDe-GS)

![combined_depths_animation.gif](/tamiwiki/projects/combined_depths_animation.gif)

But I still had some outliers in the depth data.

I tried again fitting neural depth estimates to my 3dgs depth data, but
at this point their level of detail was lower than what I was getting
from 3dgs.

I then tried PromptDA which is meant to upscale depths from smarthpones
and lidars using a low-rez depth + rgb image pairs -\> hi-rez depth.

But the problem I got there is that the outliers were visibly clearly
still in the depth data but brought into the distribution and blended
into it.

After plotting the rasterized median depth from gaussian splats into a
frequency histogram I was able to see that in problematic images there
are two distinct spikes and a long trail of depths.

I was able to fit a kernel density estimate to the depth data and then I
manually found cutoff value where if the density after the global peak
becomes lower it means that were past the primary peak any depth beyond
that is an outlier.

![threshold_animation.gif](/tamiwiki/projects/threshold_animation.gif)

After removing the depth outliers I was able to get much cleaner results

To get a mesh from the depth images I used TSDF integration, I used the
VoxelBlockGrid implementation from open3d.

But the gpu vram wasnt enough for me to extract mesh detail down to 1mm.
And running the integration purely on cpu was too slow.

So I ended up computing the tsdf volume in batches on the gpu and them
merging them onto a uniform voxel grid on the cpu, where there was
overlap between the grids I used trilinear interpolation.

#TODO mesh compresson

voxelization

cam16_ucs color space nearest neighbors

minetest world format bullshit
