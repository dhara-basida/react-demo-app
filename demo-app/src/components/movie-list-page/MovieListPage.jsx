import React, { useState, useEffect } from 'react';
import SearchForm from '../search-form/SearchForm';
import MovieDetails from '../movie-details/MovieDetails';
import GenreSelect from '../genre-select/GenreSelect';
import SortControl from '../sort-control/SortControl';
import MovieList from '../movie-list/MovieList';
import DeleteMovie from '../delete-movie/DeleteMovie';
import MovieForm from '../movie-form/MovieForm';
import ModalDialog from '../modal-dialog/ModalDialog';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

const controller = new AbortController();
const MovieListPage = ({ searchQuery }) => {
    const navigate = useNavigate();
    // const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [sortCriterion, setSortCriterion] = useState(searchParams.get('sort') ? searchParams.get('sort') : 'release_date');
    const [activeGenre, setActiveGenre] = useState(null);

    const [visible, setvisible] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState(searchParams.get('genre') ? searchParams.get('genre') : 'ALL');
    const [modalComponent, setModalComponent] = useState({ title: '', children: null });

    useEffect(() => {
        getMovies();
    }, [sortCriterion, searchQuery, selectedGenre]);

    const getMovies = () => {
        const params = {
            sortBy: sortCriterion,
            sortOrder: 'asc',
            search: searchQuery,
            searchBy: 'title',
            filter: selectedGenre == 'ALL' ? '' : selectedGenre,
            offset: 0,
            limit: 1000
        };
        controller.abort();
        axios.get('http://localhost:4000/movies', { params })
            .then(function (response) {
                if (null != response) {
                    const mapMovieList = response?.data?.data?.map(movie => {
                        const imageUrl = movie.poster_path;
                        const name = movie.title;
                        const releaseDate = movie.release_date;
                        const rating = movie.vote_average;
                        const genres = movie.genres;
                        const runtime = movie.runtime;
                        const description = movie.overview;
                        const preparedObject = {
                            imageUrl: imageUrl ? imageUrl : 'https://picsum.photos/seed/picsum/200/300',
                            name: name,
                            releaseYear: new Date(releaseDate).getFullYear(),
                            releaseDate: releaseDate,
                            rating: rating,
                            genres: genres,
                            runtime: runtime,
                            description: description,
                            id: movie?.id
                        };
                        return preparedObject;
                    });

                    setMovieList(mapMovieList);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

    const handleSelectedMovie = (movie) => {
        setSelectedMovie(movie);
    }

    const handleSearchSubmit = (query) => {
        // setSearchQuery(query);
    };


    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
        const currentSearchParams = new URLSearchParams(searchParams);
        currentSearchParams.set('genre', genre);
        setSearchParams(currentSearchParams);
    };

    const addMovieHandler1 = () => {
        setModalComponent({ title: 'ADD MOVIE', children: <MovieForm onSubmit={handleFormSubmit} /> })
        setvisible(true);
    };

    const handleSetSortCriterion = (sort) => {
        const currentSearchParams = new URLSearchParams(searchParams);
        setSortCriterion(sort);
        currentSearchParams.set('sort', sort);
        setSearchParams(currentSearchParams);
    }

    const closeDialog = () => {
        setSelectedMovie(null);
        setvisible(false);
    };

    const handleFormSubmit = (formData) => {
        closeDialog();
    };


    const editMovieHandler = (activeMovie) => {
        const currentSearchParams = new URLSearchParams(searchParams);

        // Append the existing query parameters to the navigation URL
        const queryParams = currentSearchParams.toString();
        if (queryParams) {
            navigate(`/${activeMovie.id}/edit?${queryParams}`);
        } else {
            navigate(`/${activeMovie.id}/edit`);
        }
        // setModalComponent({
        //     title: 'EDIT MOVIE',
        //     children: <MovieForm initialMovieInfo={activeMovie} onSubmit={handleFormSubmit} />
        // })
        // setvisible(true);

    };



    const handleDeleteConfirm = (activeMovie) => {
        axios.delete(`http://localhost:4000/movies/${activeMovie?.id}`).then(() => {
            closeDialog();
            getMovies();
        }).catch(() => console.log('error while deleting movie'));
    };

    const deleteMovieHandler = (activeMovie) => {
        // e.stopPropogation()
        setModalComponent({
            title: 'DELETE MOVIE',
            children: <DeleteMovie onDelete={() => handleDeleteConfirm(activeMovie)} />
        })
        setvisible(true);
    }

    const closeMovieDetails = () => {
        setSelectedMovie(null);
    }

    return (
        <div>

            {/* <div>
                <button onClick={addMovieHandler1}>Add Movie</button>
            </div> */}

            {
                visible && <ModalDialog title={modalComponent.title} onClose={() => setvisible(false)}>
                    {modalComponent.children}
                </ModalDialog>
            }
            {/* If movie is not selected than show search bar */}
            {/* {!selectedMovie && <SearchForm initialSearchQuery={searchQuery} onSearch={handleSearchSubmit} />}

            <div>
                {selectedMovie && <MovieDetails movieDetailInfo={selectedMovie} handleSelectedMovie={handleSelectedMovie} closeMovieDetails={closeMovieDetails} />}
            </div> */}

            <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />
            <SortControl currentSelection={sortCriterion} onSortChange={handleSetSortCriterion} />
            {movieList?.length > 0 && <MovieList movies={movieList} editMovieHandler={editMovieHandler} deleteMovieHandler={deleteMovieHandler} handleSelectedMovie={handleSelectedMovie} />}
            {movieList?.length == 0 && <div className="no-data">No Data Found</div>}

        </div>
    )


}

export default MovieListPage;