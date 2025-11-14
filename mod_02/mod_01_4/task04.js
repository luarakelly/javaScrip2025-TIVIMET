function sortNumbersDescending() {
  const numbers = [];
  let input;

  // Ask until user gives 0
  while (true) {
    input = Number(prompt("Enter a number (0 to stop):"));
    if (input === 0) {
      break;
    }
    numbers.push(input);
  }

  // Sort from largest to smallest
  numbers.sort((a, b) => b - a);

  // Print numbers in console
  console.log("Numbers from largest to smallest:");
  for (let num of numbers) {
    console.log(num);
  }
}

sortNumbersDescending();
