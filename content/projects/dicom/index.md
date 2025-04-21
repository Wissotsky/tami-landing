See also [brain](https://wiki.idiot.io/brain)

we got a banana MRI from reddit (2014)

![banana.mp4](/tamiwiki/projects/banana.mp4)

but is it the fruit? the ~~florescence~~ flower?\
lets find out.

1\. convert to png using ffmpeg \<code\> ffmpeg -i banana.mp4
banana%05d.png \</code\> but, we have a logo on the bottom, this will
show artifact in the volumetric view. lets remove it while exporting.

``` bash
mkdir mri
ffmpeg -i banana.mp4 -vf "drawbox=x=275:y=295:w=25:h=5:color=black:t=fill" mri\banana_%05d.png
```

2\. load in [MeVisLab](https://mevislab.github.io/)\
![20230625-141435.png](/tamiwiki/projects/pasted/20230625-141435.png)

![mevislab_g2bn0dj1kk.mp4](/tamiwiki/projects/mevislab_g2bn0dj1kk.mp4)

as we see, banana fruit this is not.

![mevislab_xvt9yuv13m.mp4](/tamiwiki/projects/mevislab_xvt9yuv13m.mp4)

bonus!\
~~tasty~~ banana flower curry recipe\
![](youtube>zQn3FAZ4AQc){query="?"}\
link from Jana, which tried it and failed to overcome the bitterness.
more research needed.
