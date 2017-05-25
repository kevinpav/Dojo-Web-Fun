
function morningOrEvening(ampm){
  if (ampm == "AM") {
    return "morning";
  } else {
    return "evening";
  }
}

function tellMeTheTime(hour, minute, ampm){

  if (minute < 30) {
    console.log("It's just after "+ hour +" in the " + morningOrEvening(ampm) + ".");
  } else {
    console.log("It's almost "+ (hour+1) +" in the " + morningOrEvening(ampm) + ".");
  }
  return;
}

var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

tellMeTheTime(HOUR, MINUTE, PERIOD);

// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = "PM";
// Put calling values in directly
tellMeTheTime(7, 15, "PM");
