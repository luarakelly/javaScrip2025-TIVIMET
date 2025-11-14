function reverseNumbers() {
    // Store numbers
    const numbers = []; 
    
    // ask user for 5 numbers
    for (let i = 0; i < 5; i++) {
        const num = Number(prompt(`Enter number ${i + 1}:`));
        numbers.push(num); // add each number to array
    }

    // print in reverse order using for loop
    console.log("Numbers in reverse order:");
    for (let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }
}

reverseNumbers();

