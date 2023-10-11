import React, { useState } from 'react';
import './GenreSelect.css'; // Import the CSS file


function GenreSelect({ genres, selectedGenre, onSelect }) {

  const moviePosters = [
    'https://via.placeholder.com/200x300?text=Movie1',
    'https://via.placeholder.com/200x300?text=Movie2',
    'https://via.placeholder.com/200x300?text=Movie3',
    'https://via.placeholder.com/200x300?text=Movie4',
    'https://via.placeholder.com/200x300?text=Movie5',
  ];

  return (
    <div className="genre-background">
      <ul className="genre-container">
        {genres.map((genre) => (
          <li key={genre}>
            <button
              className={genre === selectedGenre ? 'selected-button' : 'genre-button'}
              onClick={() => onSelect(genre)}
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>

      <div >
        {moviePosters.map((poster, index) => (
          <img key={index} src={poster} alt={`Movie Poster ${index + 1}`} className="movie-poster" />
        ))}
      </div>
    </div>
  );
}
export default GenreSelect;