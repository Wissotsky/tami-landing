# 5G

until we get fiber\.... 5G is our option. ADSL took us this far.

![photo_2024-02-16_01-19-36.jpg](/tamiwiki/projects/photo_2024-02-16_01-19-36.jpg){width="300"
query="?300"}

\@astra reports

> I got just shy of a gigabit on a fold 4 at the entrance to Tami
> (inside, where the DSL modem is right now) and about 500mbits with an
> iPhone 15

so that\'s the benchmark.

in a conversation with our cell provider (02/15/2024), we extracted the
following info.

> Support for 5G will be in accordance with the frequencies supported by
> Pelephone:
>
> Frequency 3700MHz-3800MHz in the frequency band Band N78
>
> and with a bandwidth of 60MHz (soon a maximum bandwidth of 100MHz will
> be activated),
>
> even if the specific model of the customer is not sold by Pelephone.\"

------------------------------------------------------------------------

### GL-X3000

![20240216-105850.png](/tamiwiki/projects/pasted/20240216-105850.png){.align-right
query="?x200"} product
[page](https://www.gl-inet.com/products/gl-x3000/)
[mirror](https://archive.is/wip/Y2icN)\
its running
[openWRT](https://forum.openwrt.org/t/gl-inet-gl-x3000-spitz-ax-support/162143)

  Technology   Mode      Bands
  ------------ --------- -----------------------------------------------------------------------------------------------------------
  5G NR        NSA       n1/ 2/ 3/ 5/ 7/ 8/ 12/ 13/ 14/ 18/ 20/ 25/ 26/ 28/ 29/ 30/ 38/ 40/ 41/ 48/ 66/ 70/ 71/ 75/ 76/ 77/ 78/ 79
               SA        n1/ 2/ 3/ 5/ 7/ 8/ 12/ 13/ 14/ 18/ 20/ 25/ 26/ 28/ 29/ 30/ 38/ 40/ 41/ 48/ 66/ 70/ 71/ 75/ 76/ 77/ 78/ 79
  LTE          LTE-FDD   B1/ 2/ 3/ 4/ 5/ 7/ 8/ 12/ 13/ 14/ 17/ 18/ 19/ 20/ 25/ 26/ 28/ 29/ 30/ 32/ 66/ 71
               LTE-TDD   B34/ 38/ 39/ 40/ 41/ 42/ 43/ 48
               LAA       B46
  UMTS         WCDMA     B1/ 2/ 4/ 5/ 8/ 19
  GNSS                   GPS/ GLONASS/ BDS/ Galileo/ QZSS

#### antenna drama

the 6 antennas it came with where left \[1\] on a random bed in a random
hotel room in NYC\...\
so we had to roll our own, [the internet was not
optimistic](https://www.ispreview.co.uk/talk/threads/diy-5g-antenna.40673/post-328424),
but YouTube rules.

but before that we tried to connect without any antennas (carful)\
![attami_no_anntenas.jpg](/tamiwiki/projects/attami_no_anntenas.jpg){query="?x300"}

and with random antennas we found in Tami RF bins.\
![just_bunch_of_random_antennas.jpg](/tamiwiki/projects/just_bunch_of_random_antennas.jpg){query="?x300"}
![just_bunch_of_random_antennas_resault.jpg](/tamiwiki/projects/just_bunch_of_random_antennas_resault.jpg){query="?x300"}
![just_bunch_of_random_antennas_resault_speedtes.jpg](/tamiwiki/projects/just_bunch_of_random_antennas_resault_speedtes.jpg){query="?x300"}

##### 1st build

(20/15/2024)\
enter the *5G Antenna 9db Gain by Andrew McNeil*

![](youtube>klceEWWDMb0){query="?"}

Design files \>
![5g_antenna_9db_gain_by_andrew_mcneil\_.pdf](/tamiwiki/projects/5g_antenna_9db_gain_by_andrew_mcneil_.pdf) -
print 100% scale on A4 paper

our Neighbours at [BB jewelry
store](https://maps.app.goo.gl/LyBvqf8SReKoHfYM6) stock cheap brass
sheets, the design calls for 0.5mm but they only had 0.4 and 0.6 mm.\
currently we used the 0.4 and also got nice scissors.

![photo_2024-02-15_19-04-07.jpg](/tamiwiki/projects/photo_2024-02-15_19-04-07.jpg){width="200"
query="?200"}
![photo_2024-02-15_19-04-07_2\_.jpg](/tamiwiki/projects/photo_2024-02-15_19-04-07_2_.jpg){width="200"
query="?200"}
![photo_2024-02-15_19-04-08.jpg](/tamiwiki/projects/photo_2024-02-15_19-04-08.jpg){width="200"
query="?200"}
![photo_2024-02-15_21-06-18.jpg](/tamiwiki/projects/photo_2024-02-15_21-06-18.jpg){width="200"
query="?200"}

result\
![photo_2024-02-15_21-26-04_3\_.jpg](/tamiwiki/projects/photo_2024-02-15_21-26-04_3_.jpg)\
![photo_2024-02-15_21-26-04_2\_.jpg](/tamiwiki/projects/photo_2024-02-15_21-26-04_2_.jpg){query="?x300"}

------------------------------------------------------------------------

### media

\[1\]\
![photo_2024-02-01_18-32-55.jpg](/tamiwiki/projects/photo_2024-02-01_18-32-55.jpg){width="200"
query="?200"}

\[2\] general images of the SMA pigtails from the GL-X3000\
![photo_2024-02-01_23-13-39.jpg](/tamiwiki/projects/photo_2024-02-01_23-13-39.jpg){query="?300x"}
![photo_2024-02-15_16-01-01_2\_.jpg](/tamiwiki/projects/photo_2024-02-15_16-01-01_2_.jpg){query="?200x"}
![photo_2024-02-15_16-01-00.jpg](/tamiwiki/projects/photo_2024-02-15_16-01-00.jpg){query="?x200"}
![photo_2024-02-15_16-01-01.jpg](/tamiwiki/projects/photo_2024-02-15_16-01-01.jpg){query="?300x"}
