//let cards = [7, 3, 9];

//for (let i = 0; i < cards.length; i++) {
  //console.log(cards[i]);}
 

 /* let sentence = ["hello","my","name","is","per"]
  let greetingEl = document.getElementById("greeting-el")

  for ( let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i]
   
  }
*/


/*function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var num1 = getRandomNumber(1, 100);
  var num2 = getRandomNumber(1, 100);
  var sum = num1 + num2;
  
  console.log("Random number 1: " + num1);
  console.log("Random number 2: " + num2);
  console.log("Sum of the two random numbers: " + sum);
  */

/*
  let p = 102
  let q = 107

function fork() {
  if (p < q) {
    return p
  } else if (q < p) {
    return q
  } else {
    return p
  }
}
let abbey = fork() 

  

  function sum() {
    return p + q
  }
let total = sum()
console.log(total)
*/


//generating random numbers
 function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1
  return randomNumber
 }


console.log(rollDice())