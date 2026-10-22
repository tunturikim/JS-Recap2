'use strict';

const numberOfMovies = parseInt(prompt(`Enter a number of movies you want to rate: `));
const movieListDiv = document.getElementById('movie-list');

const movies = [];

for (let num = 0; num < numberOfMovies; num++) {
  const title = prompt(`Enter the title of movie ${num + 1}: `);
  const rating = parseFloat(prompt(`Enter the rating for "${title}": `));
  const movie = {
    title: title,
    rating: rating,
  };
  movies.push(movie);
  console.log(`Movie ${num + 1}: Title - "${movie.title}", Rating - ${movie.rating}`);
}

movies.sort((a, b) => b.rating - a.rating);
console.log(`\nMovies sorted by rating (highest to lowest):`);

for (const movie of movies) {
    const movieTitle = document.createElement('h3');
    const movieRating = document.createElement('p');
    movieTitle.textContent = `${movie.title}`;
    movieRating.textContent = `Rating: ${movie.rating}`;
    movieListDiv.appendChild(movieTitle);
    movieListDiv.appendChild(movieRating);
    console.log(`Title: "${movie.title}", Rating: ${movie.rating}`);
}
