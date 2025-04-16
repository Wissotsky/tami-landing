async function fetchMeetups() {
    const resp = await fetch("./meetup.json");
    const data = await resp.json();

    data.db.all.forEach(element => {
        if (element.title.includes("Music")) {
            element.isMusicEvent = true;
        } else if (element.title.includes("Repair")) {
            element.isRepairEvent = true;
        } else if (element.title.includes("Open")) {
            element.isOpenNightEvent = true;
        } else if (element.title.includes("π")) {
            element.isMathEvent = true;
        } else {
            element.isOtherEvent = true;
        }
    });
    return data.db.all
}

function parseMeetupDateTime(eventDateTime) {
    // formatter for relative time
    let rtf = new Intl.RelativeTimeFormat('en-HE',{numeric:"auto"}) // usage example rtfEnglish.format(1,'day');

    let options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    };

    // formatter for date
    let dtf = new Intl.DateTimeFormat("en-HE",options) // .format(new Date())


    let currentTime = new Date();
    let   eventTime = new Date(eventDateTime);

    let timeDifferenceInMilliseconds = eventTime - currentTime;
    let rtfString                    = "Something Broke :("; // Initialize rtfString

    if (Math.abs(timeDifferenceInMilliseconds/1000) < 1) { // if the next event is less than 1 second away
        rtfString = "Starting Now"
        
    } else if (Math.abs(timeDifferenceInMilliseconds/(1000*60)) < 1) { // if in lt 1 minute
        let timeDiffInt = Math.floor(timeDifferenceInMilliseconds/(1000));
        rtfString = rtf.format(timeDiffInt,"second");
        
    } else if (Math.abs(timeDifferenceInMilliseconds/(1000*60*60)) < 1) { // if in lt 1 hour
        let timeDiffInt = Math.floor(timeDifferenceInMilliseconds/(1000*60));
        rtfString = rtf.format(timeDiffInt,"minute");
        
    } else if (Math.abs(timeDifferenceInMilliseconds/(1000*60*60*24)) < 1) { // if in lt 1 day
        let timeDiffInt = Math.floor(timeDifferenceInMilliseconds/(1000*60*60));
        rtfString = rtf.format(timeDiffInt,"hour");
        
    } else { // if the next event is more than 1 day away
        let timeDiffInt = Math.floor(timeDifferenceInMilliseconds/(1000*60*60*24));
        rtfString = rtf.format(timeDiffInt,"day");
    }

    //rtfString;
    //dtf.format(eventTime);
    return `${dtf.format(eventTime)} (${rtfString})`; // return the formatted date and time
}