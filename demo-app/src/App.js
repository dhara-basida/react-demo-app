import './App.css';
import React, { useState } from 'react';
import Counter from './components/counter/Counter';
import SearchForm from './components/search-form/SearchForm';
import GenreSelect from './components/genre-select/GenreSelect';
import MovieDetails from './components/movie-details/MovieDetails';
import MovieList from './components/movie-list/MovieList';
import MovieForm from './components/movie-form/MovieForm';
import ModalDialog from './components/modal-dialog/ModalDialog';
import Dialog from './components/modal-dialog/Dialog';
import DeleteMovie from './components/delete-movie/DeleteMovie';

function App() {

  const [searchResults, setSearchResults] = useState(['Titanic']);

  const [selectedGenre, setSelectedGenre] = useState('ALL');
  const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [visible, setvisible] = useState(false);
  const [modalComponent, setModalComponent] = useState({ title: '', children: null });

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

  const addMovieHandler = () => {
    setModalComponent({ title: 'ADD MOVIE', children: <MovieForm /> })
    setvisible(true);
  };

  const [isDialogOpen1, setIsDialogOpen1] = useState(false);

  const handleOpenDialog1 = () => {
    setIsDialogOpen1(true);
  };

  const handleCloseDialog1 = () => {
    setIsDialogOpen1(false);
  };

  const addMovieHandler1 = () => {
    setModalComponent({ title: 'ADD MOVIE', children: <MovieForm onSubmit={handleFormSubmit} /> })
    setvisible(true);
  };

  const movieInfo = {
    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
    name: 'Titanic',
    releaseYear: 2021,
    genres: ['DOCUMENTARY', 'COMEDY'],
  };

  const movie = {
    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
    name: 'Universe',
    releaseYear: 2022,
    genres: ['DOCUMENTARY', 'HORROR'],
  };

  const movies = [
    movie, movieInfo
  ];


  const editMovieHandler = (e) => {
    e.stopPropogation()
    setModalComponent({
      title: 'EDIT MOVIE',
      children: <MovieForm initialMovieInfo={movie} onSubmit={handleFormSubmit} />
    })
    setvisible(true);
  };

  const deleteMovieHandler = (e) => {
    e.stopPropogation()
    setModalComponent({
      title: 'Delete MOVIE',
      children: <DeleteMovie />
    })
    setvisible(true);
  }


  return (
    <div className="App">
      <div>
        <button onClick={addMovieHandler1}>Add Movie</button>
        {/* <ModalDialog title="Add Movie" children={<MovieForm onSubmit={handleFormSubmit} />} onClose={() => false} /> */}
      </div>

      {
        visible && <ModalDialog title={modalComponent.title} onClose={() => setvisible(false)}>
          {modalComponent.children}
        </ModalDialog>
      }

      <button onClick={handleOpenDialog1}>Open Dialog</button>

      {isDialogOpen1 && (
        <Dialog title="My Dialog" onClose={handleCloseDialog1}>
          <MovieForm onSubmit={handleFormSubmit} />
          <p>This is the content of the dialog.</p>
        </Dialog>
      )}

      {/* <MovieForm onSubmit={handleFormSubmit} /> */}

      {/* <MovieDetails movieDetailInfo={{ imageUrl: 'https://picsum.photos/seed/picsum/200/300', name: 'Titanic', releaseYear: 2022, rating: 8.5, duration: '2h 30m', description: 'It was nice' }} /> */}
      {/* Enable  below Counter component for testing purpose
      <Counter initialValue={10} /> */}

      <SearchForm initialSearchQuery={searchResults} searchResults={searchResults} onSearch={handleSearch} />

      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />

      {/* <p>Selected Genre: <b> {selectedGenre}</b> Search query: <b>{searchResults}</b></p> temporary added to verify the selected item */}
      <MovieList movies={movies}  handlers={{ editMovieHandler, deleteMovieHandler }} />
    </div>
  );
}

export default App;
