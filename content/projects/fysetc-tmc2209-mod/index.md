# FYSETC TMC2209 V3.0 modification for UART mode

These boards feature good Trinamic TMC2209 drivers but the pinout is not
fully compatible with popular boards such as MKS Robin Nano and BTT SKR.
This article explains a simple mod that allows using the drivers with
full capabilities (Sensorless homing, programmable motor current,
extended diagnostics etc) available in UART mode.

## Hardware features

The board has V3.0 marking and the circuity corresponds to the official
V3.0 documentation. However the silkscreen markings (in black) on the
board itself match V3.1 pinout and thus are *not* correct. ![FYSETC
TMC2209
pinout](/tamiwiki/projects/projects/fysetc-2209-v3.0-notes.png){width="600"
query="?600"}

## Modification description

Pin 4 (counting from 1 - EN) should be disconnected from `SPREAD`
(StealthChop/SpreadCycle selection) TMC2209 input, for that the trace is
physically cut with a scalpel. Then a bridge to the pin 5 is added to
connect it to `PDN_UART` bidir signal. ![FYSETC TMC2209
modded](/tamiwiki/projects/projects/fysetc-2209-modded.jpg){width="600"
query="?600"}

## Results

Both tested boards are able to communicate with the drivers over UART,
configure settings and use sensorless homing.
