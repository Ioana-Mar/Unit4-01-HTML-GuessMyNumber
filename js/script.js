'use strict'

function buttonClicked(){
  // variables for user's random integer guess
  let guess = parseInt(document.getElementById("guess").value)
  let randInt = Math.random() * 5 + 1

  // if statement that checks if number is within range of random number generator
  if(guess < 1 || guess > 6){
    // displays message to pick a number within range
    document.getElementById('answer').innerHTML = "That number isn't between 1 and 6!"
    
  } else {
    // if statement that checks if the random number and user's guess are the same
    if(randInt.toFixed() == guess){
      // congratulates user for picking the right number
      document.getElementById('answer').innerHTML = "You picked the right number, " + randInt.toFixed() + "!"
      
    } else {
      // tells user they picked the wrong number and what the random value is
      document.getElementById('answer').innerHTML = "You, unfortunately, picked the wrong number. The correct number is " + randInt.toFixed()
    }
  } 
}