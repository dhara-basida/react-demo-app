import './GenreSelect.css';

function GenreSelect({ genres, selectedGenre, onSelect }) {

  return (
    <div className="genre-background">
      <ul className="genre-container">
        {genres.map((genre) => (
          <li key={genre}>
            <button data-testid="genre-select"
              className={genre === selectedGenre ? 'selected-button' : 'genre-button'}
              onClick={() => onSelect(genre)}>
              {genre}
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}
export default GenreSelect;
