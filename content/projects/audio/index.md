# firefly

for jack applications

    PIPEWIRE_LATENCY="128/48000" pw-jack jack_delay

<https://linuxmusicians.com/viewtopic.php?t=23539>
<https://linuxmusicians.com/viewtopic.php?t=25556>

change defaults in

     cat pipewire.conf | grep 256
        default.clock.quantum       = 256
