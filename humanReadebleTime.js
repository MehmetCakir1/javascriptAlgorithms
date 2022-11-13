// Write a function, which takes a non-negative integer (seconds)
// as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    let hour = Math.trunc(seconds/3600);
    let minute = Math.trunc(((seconds/3600)-hour)*60);
    let second = Math.round(((((seconds/3600)-hour)*60)-minute)*60);
    if(second==60){
        second=00;
        minute=minute+1
    }
    hour < 10 ? hour="0"+hour : hour;
    minute < 10 ? minute="0"+minute : minute;
    second < 10 ? second="0"+second : second;
    return hour + ":" + minute + ":" + second
  }

//   console.log(humanReadable (0));
//   console.log(humanReadable (59));
//   console.log(humanReadable (60));
//   console.log(humanReadable (3599));
//   console.log(humanReadable (3600));
//   console.log(humanReadable (359999));
//   console.log(humanReadable (49320));
  console.log(humanReadable (105360));


