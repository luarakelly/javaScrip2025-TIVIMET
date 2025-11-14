function getParticipants() {
  const participants = [];
  const count = Number(prompt("Enter the number of participants:"));

  // Ask for each participant name
  for (let i = 0; i < count; i++) {
    const name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name);
  }

  // Sort names alphabetically
  participants.sort();

  // Build HTML ordered list
  let html = "<ol>";
  for (let name of participants) {
    html += `<li>${name}</li>`;
  }
  html += "</ol>";

  // Display on webpage
  document.getElementById("output").innerHTML = html;
}
