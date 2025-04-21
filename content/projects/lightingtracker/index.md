below is an edited chat with Tõnu, who first draw my attention to
blitzortung.org [lighting
tracker](https://www.blitzortung.org/en/live_lightning_maps.php), the
project uses GPS location and timing coupled with radio antennas to
detect faint lighting signals from up to 5000Km and calculate the
location by triangulation.

[station=2003](https://map.blitzortung.org/statistic_0.php?station=2003&region=1)
is our sister station in cypress, maintained by Tõnu\
we are
[station=2075](https://map.blitzortung.org/statistic_0.php?station=2075&region=1)\
![20231015-200527.png](/tamiwiki/projects/pasted/20231015-200527.png){width="300"
query="?300"}

we are looking for more volnteers to maintaing nodes anywhere inthe
middle east. we are severly underrepresnted and that hurts the accurasy
of the lighting netwrok.

what you need to provide

-   a few Kb of stable internet
-   a GPS antenna (with view of sky).
-   Maintainer mentality

\<blockquote\>\
\
I do run dozens of trackers on my own and now hardware building of whole
project came to me. Receivers were not available for years and now I
have small batch on my table and can decide who gets them. We have
nobody in Israel and in current situation probably nobody has time for
it. When times improve, I see your receiver also can be improved. I
gathered lot of know-how over the years and can help. One thing what I
think you need is LTC1569 chips for filtering. If you provide your
address, I can try to ship then for you. For free. Whenever you get
time, solder them on board and put filter to 40kHz unless you can
eliminate noise source around 45kHz which makes station half deaf. Most
probably power supply or some air conditioner nearby antennas.

In this sense we are similar. Just doing what I can for community. I do
not get paid etc.

There is a thing need to be understood - this network uses similar Time
of Flight method like GPS does. To detect lightning, detectors to be on
all different sides away from lightning. Detectors in Israel would be
very useful to detect lightnings in Cyprus, Türkiye, North Africa,
countries all around Israel. Israel also benefits but mostly countries
around. More we have, more results we get, more accurate there will be.

I include screenshot I just made to show the issue. You see lightning
next to Cyprus is received by many stations in Europe and one in Cyprus.
If station on Cyprus would not detect, lightning would be completely
missed. Same reason as with GPS, it does not work if satellites are only
in one sector of sky. Your station is potential another receiver but
usually misses it. Having more stations in region would improve whole
network drastically. Countries in middle east tend to be not wealthy and
low tech. At least this is what I assume.

Over time I learned to improve my systems. One of my best stations you
can see here
<https://map.blitzortung.org/statistic_0.php?station=2003&region=1> You
can compare to your
<https://map.blitzortung.org/statistic_0.php?station=2075&region=1>

You can see your station has some peak on 46kHz. This is aggressive
noise. That why I proposed I send filter chips to you at my expense. You
can suppress anything above 40khz and by doing this gain more
sensitivity.

On those statistics focus on orange line. This is ratio in % of how many
signals sent to server made any sense at all. In case of noise, your
ratio is low. Good stations tend have orange next to ceiling most of
time. I do not think you have freedom to find better spot with less
noise.

Just in case - this is link where I made screenshot from
<https://map.blitzortung.org/#5.86/35.528/31.176> \<cite\>Tõnu - email
chat\</cite\>

\</blockquote\> 2003 vs 2075 , filtering matters\
![2003](/tamiwiki/projects/screencapture-map-blitzortung-org-statistic-0-php-2023-10-15-20_49_14.jpg){width="450"
query="?450"}
![2075](/tamiwiki/projects/screencapture-map-blitzortung-org-statistic-0-php-2023-10-15-20_49_32.jpg){width="450"
query="?450"}

mail regarding the LTC1569

    tel aviv makers (TAMI)
    shoken 19 a
    Tel Aviv 
    6653205
    ISRAEL

### optional filter

the lt15697
([datasheet](https://www.analog.com/media/en/technical-documentation/data-sheets/15697fs.pdf)

was soldered 14/01/2024
![](/tamiwiki/projects/photo_2024-01-15_23-51-16.jpg){.align-right
width="600" query="?600"}

~~(lost?)~~\
![20231015-205547.png](/tamiwiki/projects/pasted/20231015-205547.png)

documnatation

-   [offical
    gdoc](https://docs.google.com/document/d/1KzPZJW0ErInFtfTCmhNhSZTOpg6N2bgZDyIxkh_DRVs/pub?1500735772&urp=gmail_link&gxid=-8203366#h.of4ol4e0qixd)
-   ![pdf mirror](/tamiwiki/projects/blitzortung.org_documentation.pdf)
