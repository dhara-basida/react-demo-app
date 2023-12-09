// MovieList.js

import React from 'react';
import MovieTile from '../movie-tile/MovieTile';

function MovieList(props) {
  const { movies, handlers } = props;

  return (
    <div className="movie-list-container">
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieTile
            key={movie.name}
            movieInfo={movie}
            onTileClick={(selectedMovie) => {
              console.log(`Selected movie: ${selectedMovie.name}`);
             // onSelectCallback(selectedMovie); // Call the onSelectCallback if needed
            }}
            onEditClick={(selectedMovie) => {
              console.log(`Edit movie: ${selectedMovie.name}`);
              handlers.editMovieHandler(selectedMovie); // Call the editMovieHandler
            }}
            onDeleteClick={(selectedMovie) => {
              console.log(`Delete movie: ${selectedMovie.name}`);
              handlers.deleteMovieHandler(selectedMovie); // Call the deleteMovieHandler
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
