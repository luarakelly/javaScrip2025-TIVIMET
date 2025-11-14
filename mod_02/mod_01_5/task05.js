function collectUniqueNumbers() {
  const numbers = [];

  while (true) {
    const input = Number(prompt("Enter a number:"));

    // Check if number is already entered
    if (numbers.includes(input)) {
      alert("The number has already been given!");
      break;
    }

    numbers.push(input);
  }

  // Sort numbers in ascending order
  numbers.sort((a, b) => a - b);

  // Print to console
  console.log("Numbers in ascending order:");
  for (let num of numbers) {
    console.log(num);
  }
}
