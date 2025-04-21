## LIDAR

### VLP-16

![video_2023-10-09_00-47-29.mp4](/tamiwiki/projects/video_2023-10-09_00-47-29.mp4){.align-right}
![screencast_from_2023-10-08_23-24-52.webm](/tamiwiki/projects/screencast_from_2023-10-08_23-24-52.webm){.align-left
width="450" query="?450"}
![20231008-225424.png](/tamiwiki/projects/pasted/20231008-225424.png){width="300"
query="?300"}

by velodyne

PCAP capture for consumption by these
![2023-10-08-23-01-18_velodyne-vlp-16-data.7z](/tamiwiki/projects/2023-10-08-23-01-18_velodyne-vlp-16-data.7z)

transmits on port `2368` ip `192.168.1.201` stats on
`http://192.168.1.201`

ATM on devdesk@telavivmakers.space

#### software

[veloview](https://www.paraview.org/veloview/) - record/view

[VelodyneCapture](https://github.com/UnaNancyOwen/VelodyneCapture) -
capture and recorded with velodyne

[veloparser](https://github.com/ArashJavan/veloparser) - read pcap-files
recorded with velodyne.

#### wiring

![20231008-225343.png](/tamiwiki/projects/pasted/20231008-225343.png)

![20231008-235319.png](/tamiwiki/projects/pasted/20231008-235319.png){width="400"
query="?400"}
![pinout-lidar.jpg](/tamiwiki/projects/pinout-lidar.jpg){width="400"
query="?400"}

### SLAM

discussed in this video is
[LidarView](https://gitlab.kitware.com/LidarView/lidarview/-/releases)
![](youtube>RCQzefBsI60){query="?"}

<https://github.com/TixiaoShan/LIO-SAM>
![](youtube>A0H8CoORZJU){query="?"}

How to SLAM with LidarView ?
[link](https://gitlab.kitware.com/keu-computervision/slam/-/blob/master/paraview_wrapping/Plugin/doc/How_to_SLAM_with_LidarView.md#slam-parameters-tuning)

> > <https://github.com/cartographer-project/cartographer_ros/issues/1052#issuecomment-429769555>

### IMU

#### is Mahony AHRS same as kalman filter?

![kalmanvsothers.pdf](/tamiwiki/projects/kalmanvsothers.pdf)

The Mahony AHRS (Attitude and Heading Reference System) filter and the
Kalman filter are both used for sensor fusion and estimation, but they
are fundamentally different algorithms based on different mathematical
foundations and assumptions.

**Mahony AHRS**

1.  **Mathematical Foundation**: Mahony AHRS is based on quaternion
    representation and generally employs Proportional-Integral (PI)
    feedback control.
2.  **Computation**: Typically computationally less intensive than a
    full Kalman filter. This makes it popular for resource-constrained
    systems.
3.  **Assumptions**: Assumes that the errors are small and can be
    linearized.
4.  **Tuning**: Involves fewer parameters to tune, usually just the
    proportional and integral gains.
5.  **Use-Case**: Often used in simpler systems where computational
    resources are limited, like small UAVs or wearable devices.
6.  **Accuracy**: Generally less accurate than a well-tuned Kalman
    filter but usually sufficient for many applications.

**Kalman Filter:**

1.  **Mathematical Foundation**: Based on Bayesian inference and
    involves a state-space representation of the system.
2.  **Computation**: Can be computationally intensive, especially for
    systems with many states.
3.  **Assumptions**: Assumes that the system is linear or can be
    linearized and that the noise is Gaussian.
4.  **Tuning**: Requires more initial setup like defining the
    state-transition and observation matrices, and initializing error
    covariances.
5.  **Use-Case**: Used in more complex systems where greater accuracy is
    required, like navigation systems in aircraft.
6.  **Accuracy**: Typically more accurate than simpler filters like
    Mahony AHRS, especially when system dynamics are well-understood and
    can be accurately modeled.

In summary, Mahony AHRS and Kalman filters serve similar purposes but
are different in their approach, complexity, and accuracy. Mahony is
generally simpler and less computationally intensive, making it
well-suited for simpler systems or those with limited computational
resources. Kalman filters offer more accuracy and are more flexible but
require more computational power and are more complex to set up.

#### ICM-20948

![20231013-032017.png](/tamiwiki/projects/pasted/20231013-032017.png){.align-right
width="300" query="?300"}

-   <https://arxiv.org/pdf/2112.08854.pdf>
-   <https://learn.sparkfun.com/tutorials/sparkfun-9dof-imu-icm-20948-breakout-hookup-guide>

<https://github.com/jremington/ICM_20948-AHRS.git> - this will do
calibration of imu! (also kalman?)

whatabout

-   TF03-100 [AMZ](https://www.amazon.com/dp/B08F3DRPRJ)
-   WHEELTEC N100 [ebay](https://www.ebay.com/itm/353790207363)
-   <https://gi.copernicus.org/articles/9/385/2020/>
-   <https://github.com/cggos/imu_x_fusion>

### funny

![20231009-191736.png](/tamiwiki/projects/pasted/20231009-191736.png)
