\<WRAP center round important 60%\> \> Customers that wish to sample or
purchase the ADV7672 must be licensed HDMI 2.1 adopters listed at
HDMI.org and licensed HDCP 2.x adopters listed at Digital-CP.com.
\</WRAP\>

# KVM

hi this is kvm all about kvm only kvm

what im trying to get is seemless switching between sources. this calls
for a unified EDID \"fingerprint\" from all sources.

                         ┌─► HDMI Dummy plug
    GPU ──► 1x2 splitter │
                         └─► KVM

## dummy hdmi

has circuitry to store and transmit EDID (Extended Display
Identification Data) emulation information to the GPU. by using an
EEPROM (Electrically Erasable Programmable Read-Only Memory) chip
programmed with the EDID data of a typical monitor. a.k.a hdmi emulator
plug

there are such dummys that have a passthru female socket. i have not
find a nice one yet

nice one, with cloning capabilities. [amz
mirror](https://archive.is/wip/6FEW5)

## generic HDMI splitter 1x2

i got the following in my weekly meeting with [aliexpress
packges](https://www.aliexpress.com/item/1005005972745533.html) at the
mailroom.

#### MS9332 IC

The MS9332 is a one-to-two active splitter that supports a signaling
rate up to 3.0Gbps. With 3.0Gbps capability, the MS9332 can support the
new 4K@30Hz video format. The MS9332 equalizes incoming TMDS data with
optimal quality regardless of the incoming signal quality. The highly
acclaimed equalization technology provides for support of long or
low-quality HDMI cables at even the highest speeds. Input terminations
of the TMDS inputs and output current levels are both programmable. The
chip also supports on-chip HDCP Keys RAM and EDID Memory.
[mirror](https://archive.is/PfvGA) ![Function Block
Diagram](/tamiwiki/projects/pasted/20240129-224517.png){.align-right
query="?x500"}

#### Features

-   Compliant with HDMI 1.4b
-   Support One Port input，2 Port output
-   Support HDMI 4K@30Hz
-   Adaptive input equalization
-   Output Pre-emphasis
-   Support 10/12/16 bit Deep Color input/output
-   Automatically monitor HDMI input signal
-   Automatically monitor the status of HDMI output devices
-   Support 5V TTL DDC
-   Integrated pre-programmed HDCP keys
-   Embedded EDID RAM saves external EDID ROM costs
-   No external crystal oscillations are required
-   LQFP64 (10mm×10mm)

#### teardown

![pxl_20240129_202515495.jpg](/tamiwiki/projects/pxl_20240129_202515495.jpg){query="?x400"}
![pxl_20240129_202419111.jpg](/tamiwiki/projects/pxl_20240129_202419111.jpg){query="?x400"}

### splitter EDID copy

![20240908-154344.png](/tamiwiki/projects/pasted/20240908-154344.png){width="400"
query="?400"} using

1.  GSV2002 \> \"2 In to 2 Out HDMI2.0 Repeater with Audio
    Extraction/Insertion\" IC
    ![pdf](/tamiwiki/projects/1698717765932698.pdf)
2.  GD32F103 \> ARM-M3
    [page](https://www.gigadevice.com/product/mcu/mcus-product-selector/gd32f103rgt6)
3.  AMZ ([B07VP37KMB mirror](https://archive.is/wip/5FBcj)

![pxl_20240908_123215675.jpg](/tamiwiki/projects/pxl_20240908_123215675.jpg){width="300"
query="?300"}![pxl_20240908_123246811.jpg](/tamiwiki/projects/pxl_20240908_123246811.jpg){width="300"
query="?300"}![pxl_20240908_123230816.jpg](/tamiwiki/projects/pxl_20240908_123230816.jpg){width="300"
query="?300"}![pxl_20240908_123220210.jpg](/tamiwiki/projects/pxl_20240908_123220210.jpg){width="300"
query="?300"}

### EDID

![20240130-032202.png](/tamiwiki/projects/pasted/20240130-032202.png)

<https://i.imgur.com/8wUaQZq.jpeg>
![20240130-032249.png](/tamiwiki/projects/pasted/20240130-032249.png)
<https://www.eevblog.com/forum/reviews/teardown-panlong-hdmi-audio-splitter/msg701691/>

### parts

<http://www.ultrasemi.com/index.php/td-3-48-77-255>

### suppliers

#### local

[topirzul](https://topirzul.co.il/%D7%A7%D7%98%D7%92%D7%95%D7%A8%D7%99%D7%94-%D7%A8%D7%90%D7%A9%D7%99%D7%AA-2/%D7%9B%D7%91%D7%9C%D7%99%D7%9D-%D7%9E%D7%AA%D7%90%D7%9E%D7%99%D7%9D-%D7%9E%D7%A4%D7%A6%D7%9C%D7%99%D7%9D-%D7%9E%D7%9E%D7%99%D7%A8%D7%99%D7%9D-hdmi/%D7%9E%D7%9E%D7%99%D7%A8%D7%99%D7%9D-%D7%95%D7%9E%D7%A4%D7%A6%D7%9C%D7%99%D7%9D-hdmi-switch-convertor.html)
