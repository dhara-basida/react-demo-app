import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MovieForm from '../movie-form/MovieForm';
import ModalDialog from '../modal-dialog/ModalDialog';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const controller = new AbortController();
const AddMovieForm = () => {
    const [visible, setvisible] = useState(false);
    const [modalComponent, setModalComponent] = useState({ title: '', children: null });
    const navigate = useNavigate();
    const location = useLocation();
    let { movieId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const closeDialog = () => {
        const currentSearchParams = new URLSearchParams(searchParams);
        const queryParams = currentSearchParams.toString();
        setvisible(false);
        if (queryParams) {
            navigate(`/?${queryParams}`);
        } else {
            navigate('/');
        }
    };

    useEffect(() => {
        if (location.pathname.includes('edit')) {
            getMovies();
        } else {
            addMovieHandler();
        }
    }, []);

    const getMovies = () => {
        controller.abort();
        axios.get(`http://localhost:4000/movies/${movieId}`)
            .then(function (response) {
                response = response?.data;
                if (response) {
                    const imageUrl = response.poster_path;
                    const name = response.title;
                    const releaseDate = response.release_date;
                    const rating = response.vote_average;
                    const genres = response.genres;
                    const runtime = response.runtime;
                    const description = response.overview;
                    const movieObject = {
                        imageUrl: imageUrl ? imageUrl : 'https://picsum.photos/seed/picsum/200/300',
                        name: name,
                        releaseYear: new Date(releaseDate).getFullYear(),
                        releaseDate: releaseDate,
                        rating: rating,
                        genres: genres,
                        runtime: runtime,
                        description: description,
                        id: response?.id
                    };
                    editMovieHandler(movieObject);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    const handleFormSubmit = (formData) => {
        closeDialog();
    };

    const editMovieHandler = (activeMovie) => {
        setModalComponent({
            title: 'EDIT MOVIE',
            children: <MovieForm initialMovieInfo={activeMovie} onSubmit={handleFormSubmit} />
        })
        setvisible(true);
    };

    const addMovieHandler = () => {
        setModalComponent({ title: 'ADD MOVIE', children: <MovieForm onSubmit={handleFormSubmit} /> })
        setvisible(true);
    };


    return (
        <>
            {
                visible && <ModalDialog title={modalComponent.title} onClose={closeDialog}>
                    {modalComponent.children}
                </ModalDialog>
            }
        </>
    );
}
export default AddMovieForm