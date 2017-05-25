// Let's make it look fancy! Write a function that will make it print like:
//
// 0 -> James
// 1 -> Jill
// 2 -> Jane
// 3 -> Jack
// Bonus (Only If You Have Time):
//
// Let the user pass in the symbol that will print (ex: "->", "=>", "::", "-----")
// Have an extra parameter reversed. If the user passes true, print the elements in reverse order

function fancyArrayPrint(array, ptr){

  if (ptr == undefined){
    ptr = "->";
  }

  for (var i=0; i < array.length; i++){

    console.log(i + ' ' + ptr + ' ' + array[i]);
  }
}

fancyArrayPrint(["James", "Jill", "Jane", "Jack"]);
fancyArrayPrint(["James", "Jill", "Jane", "Jack"], "=>");
