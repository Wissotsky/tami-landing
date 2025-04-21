# ATTAMI

\[2023\] We are back!

after loosing our old wiki to some digital storm

git for pcb <https://github.com/telavivmakers/at-tami>

![20230518-113653.png](/tamiwiki/projects/attami/20230518-113653.png)

### TODO

1.  simple attachment to
    [flipperZero](https://blog.flipperzero.one/wanna-build-a-module/)
    (new board?)

start talking about v2 of the 1\$ ATtami devboard (ATtiny85 price has
rocketed)\
a few interesting Canidates for a 1\$/5₪ board.\
-
[CH32V003](https://www.cnx-software.com/2022/10/22/10-cents-ch32v003-risc-v-mcu-offers-2kb-sram-16kb-flash-in-sop8-to-qfn20-packages/)
aka **RVTAMI**
([notes](https://gist.github.com/5shekel/3eb7de5b2139f68727455a9f20bdf07d)
on fedora)

1.  [STM32g030f](https://www.st.com/en/microcontrollers-microprocessors/stm32g030j6.html) -
    aka **ATtami32**
2.  [PIC16F17114](https://www.microchip.com/en-us/product/PIC16F17114) -
    aka cuTami(?)
3.  [STM8S001J3](https://www.st.com/resource/en/datasheet/stm8s001j3.pdf)

#### Installation and Setup on Arduino IDE

1.  Open the Arduino IDE and go to \"File\" -\> \"Preferences\".
2.  Add the following URL to the \"Additional Boards Manager URLs\"
    field: <http://drazzy.com/package_drazzy.com_index.json>
3.  Click \"OK\" to save the changes.
4.  Next, navigate to \"Tools\" -\> \"Boards\" -\> \"Boards Manager\".
5.  In the Boards Manager window, search for \"**ATTinyCore by Spence
    Konde**\".
6.  Once you find it, click on it and then click the \"Install\" button.
7.  Wait for the installation process to complete.
8.  After installation, go to \"Tools\" -\> \"Boards\" and select
    \"**ATtiny85 (Micronucleus / DigiSpark)**\" as the board.
9.  Then, select \"**Micronucleus**\" as the programmer.
10. You are now ready to flash your first AtTami.

## LOG

#### update #7

working on tzvi [reflow oven
controller](https://github.com/telavivmakers/Reflow_oven)\
added:\
\* an OLED display (to monitor temp and stage without pesky serial)

-   a potentiometer to switch between two modes
    -   mode 99 - if pot is set to 0 on reset the reflow controller will
        hit a certian temprature and nothing else.
    -   mode 1-5 - if pot is not at 0, it will run the regualt reflow
        profile.
-   switch from 6.5AC-DC psu to a smaller 5V supply.

![](/tamiwiki/projects/pxl_20230619_105207460.jpg){width="400"
query="?400"}
![](/tamiwiki/projects/pxl_20230619_212622790.jpg){width="400"
query="?400"}

#### update #6

we tried working out

1.  how to upload fresh firmware via user soundcard.
    1.  see AUDIOPROG example at
        [8Bit_JogjaNoise](https://raw.githubusercontent.com/8BitMixtape/8Bit_JogjaNoise/master/8Bit_JogjaNoise_Shematic_v01.jpg)
    2.  [tinyAudioBoot](https://github.com/ChrisMicro/TinyAudioBoot)
        (SOUNDRX)
    3.  audioino
        ![HTML-Mirror](/tamiwiki/projects/attami/audioino_the_arduino_with_audio_bootloader_files_html_mirror_.zip)

we got stuck with attempting to flash the tinyAudioBoot firemware.\
issue was with the retrofitted flipper jig, it doesnt route the 5v to
the attiny power rail, but the 3v3 rail did.\
![20230518-113450.png](/tamiwiki/projects/attami/20230518-113450.png){.align-right
width="400" query="?400"} took some time to figure that one out.\
![pxl_20230529_220621645.photosphere_2.jpg](/tamiwiki/projects/pxl_20230529_220621645.photosphere_2.jpg){width="400"
query="?400"}

but still piping audio to through the audio jack to PB4 doesnt work.
hmm..?

![pxl_20230524_180931451.jpg](/tamiwiki/projects/pxl_20230524_180931451.jpg){width="300"
query="?300"}\
much joy from the flipper zero duplication jig\
![flash_flipper_attami.mp4](/tamiwiki/projects/flash_flipper_attami.mp4)

#### update #5

we had a Surprise Devboard meetup on Monday.\
found some inconsistencies with assembly of prior boards (flipped
components) sorted and more boards are getting done.\
Flipper zero jig\
![pxl_20230522_171010616.jpeg](/tamiwiki/projects/attami/pxl_20230522_171010616.jpeg){width="400"
query="?400"}

the reflow station moved to a stable home.\
![baking_attami_1.jpeg](/tamiwiki/projects/attami/baking_attami_1.jpeg){width="400"
query="?400"}

![baking_attami_2.jpeg](/tamiwiki/projects/attami/baking_attami_2.jpeg){width="400"
query="?400"}

#### update #4

we (Aleksander) started the hot-air scavenging process\
got all the attiny from previous iffy batches\
![pxl_20230517_182338732.jpeg](/tamiwiki/projects/attami/pxl_20230517_182338732.jpeg){width="200"
query="?200"}\
![pxl_20230517_180503412.jpeg](/tamiwiki/projects/attami/pxl_20230517_180503412.jpeg){width="200"
query="?200"}

ready for reprogramming of the bootloader.

astra used the flipper zero to dump the EEPROM/Flash and made a
duplicator jiggy

![20230518-113450.png](/tamiwiki/projects/attami/20230518-113450.png){width="200"
query="?200"}

no board left behind, come get your buttons\
![pxl_20230517_222710528_1\_.jpeg](/tamiwiki/projects/attami/pxl_20230517_222710528_1_.jpeg){width="300"
query="?300"}

#### update #3

was great, we got the pcb oven reflow profile dialed in, first boards
came out nicely!

Tonight we\'ll scavenge more Attiny85s from old defunct boards and get
the process going on our new nixos based dev station!

#### update #2

After Thursday where nothing worked (macmini must die) or got burnt.\
![video_2023-05-18_11-43-42.mp4](/tamiwiki/projects/attami/video_2023-05-18_11-43-42.mp4)\
![20230518-114531.png](/tamiwiki/projects/attami/20230518-114531.png){width="300"
query="?300"}\
This time we will actually test our reflow oven on actual boards. Not
just (yummy) sandwiches

#### update #1

![20230518-113721.png](/tamiwiki/projects/attami/20230518-113721.png)

om-num..\
come Wednesday, we will continue working on the ATtami, last time we

1.  adapted an old (non-food) toaster from tami pile-o-junk and
    retrofitted it for our temperature probing
2.  learned about different reflow profiles , figured out why last time
    we did the workshop the boards mostly came out undercooked.
3.  got a truck load of very good meet sandwiches form the night
    watchman to test on (crunchy/toasty!)
4.  dug for the right one to fit our Sn63Pb37 soldering paste
    (hopefully)
5.  patched our oven controller code to fit.

\-\--
![pxl_20230517_220254076_1\_.jpeg](/tamiwiki/projects/attami/pxl_20230517_220254076_1_.jpeg){width="400"
query="?400"}

### DOCS

![Atmel-2586-AVR-8-bit-Microcontroller-ATtiny25-ATtiny45-ATtiny85_Datasheet.pdf](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2586-AVR-8-bit-Microcontroller-ATtiny25-ATtiny45-ATtiny85_Datasheet.pdf)

## others

Slavoj Žižek

1.  psoc-5
    1.  <https://www.infineon.com/cms/en/product/microcontroller/32-bit-psoc-arm-cortex-microcontroller/32-bit-psoc-5-lp-arm-cortex-m3/>
    2.  <https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6059476/>
