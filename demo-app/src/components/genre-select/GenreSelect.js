import './GenreSelect.css';
import React, { useState } from 'react';


function GenreSelect({ genres, selectedGenre }) {

  const [selectGenre, setSelectGenre] = useState(selectedGenre)

  return (
    <div className="genre-background">
      <ul className="genre-container">
        {genres.map((genre) => (
          <li key={genre}>
            <button
              className={genre === selectGenre ? 'selected-button' : 'genre-button'}
              onClick={() => setSelectGenre(genre)}>
              {genre}
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}
export default GenreSelect;
