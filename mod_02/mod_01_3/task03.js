function showDogNames() {
  const dogs = [];

  // Ask for 6 dog names
  for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter the name of dog ${i + 1}:`);
    dogs.push(name);
  }

  // Sort in alphabetical order, then reverse
  dogs.sort();
  dogs.reverse();

  // Build unordered list HTML
  let html = "<ul>";
  for (let dog of dogs) {
    html += `<li>${dog}</li>`;
  }
  html += "</ul>";

  // Display the list on the page
  document.getElementById("output").innerHTML = html;
}
