const form = document.getElementById('searchForm');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const query = document.getElementById('query').value;

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await response.json();

  console.log(data);  // REQUIRED for Task 2
});
