## Thermal Imaging

[Thermal camera](/tamiwiki/projects/thermalcam#model_695800) transmits
`udp` packets to a windows application.

## TODO

-   ~~capture udp packets~~
-   ~~analyze for handshake and frame~~
-   ~~cross platform image stream decoding~~
-   find camera\'s conversion formula or lookup table OR calibrate
    -   \<del\> grab calibration data\</del\>
    -   get min max value and saturation points
    -   normalize, colorize and manipulate 16bit image
-   Live streaming
-   web interface
-   Mobilility (battary, SOB)

# flow

we recorded a raw ethernet packet stream between the camera (source) and
the windows (target) pc

[bootloginplay.zip](https://archive.org/download/bootloginplay/bootloginplay.zip) -
pcap file recording of camera boot, stream request follwed by \~100
frames of thermal video. we used wireshark to filter and capture the
handshake.

we noticed the stream gets initiated by a short udp packet from the
target\
we saved that packet and replayed it to the source using scapy lib for
python.

``` python
#replay the "trigger" packet. 
#this packets will start the source broadcasting its packets. 

import base64
from scapy.all import *

# Base64 encoded packet data 
encoded_packet = "////////AAFsWfAKCABFAAA4KB0AAIARkEfAqAABwKgA/x+bH5wA2QAAASABgBtAACAAAAAAAAAADwAAAAEAAAEAACArAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////AAAAAAAAAAIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"


# Decode the Base64 encoded packet
decoded_packet = base64.b64decode(encoded_packet)

# Load packet with Scapy
packet = Ether(decoded_packet)

# (packet)
sendp(packet, iface="Ethernet")
```

this then started a network stream\
the data stream was ordered and looked clean.\
every frame starts with the following.

``` python
T=(-1.665884e-08)*X^4+(1.347094e-05)*X^3+(-4.396264e-03)*X^2+(9.506939e-01)*X+(-6.353247e+01)
```

![20231231-203241.png](/tamiwiki/projects/pasted/20231231-203241.png){query="?x500"}

that got our interest in that packet but from then we noticed each has a
sequential header that we can follow.

we then decoded to video \>
<https://git.telavivmakers.space/tami/thermalcam_decoder>

-   frame composed of 32\*6930b packets
-   384x288 px
-   16bit grayscale
-   first 520b overwritten

here is a video (mp4,h264,8bpp) and an image (png,raw,16bpp)

  ------------------------------------------------ ---------------------------------------------------------
  ![thermal.mp4](/tamiwiki/projects/thermal.mp4)   ![0000.png](/tamiwiki/projects/0000.png){query="?x210"}
  ------------------------------------------------ ---------------------------------------------------------

raw data of single frame, in pcap format (TODO: not the same data as the
png above.), ![frame2.7z](/tamiwiki/projects/frame2.7z)

# calibrate

~~we don\'t know the camera\'s conversion formula or lookup table~~\
the spec mentions 8-14µm

> According to Wien\'s Displacement Law, objects at different
> temperatures emit peak radiation at different wavelengths. The range
> of 8-14 µm is well-suited for detecting temperatures commonly
> encountered in industrial and environmental applications, typically
> ranging from about -20°C to 500°C or more. This range is sensitive
> enough to detect the radiation emitted by most objects under
> normal conditions.

i [asked
gpt](/tamiwiki/projects/screencapture-chat-openai-c-9e5f693e-2bad-46aa-a014-2efe9062ad51-2023-12-28-23_34_32.png)
if the formula we found in the first udp packet makes sense as a lookup
table. he said **no**\
then decided to capture a calibration sequence using our ANET printer
hotbed and tip as a commendable temperature source.\
set the hotbed to 100c (but its hardcoded to 90C tops on the merlin
firmware) and 200deg for the hotend tip.\
then \"showed\" it a piece of ice from the fridge. all measurements
verified using a infrared thermometer. 90C,200C and 0C.

-   <https://archive.org/details/heatbed90_hotend_200_ice0.7z>
    -   first attempt, 5Gb (compressed to 800Mb)
    -   long 15min take include ramp up (shown below at x30 speed)

![pxl_20231228_123144387.jpg](/tamiwiki/projects/pxl_20231228_123144387.jpg){.align-left
query="?x300"}

![thermal_speedupx30.mp4](/tamiwiki/projects/thermal_speedupx30.mp4)

and revisiting that formula, what do you know!? **it is legit**\...

check this rust thingy out (more at the repo)

``` rust
    let frame = data
        .iter()
        .copied()
        .map(|x| {
            let x: f64 = x.into();
            let x = x / 256.0;
            ((-1.665884e-08) * x.powf(4.)
                + (1.347094e-05) * x.powf(3.)
                + (-4.396264e-03) * x.powf(2.)
                + (9.506939e-01) * x
                + (-6.353247e+01)) as u8
        })
        .collect::<Vec<u8>>();
```

fridge frost - 0c\
the heatbed at the back is ramping down from 90c (cam saturates well
before)\
![heatbed90_hotend_200_ice0_23048.png](/tamiwiki/projects/heatbed90_hotend_200_ice0_23048.png)
![frame_20231231_193154.png](/tamiwiki/projects/frame_20231231_193154.png)
![pxl_20231228_123332554.jpg](/tamiwiki/projects/pxl_20231228_123332554.jpg){query="?x288"}

TODO:

-   better programmable heat source, with wider thermal range

# Linux

make sure all switches support (and dont block) jumbo frames.\
enable jumbo frames on your device.

Jumbo Frames can enhance network performance by allowing larger packets
of data to be sent.

First, identify the network interface you wish to configure. You can
list all available network interfaces using:

    ip link show

To set the MTU to 9000, use the following command, replacing \'eth0\'
with your interface name:

    sudo ip link set eth0 mtu 9000

After setting the MTU, verify the changes with:

    ip addr show eth0

Look for the \'mtu 9000\' in the output to confirm the setting.

**Note:** These changes are temporary and will be reset after a system
reboot. To make permanent changes, you need to edit the network
configuration file, which varies based on the Linux distribution and
network manager in use.

### hunting for adapters

alon/paul gave advice and grep to find usb ethernet adapters with Jumbo
frame support.

    drivers/net/usb$ git grep max_mtu
    aqc111.c:       dev->net->max_mtu = 16334;
    asix_devices.c: dev->net->max_mtu = 16384 - (dev->net->hard_header_len + 4);
    ax88179_178a.c: dev->net->max_mtu = 4088;
    cdc-phonet.c:   dev->max_mtu            = PHONET_MAX_MTU;
    cdc_ncm.c:      dev->net->max_mtu = cdc_ncm_max_dgram_size(dev) - cdc_ncm_eth_hlen(dev);
    lan78xx.c:      netdev->max_mtu = MAX_SINGLE_PACKET_SIZE;
    qmi_wwan.c:             net->max_mtu = ETH_MAX_MTU;
    r8152.c:                netdev->max_mtu = size_to_mtu(9 * 1024);
    r8152.c:                netdev->max_mtu = size_to_mtu(15 * 1024);
    r8152.c:                netdev->max_mtu = size_to_mtu(16 * 1024);
    r8152.c:                netdev->max_mtu = ETH_DATA_LEN;
    sierra_net.c:   dev->net->max_mtu = SIERRA_NET_MAX_SUPPORTED_MTU;
    smsc75xx.c:     dev->net->max_mtu = MAX_SINGLE_PACKET_SIZE;
    smsc95xx.c:     dev->net->max_mtu = ETH_DATA_LEN;
    usbnet.c:       net->max_mtu = ETH_MAX_MTU;

this one id as a `r8152`, and its [on the
list](https://github.com/torvalds/linux/blob/master/drivers/net/usb/r8152.c).\
spec on the box looks great!

![pxl_20240108_102817262.jpg](/tamiwiki/projects/pxl_20240108_102817262.jpg){query="?x200"}

``` bash
$ lsusb -v -d 0bda:8152

Bus 001 Device 011: ID 0bda:8152 Realtek Semiconductor Corp. RTL8152 Fast Ethernet Adapter
Device Descriptor:
  bcdUSB               2.10 
  bMaxPacketSize0        64
  idVendor           0x0bda Realtek Semiconductor Corp.
  idProduct          0x8152 RTL8152 Fast Ethernet Adapter
  iManufacturer           1 Realtek
  iProduct                2 USB 10/100 LAN
  iSerial                 3 00E04C3643B9
```

mybe we be lucky?\

``` bash
$ sudo ip link set enp0s20u3 mtu 1501
Error: mtu greater than device maximum.
```

![20240114-203259.png](/tamiwiki/projects/pasted/20240114-203259.png){query="?x400"}

the inside is a horid mess.

![photo_2024-01-14_20-36-57.jpg](/tamiwiki/projects/photo_2024-01-14_20-36-57.jpg){width="600"
query="?600"}![photo_2024-01-14_20-36-59.jpg](/tamiwiki/projects/photo_2024-01-14_20-36-59.jpg){query="?x300"}

but!!!!

stumbled on another canidate \@post office, same case, almost kinda the
same packaging, but no mention of jumbo frames on the small print.\
doesnt phase me, if they all lie, it can go both ways, no?

YES, its the `RTL8153`\
![photo_2024-01-14_19-50-02.jpg](/tamiwiki/projects/photo_2024-01-14_19-50-02.jpg){width="600"
query="?600"}
![photo_2024-01-14_19-49-58.jpg](/tamiwiki/projects/photo_2024-01-14_19-49-58.jpg){query="?x300"}\
![20240114-194214.png](/tamiwiki/projects/pasted/20240114-194214.png){query="?x300"}

## SOB

to get this thing mobile we will need to hook it up to some kind of
System On Board. like the raspberry pi and the likes.

### raspi

the raspi5 has working jumbo frame (mtu\>=6K)

the RASPI 4/5 support cpi cards, jeff compiled a [nice
list](https://pipci.jeffgeerling.com/#network-cards-nics-and-wifi-adapters)
of netwrok cards you can use with adaptors.

### jetson tx2

we got one, or two. and they have a pci slot.

TODO\
\* check status of mtu on its adaptor board.

## Model 695800

![video_2023-12-23_19-18-34.mp4](/tamiwiki/projects/video_2023-12-23_19-18-34.mp4){.align-left}

\<blockquote\>camera connects over 1Gb ethernet adaptor (make sure to
enable Jumbo Frame 9k in adapter settings)\</blockquote\>

-   [mtam1.3.0-20200525wai-h.zip](https://mega.nz/file/cBZjAZBA#hsE4HMDhyweIQr43qMo3hdEGtZXz836QhjKXu5De_9g)
    (software for windows)
-   ![manual.pdf](/tamiwiki/projects/695800m.pdf)
-   ![695800specs.pdf](/tamiwiki/projects/695800specs.pdf)
-   password : `123`

![20231223-192410.png](/tamiwiki/projects/pasted/20231223-192410.png){width="320"
query="?320"}

![2023-12-25_19-43-26.png](/tamiwiki/projects/2023-12-25_19-43-26.png){query="?x300"}![2023-12-25_19-23-14.png](/tamiwiki/projects/2023-12-25_19-23-14.png){query="?x300"}
![capture.png](/tamiwiki/projects/capture.png){query="?x400"}

# downloads

![ax88772c_772b_772a_772_win11_64bit_driver_v3.22.0.0.zip](/tamiwiki/projects/ax88772c_772b_772a_772_win11_64bit_driver_v3.22.0.0.zip) -
apple usb ethernet dongle

# kernel driver

Rust in the kernel:

\- instructions neglect to mention you must turn off DEBUG_INFO_BTF

1.  you can discover this by \"make LLVM=1 xconfig\", then Ctrl-F RUST,
    then look at the text showing that CONFIG_RUST=N and follow the
    options, then look at your .config and see that DEBUG_INFO_BTF is y.
    Turn it to n.
