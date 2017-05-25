

function printRange(startNum, stopNum, incrNum){

  // If user doesn't enter a skip number, default to 1
  if (incrNum === undefined) {
    incrNum = 1;
  }
  if (stopNum === undefined){
    stopNum = startNum;
    startNum = 0;
  }

  // Increasing
  if (startNum < stopNum) {
    for (i=startNum; i < stopNum; i+= incrNum){
      console.log(i);
    }
  } else {
    // If the increment (decrement) number is negative, make it positive
    if (incrNum < 0){
      incrNum *= -1;
    }
    for (i=startNum; i > stopNum; i-= incrNum){
      console.log(i);
    }
  }
}

printRange(2, 10, 2);
printRange(2, 10);
printRange(-2, -10, 2);
printRange(-2, -10, -2);
printRange(4);
