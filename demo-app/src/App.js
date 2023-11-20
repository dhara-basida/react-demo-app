import './App.css';
import Counter from './components/counter/Counter';
import SearchForm from './components/search-form/SearchForm';
import GenreSelect from './components/genre-select/GenreSelect';
import MovieDetails from './components/movie-details/MovieDetails';
import MovieList from './components/movie-list/MovieList';

import React, { useState } from 'react';

function App() {

  const [searchResults, setSearchResults] = useState(['Titanic']);

  const [selectedGenre, setSelectedGenre] = useState('ALL');
  const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (query) => {
    setSearchResults(query);
  };

  return (
    <div className="App">
      <MovieDetails movieDetailInfo={{ imageUrl: 'https://picsum.photos/seed/picsum/200/300', name: 'Titanic', releaseYear: 2022, rating: 8.5, duration: '2h 30m', description: 'It was nice' }} />
      <Counter initialValue={10} />

      <SearchForm initialSearchQuery={searchResults} searchResults={searchResults} onSearch={handleSearch} />

      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />

      <p>Selected Genre: <b> {selectedGenre}</b> Search query: <b>{searchResults}</b></p>{/*  temporary added to verify the selected item */}
      <MovieList />
    </div>
  );
}

export default App;
