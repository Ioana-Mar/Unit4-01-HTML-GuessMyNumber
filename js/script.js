'use strict'

function buttonClicked(){
  // variables for user's weight and object's weigh input from textfield
  let yourWeight = parseFloat(document.getElementById("your-weight").value)
  let objWeight = parseFloat(document.getElementById("object-weight").value)

  // if one of user input is negative, send message to input natural number
  if (yourWeight >= 0.00 && objWeight >= 0.00){
    // if statement for if object weights the same as person, less than person, or more than person
    if(yourWeight > objWeight){
      // calculation for differnce of weights
      let difference1 = (yourWeight - objWeight)
      // displays the difference + indicates if heavier
      document.getElementById('answer').innerHTML = "You are " + difference1.toFixed(2) + " lbs heavier than your object."
    
    }else if (yourWeight < objWeight){
      // calculation for differnce of weights
      let difference2 = (objWeight - yourWeight)
      // displays the difference + indicates if lighter
      document.getElementById('answer').innerHTML = "You are " + difference2.toFixed(2) + " lbs lighter than your object."
    
    }else{
      // displays message that indicates that user are of equal weight as user's object
      document.getElementById('answer').innerHTML = "You are the same weight as your object."
    }
  } else {
    document.getElementById('answer').innerHTML = "You cannot have a negative weight, please input (a) positive number(s)"
  }
}
}