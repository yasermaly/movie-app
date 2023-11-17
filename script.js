const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=696487e5f5de677bf2012476a130d74d&page=1';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=696487e5f5de677bf2012476a130d74d&query="';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const form = document.getElementById('form');
const search = document.getElementById('search');

const main = document.getElementById('main');

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
  }
});
