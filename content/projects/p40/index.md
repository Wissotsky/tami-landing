#### TAMI-P40

![20231108-155407.png](/tamiwiki/pasted/20231108-155407.png){.align-right
width="400" query="?400"}

![pxl_20231105_140807018.png](/tamiwiki/projects/pxl_20231105_140807018.png){.align-right
width="40" query="?40"}

TAMI-P40 is our purposely built server geared for high video memory
applications and development.\
it is built around a Tesla P40, a server orientated compute-only (aka no
display output) GPU released \~2016.

pros:

-   cheapest 24Gb VRAM card you can ~~buy~~get (ebay)
-   2 slot design

cons:

-   active cooling is ~~not~~ included (see [cheap
    waterCooling](/tamiwiki/watercooling))
-   architecture is
    [Pascal\\6.1](https://developer.nvidia.com/cuda-gpus), same chip as
    the 1080 \`GP102\`
-   its [not for
    mortals](https://forums.developer.nvidia.com/t/k40-setup-on-lenovo-p510/64917/11)!

```html
<!-- -->
```
    GPU Device Id: 0x10DE 0x1B38
    GP102 PG610 SKU 200 VGA BIOS

    CUDA Cores 3,840
    Memory Size 24 GB GDDR5

    Board power limit
      Target: 250.0 W
      Limit: 250.0 W
      Adj. Range: -50%, +0%
      
    Thermal Limits
      Max: 143.8°C
      
    H.264 1080p30 streams 24
    Form Factor PCIe 3.0 Dual Slot (rack servers)

![<https://i.imgur.com/V7tRnSv.jpeg>](/tamiwiki/projects/pxl_20231101_201111498.ls.mp4){width="400"
query="?400"}

![](/tamiwiki/teslap40.jpg){width="400" query="?400"}

overview by
[techpowerup](https://www.techpowerup.com/vgabios/231406/nvidia-teslap40-24576-161020)

#### machine spec

-   beQuit chassis
-   850W PSU
-   Gigabyte Motherboard B550M DS3H (rev. 1.7) AM4, AMD B550, DDR4,
    2xPCI-E, DVI, HDMI
-   2x8Gb DDR4 memory
-   AMD Ryzen 5 4600G, 6-Core, 12-Thread

``` bash
$ inxi -Fxz
System:
  Kernel: 6.5.6-76060506-generic x86_64 bits: 
    Distro: Pop!_OS 22.04 LTS base: Ubuntu 22.04 LTS Jammy
Machine:
  Type: Desktop System: Gigabyte product: B550M DS3H v: -CF serial: <superuser required>
  Mobo: Gigabyte model: B550M DS3H v: 1.7
    UEFI: American Megatrends LLC. v: F3d date: 09/20/2023
CPU:
  Info: 6-core model: AMD Ryzen 5 4600G with Radeon Graphics bits: 64 type: MT MCP arch: Zen 2
    rev: 1 cache: L1: 384 KiB L2: 3 MiB L3: 8 MiB
  Speed (MHz): avg: 3560 high: 4292 min/max: 400/4308 cores: 1: 3677 2: 4292 3: 2861 4: 3002
    5: 3861 6: 3915 7: 3691 8: 4283 9: 2861 10: 3565 11: 3768 12: 2951 bogomips: 88633
  Flags: avx avx2 ht lm nx pae sse sse2 sse3 sse4_1 sse4_2 sse4a ssse3 svm
Graphics:
  Device-1: NVIDIA GP102GL [Tesla P40] driver: nvidia v: 535.113.01 bus-ID: 01:00.0
  Device-2: AMD Renoir vendor: Gigabyte driver: amdgpu v: kernel bus-ID: 07:00.0
  Display: server: X.org v: 1.21.1.4 with: Xwayland v: 22.1.1 driver: X:
    loaded: amdgpu,ati,nvidia unloaded: fbdev,modesetting,nouveau,radeon,vesa gpu: nvidia,amdgpu
    tty: 120x30
  Message: GL data unavailable in console. Try -G --display
Audio:
  Device-1: AMD Renoir Radeon High Definition Audio driver: snd_hda_intel v: kernel
    bus-ID: 07:00.1
  Device-2: AMD Family 17h HD Audio vendor: Gigabyte driver: snd_hda_intel v: kernel
    bus-ID: 07:00.6
  Sound Server-1: ALSA v: k6.5.6-76060506-generic running: yes
  Sound Server-2: PulseAudio v: 15.99.1 running: no
  Sound Server-3: PipeWire v: 0.3.82 running: yes
Network:
  Device-1: Realtek RTL8111/8168/8411 PCI Express Gigabit Ethernet vendor: Gigabyte driver: r8169
    v: kernel port: f000 bus-ID: 05:00.0
  IF: enp5s0 state: up speed: 1000 Mbps duplex: full mac: <filter>
Drives:
  Local Storage: total: 1.84 TiB used: 19.44 GiB (1.0%)
  ID-1: /dev/nvme0n1 vendor: Intel model: SSDPEKNW010T8 size: 953.87 GiB temp: 36.9 C
  ID-2: /dev/nvme1n1 vendor: Samsung model: SSD 970 EVO 1TB size: 931.51 GiB temp: 34.9 C
Partition:
  ID-1: / size: 906.96 GiB used: 16.19 GiB (1.8%) fs: ext4 dev: /dev/nvme1n1p3
  ID-2: /boot/efi size: 1020 MiB used: 387.7 MiB (38.0%) fs: vfat dev: /dev/nvme1n1p1
Swap:
  ID-1: swap-1 type: partition size: 4 GiB used: 0 KiB (0.0%) dev: /dev/dm-0 mapped: cryptswap
  ID-2: swap-2 type: zram size: 14.98 GiB used: 0 KiB (0.0%) dev: /dev/zram0
Sensors:
  System Temperatures: cpu: 43.0 C mobo: 34.0 C
  Fan Speeds (RPM): N/A
  GPU: device: nvidia screen: :0.0 temp: 27 C device: amdgpu temp: 40.0 C
Info:
  Processes: 380 Uptime: 1d 20h 9m Memory: 14.98 GiB used: 6.75 GiB (45.0%) Init: systemd
  runlevel: 5 Compilers: gcc: 11.4.0 Packages: 1909 Shell: Bash v: 5.1.16 inxi: 3.3.13
```
