// Ask the user for a year
const year = parseInt(prompt("Enter a year: "));

// Check if the year is a leap year
let message;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  message = `${year} is a leap year.`;
} else {
  message = `${year} is not a leap year.`;
}

// Print the result to the HTML document
document.querySelector("#result").innerHTML = message;
