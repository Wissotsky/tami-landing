Slow Scan TeleVision

<http://i.imgur.com/lpMf3D9.png>
\<br\>[src](http://sstv.ccone.at/downloads/sstv.pdf)

## Theory

-   [Slow Scan Television Explained
    (pdf)](http://sstv.ccone.at/downloads/sstv.pdf)
-   Proposal for SSTV Mode Specifications, A.K.A dayton paper
    [pdf](http://www.barberdsp.com/files/Dayton%20Paper.pdf)
-   \[<http://bruxy.regnet.cz/web/hamradio/EN/a-look-into-sstv-mode/>

## law

\"Unlicensed operation on the AM and FM radio broadcast bands is
permitted for some extremely low powered devices covered under Part 15
of the FCC\'s rules. On FM frequencies, these devices are limited to an
effective service range of approximately 200 feet (61 meters). See 47
CFR (Code of Federal Regulations) Section 15.239, and the July 24, 1991
Public Notice (still in effect).\" [Part 15 Devices by
ffc](https://www.fcc.gov/media/radio/low-power-radio-general-information)

## praxis

### radio

<http://www.next.gr/uploads/298b569412.png%3Cbr%3E>; picture via
[next.gt](http://www.next.gr/rf/)

expert from [A Micro Radio
Manifesto](http://anarchy.translocal.jp/radio/micro/), read the
manifesto!

`LPFM covers up to 100 watts. "Community FM" in Japan (which was legally introduced as an institutionalized "Mini FM") `\
`allows 10 watts now (initially up to 1 watt). I think even these power levels are too much for micro radio. `\
`What about one watt? What about below one watt? Such a micro-power radio station could cover only a street block radius `\
`or only a housing complex. Why not? Leon Theremin showed the minimum example of micro radio. `\
`His invention is not only a musical instrument but also a micro radio.`

#### TX

-   [simple FM tarnsmitter from microradio
    manifesto](http://anarchy.translocal.jp/radio/micro/howtosimplestTX.html)
    (built on a
    [microstrip?!](https://www.microwaves101.com/encyclopedias/microstrip))

<http://i.imgur.com/FyJf28X.png>


```
fans [1](https://archive.is/9aBzN)
[2](http://blbluetoothfmtransmitter.blogspot.com/2015/08/single-transistor-fm-transmitter.html)\<HTML\>\</li\>\</HTML\>\<HTML\>\</ul\>\</HTML\>

```
</li>
```
```
</ul>
```
<http://i.imgur.com/mwwXIMnl.png>

-   [AM using a
    crystal](http://www.instructables.com/id/Make-a-simple-AM-transmitter/?ALLSTEPS)
-   [300m FM
    transmitter](http://www.instructables.com/id/The-Ultimate-FM-Transmitter/)
    [ytube](https://www.youtube.com/watch?v=joFourugXvs)
-   [grandady of all \"spy\"
    circuits](http://www.talkingelectronics.com/projects/Spy%20Circuits/SpyCircuits-1.html)
    \>\> [dig
    here](http://www.talkingelectronics.com/te_interactive_index.html)
-   modules [1](http://radiometrix.mybigcommerce.com/medium-range-3/)
    from this [blog](https://archive.is/p4CpX)
-   \[Micro HeyPhone <http://www.shropshirecmc.org.uk/radio.html>\]

#### RX

-   [DSP AKC6959 radio module
    breakout](http://www.aitendo.com/product/6800)
-   [tea5767](https://www.electronicsblog.net/arduino-fm-receiver-with-tea5767/)

#### analyzer

rtl-sdr spectrum analyzer\<br\> <https://github.com/pavels/spektrum>

### audio

[Images On An Audio
Cassette](http://www.instructables.com/id/Images-On-An-Audio-Cassette/?ALLSTEPS)

### Video

-   [Micro Televion](http://anarchy.translocal.jp/microtv/index.html) -

[How to build the most simplest TV
transmitter?](http://anarchy.translocal.jp/microtv/howtotvtx.html)

### android

![CyslmIU-LK8](/#ev/youtube)

-   encode and decode images using SSTV in Robot 36 mode - [playstore
    (free)](https://play.google.com/store/apps/details?id=xdsopl.robot36&hl=en),
    [github](https://github.com/xdsopl/robot36/tree/android) \<Br\>

the information is send using FM and needs only 800hz bandwidth for data
(1500hz-2300hz) and 200hz for control (1100hz-1300hz).\<br\> Robot 36
transfers 320x240 color images in around 36 seconds, hence the name
Robot 36.

### ARM

-   [Raspberry Pi SSTV
    Camera](http://www.agri-vision.nl/CMS/index.php?option=com_content&view=article&id=54&jjj=1445971703855)
    [github](https://github.com/AgriVision/pisstv)

![qzrPN0v-N0U](/#ev/youtube) Since the Pi can generate the HF FM signal
itself, no additional electronics are needed for low power
transmissions.

### libs

-   pySSTV - Python classes for generating Slow-scan Television
    transmissions [github](https://github.com/dnet/pySSTV)
-   Slowrx - A decoder for Slow-Scanning Television (SSTV)
    [github](http://windytan.github.io/slowrx/) linux

## Links

-   [worlds SSTV camlist](http://www.worldsstv.com/)
-   [latest recieved
    pics](http://www.sstv1sf072.altervista.org/latest.html)
-   <https://ukhas.org.uk/guides:ssdv>

## Flying sPot Scanner \<3

![pUoVGO8oPhE](/#ev/youtube) Uploaded on May 15, 2009 Television in a 10
kHz bandwidth, 32 lines, 12.5 pics/second. This was the first recording
I made via my \"live\" electronic flying spot scanner on 4th November
1973 - I was 19 years old at the time. I was scanned by the light of a
P11 phosphor CRT (type 5LP11), focussed onto my face through 4 1/2 inch
diameter magnifying lenses. A 931A photomultipler picked up the light
reflected by my face and fed the resultant video signal to one channel
of a stereo open reel audio recorder. The other channel of the stereo
pair recorded my voice. I was a bit lost for words after an all-day
construction effort, culminating in this video recording being made at 1
am. The recording was made at my parents\' home, 6 Torring Road, East
Hawthorn (Melbourne) Victoria, Australia. I was in my first year of
Electrical Engineering at Swinburne Tech College at the time, hence the
reference to exams.

The original \"audio\" tape was converted to a Youtube-compatible .mp2
file via software kindly provided by Gary Millard, refer:
<http://users.tpg.com.au/users/gmillar>\...

All of my earlier \"video\" recordings on audio tape had employed
mechanical scanning, with a Nipkow scanning disc. This electronic
scanner was developed in association with the late Daniel Van Elkan,
then VK3UI (b.1952 - d.1986), who designed the 32:1 divider chain for
the scanner.

[seller](http://www.sm5cbw.se/tubes/htm/q13-110gu.htm)
[arhive](https://archive.is/blzY1)

<http://i.imgur.com/3gXyIhA.png>
