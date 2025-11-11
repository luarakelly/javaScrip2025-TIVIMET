'use strict';

// --- Task 4 ---
// Ask for the user name
const name = prompt("What is your name? ");

// Random number between 1 and 4
const randomNumber = Math.floor(Math.random() * 4);

let result;

// Decide the result based on the random number
if (randomNumber === 0) {
  result = "Gryffindor";
} else if (randomNumber === 1) {
  result = "Slytherin";
} else if (randomNumber === 2) {
  result = "Hufflepuff";
} else {
result}

// Print the result to the HTML document
document.querySelector("#result").innerHTML = `${name}, you are ${result}.`;

