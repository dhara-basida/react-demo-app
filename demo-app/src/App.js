import './App.css';
import Counter from './components/counter/Counter';
import SearchForm from './components/search-form/SearchFrom';
import GenreSelect from './components/genre-select/GenreSelect';
import React, { useState } from 'react';


function App() {

  const [searchResults, setSearchResults] = useState([]);

  const [selectedGenre, setSelectedGenre] = useState('ALL');
  const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (query) => {
    setSearchResults(query);
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="App">
      <Counter initialValue={10} />

      <SearchForm initialSearchQuery='Titanic' searchResults={searchResults} onSearch={handleSearch} />

      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />
      
      <p>Selected Genre: <b> {selectedGenre}</b> Search query: <b>{searchResults}</b></p>{/*  temporary added to verify the selected item */}

    </div>
  );
}

export default App;
