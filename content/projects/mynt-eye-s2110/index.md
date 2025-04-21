# Stereoscopic Camera (MYNT EYE S2110)

  --------------------------- ---------------------------------------------------------
  Model                       S2110-95/Color
  Size                        PCB dimension:17.74x100mm Total dimension:125x47x26.6mm
  Frame Rate                  1280x400@10/20/30/60fps 2560x800@10/20/30fps
  Resolution                  1280x400; 2560x800
  Depth Resolution            Based on CPU/GPU Up to 1280\*400@60FPS
  Pixel Size                  3.0\*3.0μm
  Baseline                    80.0mm
  Visual Angle                D:112° H:95° V:50°
  Focal Length                2.63mm
  IR Support                  No
  Color Mode                  Color
  Depth Working Distance      0.60-7m+
  Scanning Mode               Global Shutter
  Power                       1.1W@5V DC from USB
  Synchronization Precision   \<1ms (up to 0.02ms)
  IMU Frequency               200Hz
  Output data format          YUYV
  Data transfer Interface     USB3.0
  Time Sync interface         DF50A
  Weight                      100.8g
  UVC MODE                    Yes
  --------------------------- ---------------------------------------------------------

## Official SDK

### Installation

The official calibration script is a proprietary deb file that only runs
under ubuntu 16.04

Relies on opencv 3.4

Must compile the sdk on the machine for anything related to run

Used to be open source, need to walk back on the git tree and find it

#### Emulation attempts

For usb passthrough in docker we need usbip, only available after kernel
5.9

After updating the ubuntu 16.04 kernel to mainline

I found a mismatch between the usbip versions between the vm and host

usbip comes from linux-tools-generic ,the newer version of which

was incompatible with the package ecosystem of 16.04

``` bash
$ lsusb
Bus 002 Device 002: ID 04b4:00c3 Cypress Semiconductor Corp. MYNT-EYE-S2110
```

<https://github.com/slightech/MYNT-EYE-S-SDK>

1.  readthedocs.org/projects/mynt-eye-s-sdk/downloads/pdf/latest/
2.  ![mynt_eye_s_标定工具使用说明_1\_.docx](/tamiwiki/projects/mynt-eye-s2110/mynt_eye_s_标定工具使用说明_1_.docx)
    1.  calibration
        1.  <https://sebastiangrans.github.io/CheckGen/>

![mynteye-s-calibrator-opencv-ros-kinetic-1.0.0_amd64.deb-20230524t215348z-001.zip](/tamiwiki/projects/mynt-eye-s2110/mynteye-s-calibrator-opencv-ros-kinetic-1.0.0_amd64.deb-20230524t215348z-001.zip)

![mynteye-s-calibrator-opencv-official-1.0.0_amd64.deb-20230524t215342z-001.zip](/tamiwiki/projects/mynt-eye-s2110/mynteye-s-calibrator-opencv-official-1.0.0_amd64.deb-20230524t215342z-001.zip)
