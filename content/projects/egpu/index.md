# EGPU

![20230618-183833.png](/tamiwiki/projects/pasted/20230618-183833.png){.align-right}

we are using the [TH3P4G3 eGPU external
thunderbolt](https://egpu.io/best-egpu-buyers-guide/) thing.\
Linux Kernal notes \>
https://docs.kernel.org/admin-guide/thunderbolt.html\
[realtechtalk
guide](https://realtechtalk.com/Nvidia_Tesla_GPUs_K40K80M40P40P100V100_at_homedesktop_hacking_cooling_powering_cable_solutions_Tutorial_AIO_Solutions-2465-articles),
[mirror](https://archive.is/Kgj7E)

#### ThunderBolt check and setup

TLDR

1.  upgrade kernel (??)
2.  install gfx (nvidia\|amd) drivers
3.  plug card
4.  reboot
5.  trust thunderbolt

```html
<!-- -->
```
    The authorized attribute reads 0 which means no PCIe tunnels are created yet. The user can authorize the device by simply entering:

    # echo 1 > /sys/bus/thunderbolt/devices/0-1/authorized

    This will create the PCIe tunnels and the device is now connected.

### upgrade kernel

from mainline, (the ubuntu dist-upgrade is too conservative (5.19))

``` bash
cd /tmp
rm -i *deb

wget -c   https://kernel.ubuntu.com/~kernel-ppa/mainline/v6.3.7/amd64/linux-headers-6.3.7-060307-generic_6.3.7-060307.202306090936_amd64.deb
wget -c   https://kernel.ubuntu.com/~kernel-ppa/mainline/v6.3.7/amd64/linux-headers-6.3.7-060307_6.3.7-060307.202306090936_all.deb
wget -c   https://kernel.ubuntu.com/~kernel-ppa/mainline/v6.3.7/amd64/linux-image-unsigned-6.3.7-060307-generic_6.3.7-060307.202306090936_amd64.deb
wget -c   https://kernel.ubuntu.com/~kernel-ppa/mainline/v6.3.7/amd64/linux-modules-6.3.7-060307-generic_6.3.7-060307.202306090936_amd64.deb

sudo dpkg -i *.deb

```

### trust

hmm, you need to connect before boot.\
now permissions

``` bash
$ sudo dmesg
dprobe" pid=563 comm="apparmor_parser"
[    7.888207] audit: type=1400 audit(1686781044.331:3): apparmor="STATUS" operation="profile_load" profile="unconfined" name="nvidia_modprobe//kmod" pid=563 comm="apparmor_parser"
```

authorized the tamala!

``` bash
(base) user@eight:~$ echo 1 | sudo tee /sys/bus/thunderbolt/devices/0-1/authorized
```

### 1080Ti

![](/tamiwiki/projects/pxl_20230616_212235630.jpg){.align-right
width="400" query="?400"} looks legit

``` bash
$sudo dmesg -w
[96236.873213] nvidia-nvlink: Nvlink Core is being initialized, major device number 509

[96236.874544] nvidia 0000:09:00.0: enabling device (0006 -> 0007)
[96236.874646] nvidia 0000:09:00.0: vgaarb: changed VGA decodes: olddecodes=io+mem,decodes=none:owns=none
[96236.991272] NVRM: loading NVIDIA UNIX x86_64 Kernel Module  535.43.02  Mon May 22 20:46:13 UTC 2023
[96237.009537] nvidia-modeset: Loading NVIDIA Kernel Mode Setting Driver for UNIX platforms  535.43.02  Mon May 22 20:25:24 UTC 2023
[96237.013346] [drm] [nvidia-drm] [GPU ID 0x00000900] Loading driver
[96238.239429] [drm] Initialized nvidia-drm 0.0.0 20160202 for 0000:09:00.0 on minor 1
[96238.269008] nvidia_uvm: module uses symbols nvUvmInterfaceDisableAccessCntr from proprietary module nvidia, inheriting taint.
[96238.330257] nvidia-uvm: Loaded the UVM driver, major device number 507.
[96238.399348] NVRM: API mismatch: the client has the version 390.157, but
               NVRM: this kernel module has the version 535.43.02.  Please
               NVRM: make sure that this kernel module and all NVIDIA driver

```

update the driver to fit

``` bash
$ ubuntu-drivers devices
== /sys/devices/pci0000:00/0000:00:1c.4/0000:04:00.0/0000:05:01.0/0000:07:00.0/0000:08:01.0/0000:09:00.0 ==
modalias : pci:v000010DEd00001B06sv00001458sd0000377Abc03sc00i00
vendor   : NVIDIA Corporation
model    : GP102 [GeForce GTX 1080 Ti]
manual_install: True
driver   : nvidia-driver-450-server - distro non-free
driver   : nvidia-driver-510 - distro non-free
driver   : nvidia-driver-390 - distro non-free
driver   : nvidia-driver-470 - distro non-free
driver   : nvidia-driver-525-server - distro non-free
driver   : nvidia-driver-525 - distro non-free
driver   : nvidia-driver-535 - third-party non-free recommended
driver   : nvidia-driver-515 - distro non-free
driver   : nvidia-driver-515-server - distro non-free
driver   : nvidia-driver-530 - distro non-free
driver   : nvidia-driver-470-server - distro non-free
driver   : xserver-xorg-video-nouveau - distro free builtin

$ sudo ubuntu-drivers autoinstall

```

### P40

\<WRAP center round important 60%\> this doesnt work on our test machine
\</WRAP\>

![](/tamiwiki/projects/pxl_20230615_095016755.jpg){.align-right
width="400" query="?400"}

the P40 needs modern motherboard that allow for `Enable Above 4G memory`
bios see
[link](https://github.com/JingShing/How-to-use-tesla-p40#bios-settings),
see [P40](/tamiwiki/projects/P40a) page for info on dedicated machine.

NVIDIA Tesla P40 24GB DDR5 GPU Accelerator Card Dual PCI-E 3.0 x16\
need to retrofit with a FAN,it doesnt come with one

got one on ebay for 200\$(+shipping) ([ebay
mirror](https://archive.md/SL4Kq))\
some dude got it working,
<https://github.com/JingShing/How-to-use-tesla-p40>

#### SPECIFICATIONS:

      * GPU Architecture: NVIDIA Pascal 
      * Single-Precision Performance 12 TeraFLOPS* 
      * Integer Operations (INT8) 47 TOPS* (TeraOperations per Second) 
      * GPU Memory 24 GB 
      * Memory Bandwidth 346 GB/s 
      * System Interface PCI Express 3.0 x16 
      * Form Factor 4.4” H x 10.5” L, Dual Slot, Full Height 
      * Max Power 250 W 
      * Enhanced Programmability with Page Migration Engine Yes 
      * ECC Protection Yes 
      * Server-Optimized for Data Center Deployment Yes 
      * Hardware-Accelerated Video Engine 1x Decode Engine, 2x Encode Engine />
      * NVPN: 699-2G610-0200-100
      * NVIDIA® CUDA® cores: 3840

installing

``` bash
sudo apt install nvidia-headless-535
```

there is some issue, unlike other cards the blue led doesnt turn green
on thunderbolt connection.\
no power passing to the gPU.\
:(

### misc

     lspci -v | grep -A 2 -E "(VGA comp|3D)"
    00:02.0 VGA compatible controller: Intel Corporation Iris Pro Graphics 580 (rev 09) (prog-if 00 [VGA controller])
        DeviceName:  CPU
        Subsystem: Intel Corporation Iris Pro Graphics 580
    --
    09:00.0 VGA compatible controller: NVIDIA Corporation GF106GL [Quadro 2000] (rev a1) (prog-if 00 [VGA controller])
        Subsystem: NVIDIA Corporation GF106GL [Quadro 2000]
        Flags: bus master, fast devsel, latency 0

power from 12v dc plug (150W?)\
<https://www.reddit.com/r/eGPU/comments/ukqto9/comment/ige1rwv>

<https://egpu.io/forums/thunderbolt-linux-setup/>
