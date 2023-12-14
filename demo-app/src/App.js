import './App.css';
import React, { useState } from 'react';
import Counter from './components/counter/Counter';
import SearchForm from './components/search-form/SearchForm';
import GenreSelect from './components/genre-select/GenreSelect';
import MovieDetails from './components/movie-details/MovieDetails';
import MovieList from './components/movie-list/MovieList';
import MovieForm from './components/movie-form/MovieForm';
import ModalDialog from './components/modal-dialog/ModalDialog';
import DeleteMovie from './components/delete-movie/DeleteMovie';

function App() {

  const [searchResults, setSearchResults] = useState(['Titanic']);

  const [selectedGenre, setSelectedGenre] = useState('ALL');
  const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [visible, setvisible] = useState(false);
  const [modalComponent, setModalComponent] = useState({ title: '', children: null });

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (query) => {
    setSearchResults(query);
  };

  const closeDialog = () => {
    setSelectedMovie(null);
    setvisible(false);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form data submitted:', formData);
    closeDialog();
  };

  const handleDeleteConfirm = () => {
    //console.log('Movie deleted:', selectedMovie);
    closeDialog();
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
    imageUrl: 'image/Pulp Fiction.png',
    name: 'Pulp Fiction',
    releaseYear: 2024,
    releaseDate: '2000-05-23',
    rating: 4,
    genres: ['DOCUMENTARY', 'COMEDY'],
    runtime: '3h 30m',
    description: 'It was really a nice movie'
  };

  const movieInfo2 = {
    imageUrl: 'image/Bohemian Rhapsody.png',
    name: 'Bohemian Rhapsody',
    releaseYear: 2023,
    releaseDate: '2023-11-10',
    rating: 5,
    genres: ['DOCUMENTARY', 'HORROR'],
    runtime: '4h 30m',
    description: 'It was a dramatic movie'
  };

  const movieInfo3 = {
    imageUrl: 'image/Kill Bill Vol2.png',
    name: 'Kill Bill: Vol2',
    releaseYear: 1994,
    releaseDate: '2000-05-23',
    rating: 4,
    genres: ['DOCUMENTARY', 'COMEDY'],
    runtime: '3h 30m',
    description: 'It was really a nice movie'
  };

  const movieInfo4 = {
    imageUrl: 'image/Avengers War of Infinity.png',
    name: 'Avengers: War of Infinity',
    releaseYear: 2024,
    releaseDate: '2023-11-10',
    rating: 5,
    genres: ['DOCUMENTARY', 'HORROR'],
    runtime: '4h 30m',
    description: 'It was a dramatic movie'
  };

  const movies = [
    movieInfo, movieInfo2, movieInfo3, movieInfo4
  ];


  const editMovieHandler = (activeMovie) => {
    setModalComponent({
      title: 'EDIT MOVIE',
      children: <MovieForm initialMovieInfo={activeMovie} onSubmit={handleFormSubmit} />
    })
    setvisible(true);
  };

  const deleteMovieHandler = (activeMovie) => {
    // e.stopPropogation()
    setModalComponent({
      title: 'DELETE MOVIE',
      children: <DeleteMovie onDelete={() => handleDeleteConfirm()} />
    })
    setvisible(true);
  }


  return (
    <div className="App">
      <div>
        <button onClick={addMovieHandler1}>Add Movie</button>
      </div>

      {
        visible && <ModalDialog title={modalComponent.title} onClose={() => setvisible(false)}>
          {modalComponent.children}
        </ModalDialog>
      }

      {/* <MovieDetails movieDetailInfo={{ imageUrl: 'https://picsum.photos/seed/picsum/200/300', name: 'Titanic', releaseYear: 2022, rating: 8.5, duration: '2h 30m', description: 'It was nice' }} /> */}
      {/* Enable  below Counter component for testing purpose
      <Counter initialValue={10} /> */}

      <SearchForm initialSearchQuery={searchResults} searchResults={searchResults} onSearch={handleSearch} />

      <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />

      {/* <p>Selected Genre: <b> {selectedGenre}</b> Search query: <b>{searchResults}</b></p> temporary added to verify the selected item */}
      <MovieList movies={movies} editMovieHandler={editMovieHandler} deleteMovieHandler={deleteMovieHandler} />
    </div>
  );
}

export default App;
