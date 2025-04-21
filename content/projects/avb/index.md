# AVB

AVB (Audio Video Bridging) is a protocol that address the lack of a
unified, open protocol for video and audio distribution over standard
ethernet network.

\<blockquote\> Audio Video Bridging (AVB) is a common name for the set
of technical standards which provide improved synchronization, low
latency, and reliability for switched Ethernet networks.\[3\] AVB
embodies the following technologies and standards:

*IEEE 802.1AS-2011*: Timing and Synchronization for Time-Sensitive
Applications (gPTP);\
*IEEE 802.1Qav-2009*: Forwarding and Queuing for Time-Sensitive Streams
(FQTSS);\
*IEEE 802.1Qat-2010*: Stream Reservation Protocol (SRP);\
*IEEE 802.1BA-2011*:\[4\] Audio Video Bridging (AVB) Systems;\
*IEEE 1722-2011* Layer 2 Transport Protocol for Time-Sensitive
Applications (AV Transport Protocol, AVTP);\
*IEEE 1722.1-2013* Device Discovery, Enumeration, Connection Management
and Control Protocol (AVDECC).
\<cite\>[wikipedia/Audio_Video_Bridging](https://en.wikipedia.org/wiki/Audio_Video_Bridging)\</cite\>
\</blockquote\>

## criticism

good reddit thread with some notable quotes

latency varies. \<blockquote\> AVB is not plug and play on MacOS. It was
a few versions ago. Now it's slightly off-kilter with the implementation
found in MOTU's and RME's useage. Massive headaches if you pretend it's
as good as Dante's Virtual Soundcard.\
When it works, the AVB virtual device adds about \~15ms of latency. (not
unlike DVS)\
AVB is very low latency between dedicated devices with specific
chipsets. Not computers.\
Why does [RME use USB](https://rme-audio.de/rme-usb-technology.html)?
Because they know what they're doing.\
\<cite\>[reddit](https://www.reddit.com/r/audioengineering/comments/181m9tk/comment/kaf7zj7)\</cite\>
\</blockquote\>

and special switches are a bitch \<blockquote\> AVB requires specialised
chipsets in switches; which makes it a nightmare. Dante and Ravenna work
on most reasonable off the shelf managed switch chipsets - so the
economies of scale and simplicity of installation / integration does not
lie with AVB.
\<cite\>[reddit](https://www.reddit.com/r/audioengineering/comments/181m9tk/comment/kadx1to)\</cite\>
\</blockquote\>

## products

1.  150\$ AVB to USBC adaptor, **MAC only**
    [B&H](https://www.bhphotovideo.com/c/product/1686536-REG/sonnet_avb_tb_thunderbolt_avb_ge_adapter.html)
2.  400\$ MOTU AVB Switch
    [B&H](https://www.bhphotovideo.com/c/product/1071378-REG/motu_9305_five_port_avb_ethernet_switch.html),
    [motu AVB
    line](https://motu.com/en-us/products/audio-products/pro-audio-interfaces)
3.  [List_of_AVB-capable_Ethernet_switches](https://support.biamp.com/Tesira/AVB/List_of_AVB-capable_Ethernet_switches)
    ![mirror](/tamiwiki/projects/list_of_avb-capable_ethernet_switches_-_biamp_cornerstone.pdf)
