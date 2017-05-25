// Random Chance
// Let's play the slots!
//
// Make a function that takes a number of quarters (1 quarter = 1 game).
//
// There is a 1 in 100 chance to win the slot machine (which will give you between 50 - 100 quarters -- use Math.random and Math.floor to pick a random number of coins).
//
// While the user still has quarters, use Math.random to determine if they won.
//
// If they ever win, return the number of quarters (ex: they had 50 remaining quarters and won 90, so it should return 140).
//
// Return 0 if all the quarters were wasted.
//
// Bonus (Only If You Have Time):
//
// Let the user pass the number they are willing to leave with
// (ex: If they won the lottery and still have 40 coins, they will keep playing until they have collected 200 coins)


function playSlots(numQuarters, stopLoss){

  var wonQuarters = 0;
  var mySpin = 0;
  var numSpins = 0;

  // If player did not specify a stop limit, enter zero
  if (stopLoss == undefined){
    stopLoss = 0;
  }

  // While we still have quarters keep playing game
  while (numQuarters > stopLoss){

    // 1 in 100 chance of winning
    mySpin = Math.trunc(Math.random() * 100);
    numQuarters--;
    numSpins++;
    // Compare with > 98 instead of >= 99
    if (mySpin > 98) {
      // Player wins between 50 and 100 quarters
      wonQuarters = Math.trunc(Math.random() * 51) + 50;
      numQuarters += wonQuarters;
      // Tell the player how much they won!
      console.log("You won +" + wonQuarters + " quarters in " + numSpins + " spins!!");
    }
  }

  return(numQuarters + wonQuarters);
}

// 100 spins, stop at 40 quarters
console.log(playSlots(100,40));
// 1000 spins, stop at 50 quarters
console.log(playSlots(1000,50));
