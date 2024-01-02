// MovieList.js

import React, { useEffect } from 'react';
import MovieTile from '../movie-tile/MovieTile';
import './MovieList.css'

function MovieList(props) {
  const { movies, editMovieHandler, deleteMovieHandler ,handleSelectedMovie} = props;


  return (
    <div className="movie-list-container">
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieTile
            key={movie.id}
            movieInfo={movie}
            onTileClick={(selectedMovie) => {
              handleSelectedMovie(selectedMovie);
            }}
            onEditClick={(e) => {
              e.preventDefault();
              editMovieHandler(movie);
            }}
            onDeleteClick={(e) => {
              e.preventDefault();
              deleteMovieHandler(movie);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
