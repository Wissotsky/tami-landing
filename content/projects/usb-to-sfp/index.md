# usb-to-sfp

![20250102-235110.png](/tamiwiki/projects/projects/pasted/20250102-235110.png){width="300"
query="?300&direct"}

99\$ USB3 Optical Fiber Extender Usb3 Optical Transceiver Usb3 0 Optical
Isolation <https://archive.is/wip/FpSde>

### TX

![20250102-235048.png](/tamiwiki/projects/projects/pasted/20250102-235048.png){width="400"
query="?400&direct"}
![20250102-235205.png](/tamiwiki/projects/projects/pasted/20250102-235205.png){width="400"
query="?400&direct"}

chip on the back side is [VL813 - Super Speed USB 3.0 Hub
Controller](https://www.via-labs.com/product_show.php?id=81)

![20250102-235420.png](/tamiwiki/projects/projects/pasted/20250102-235420.png){width="600"
query="?600&direct"}

### RX

![20250102-235055.png](/tamiwiki/projects/projects/pasted/20250102-235055.png){width="300"
query="?300&direct"}

### Media

![](youtube>GGuqtZOurZo){query="?"} ![](youtube>pRhNGotyxqY){query="?"}

    USB 3.0 (HUB)                      SFP Module
      +---------+                    +------------+
      |         |                    |            |
      |  TX+    |--------------------|  TX+       |
      |  TX-    |--------------------|  TX-       |
      |         |                    |            |
      |  RX+    |--------------------|  RX+       |
      |  RX-    |--------------------|  RX-       |
      +---------+                    +------------+

      Legend:
      TX+ / TX- : Transmit differential pair
      RX+ / RX- : Receive differential pair

# sfp-breakout

<https://media.ccc.de/v/38c3-going-long-sending-weird-signals-over-long-haul-optical-networks>

-   <https://shop.sysmocom.de/SFP-experimenter-board-v2-kit/sfp-exp-v2-kit>
-   <https://osmocom.org/projects/misc-hardware/wiki/Sfp-breakout>

![20250103-120416.png](/tamiwiki/projects/projects/pasted/20250103-120416.png){.align-left
width="300" query="?300&direct"}

\<blockquote\> The Osmocom SFP breakout board is exactly what the name
implies: A small break-out board for transceivers in SFP form factor.

You can use it for e.g. transmitting your own signals / waveforms (not
restricted to Ethernet or CPRI) over fiber optics. This is e.g. useful
if you need galvanic isolation between digital circuits, or need
long-distance transmission e.g. between FPGA LVDS interfaces. attach
some I2C adapter to the I2C pins of the SFP module in order to
re-program it The SFP transceivers exhibit a symmetric/differencial
interface for Rx and Tx. Each of them is exposed as a pair of SMA
connectors, using differential traces between the SMA connectors and the
transceiver module.

If you\'re interested in transmitting single-ended signals, please see
the sfp-experimenter board instead. It\'s like the SFP breakout board,
but contains differential transmitter + receivers. \</blockquote\>

# more

### SFP Pmod Board

Developed by VKSDR, this board integrates an SFP transceiver with FPGA
development platforms via the Pmod interface. It supports single-ended
signals and includes design files and gerbers for customization.
[VKSDR](https://vksdr.com/pmod)

![20250103-002925.png](/tamiwiki/projects/projects/pasted/20250103-002925.png){width="200"
query="?200&direct"}

![20250103-003026.png](/tamiwiki/projects/projects/pasted/20250103-003026.png){width="500"
query="?500&direct"}

### mwrnd/SFP_Plug_Breakout

Pluggable SFP (SFF INF-8074i) and SFP+ (SFF-8432) Module Breakout for
developing SFP modules. PCB must be manufactured with a 1.0mm thickness.

<https://github.com/mwrnd/SFP_Plug_Breakout>

![20250103-140453.png](/tamiwiki/projects/projects/pasted/20250103-140453.png){query="?direct"}

### SFP Doctor

An open-source hardware and software project designed for reading and
writing EEPROM data on SFP/SFP+ modules. It utilizes the Cypress
CYC8CKIT-059 prototyping board as a USB interface, offering a
cost-effective solution for SFP module programming.
[sfpdoctor](https://github.com/fizzyade/sfpdoctor)

![20250103-002715.png](/tamiwiki/projects/projects/pasted/20250103-002715.png){width="200"
query="?200&direct"}

### SFP Breakout Board by aewallin

This simple breakout board facilitates experimentation with SFP
transceivers, providing differential TX/RX pairs via SMA connectors.
It\'s suitable for data rates up to at least 1 Gbps and includes status
LEDs and rate-select jumpers.
[GITHUB](https://github.com/aewallin/SFP-Breakout-Board)

![20250103-002737.png](/tamiwiki/projects/projects/pasted/20250103-002737.png){width="200"
query="?200&direct"}

### NetFPGA Platform

An open-source hardware and software project aimed at rapid prototyping
of high-speed network devices. The platform includes FPGA-based boards
with multiple SFP+ interfaces, supporting line-rate packet processing
for networking research and development.
[WIKIPEDIA](https://en.wikipedia.org/wiki/NetFPGA)

![20250103-002832.png](/tamiwiki/projects/projects/pasted/20250103-002832.png){width="200"
query="?200&direct"}

### SFPTotal Mini Programmer

A compact USB coding board designed for programming various SFP
transceivers, including SFP, SFP+, and SFP28 modules. It supports
flexible coding of different transceiver types and is suitable for
network equipment suppliers and system integrators.
[SFPTOTAL](https://sfptotal.io)

![20250103-002847.png](/tamiwiki/projects/projects/pasted/20250103-002847.png){width="200"
query="?200&direct"}

### 101

![](youtube>yS_dAvOGeWg){query="?"}

### related

<https://docs.telavivmakers.space/tamiwiki/users/6r1d/fiber_notes?s>\[\]=sfp
