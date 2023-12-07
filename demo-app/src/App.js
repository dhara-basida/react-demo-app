import './App.css';
import React, { useState } from 'react';
import Counter from './components/counter/Counter';
import SearchForm from './components/search-form/SearchForm';
import GenreSelect from './components/genre-select/GenreSelect';
import MovieDetails from './components/movie-details/MovieDetails';
import MovieList from './components/movie-list/MovieList';
import MovieForm from './components/movie-form/MovieForm';
import ModalDialog from './components/modal-dialog/ModalDialog';

function App() {

  const [searchResults, setSearchResults] = useState(['Titanic']);

  const [selectedGenre, setSelectedGenre] = useState('ALL');
  const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (query) => {
    setSearchResults(query);
  };

  const openDialog = (movie) => {
    setSelectedMovie(movie);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedMovie(null);
    setIsDialogOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form data submitted:', formData);
    closeDialog();
  };

  const handleDeleteClick = (movie) => {
    openDialog(movie);
  };

  const handleDeleteConfirm = () => {
    console.log('Movie deleted:', selectedMovie);
    closeDialog();
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => openDialog()}>Add Movie</button>
        {isDialogOpen && (
          <ModalDialog title={selectedMovie ? 'Edit Movie' : 'Add Movie'} onClose={closeDialog}>
            {selectedMovie ? (
              <div>
                <p>Are you sure you want to delete this movie?</p>
                <button onClick={handleDeleteConfirm}>Delete</button>
              </div>
            ) : (
              // Content for the movie form
              <MovieForm initialMovieInfo={selectedMovie} onSubmit={handleFormSubmit} />
            )}
          </ModalDialog>
        )}
      </div>

      <MovieForm onSubmit={handleFormSubmit} />

      <MovieDetails movieDetailInfo={{ imageUrl: 'https://picsum.photos/seed/picsum/200/300', name: 'Titanic', releaseYear: 2022, rating: 8.5, duration: '2h 30m', description: 'It was nice' }} />
      {/* Enable  below Counter component for testing purpose
      <Counter initialValue={10} /> */}

      <SearchForm initialSearchQuery={searchResults} searchResults={searchResults} onSearch={handleSearch} />

      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />

      {/* <p>Selected Genre: <b> {selectedGenre}</b> Search query: <b>{searchResults}</b></p> temporary added to verify the selected item */}
      <MovieList />
    </div>
  );
}

export default App;
