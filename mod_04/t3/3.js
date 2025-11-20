const form = document.getElementById('searchForm');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const query = document.getElementById('query').value;

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await response.json();

  console.log(data);

  resultsDiv.innerHTML = ''; // clear old results

  data.forEach(tvShow => {
    const show = tvShow.show;

    const imageUrl = show.image?.medium || "";

    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.textContent = show.name;

    const link = document.createElement('a');
    link.href = show.url;
    link.textContent = "Details";
    link.target = "_blank";

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = show.name;

    const summaryDiv = document.createElement('div');
    summaryDiv.innerHTML = show.summary;

    article.appendChild(h2);
    article.appendChild(link);
    article.appendChild(img);
    article.appendChild(summaryDiv);

    resultsDiv.appendChild(article);
  });
});
