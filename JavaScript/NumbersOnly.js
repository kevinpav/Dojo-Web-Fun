// Make a function that copies an array, ONLY accepting the items that are numbers.
//
// IT SHOULD RETURN A NEW ARRAY
// First method returns NEW array, with numbers only.
// Second method updates original array, removing non-numbers.

function numbersOnly(inArray){

  // var copyArray = [];

  for (i=0; i< inArray.length; i++){
    // if (typeof inArray[i] === "number") {
      // copyArray.push(inArray[i]);

    if (typeof inArray[i] !== "number") {
      inArray.splice(i,1);
    }
  }
  // return(copyArray);
}

var newArray = [1, "apple", -3, "orange", 0.5];
numbersOnly(newArray);

console.log(newArray);
