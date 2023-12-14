// MovieList.js

import React from 'react';
import MovieTile from '../movie-tile/MovieTile';

function MovieList(props) {
  const { movies, editMovieHandler, deleteMovieHandler } = props;

  return (
    <div className="movie-list-container">
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieTile
            key={movie.name}
            movieInfo={movie}
            onTileClick={(selectedMovie) => {
              console.log(`Selected movie: ${selectedMovie.name}`);
            }}
            onEditClick={(e) => {
              e.preventDefault();
              console.log(`Edit movie: ${movie.name}`);
              editMovieHandler(movie);
            }}
            onDeleteClick={(e) => {
              e.preventDefault();
              console.log(`Delete movie: ${movie.name}`);
              deleteMovieHandler(movie);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
