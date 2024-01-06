import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MovieForm.css';
import { useFormik } from 'formik';

const controller = new AbortController();

const MovieForm = ({ initialMovieInfo, onSubmit }) => {
    const [formData, setFormData] = useState({
        title: initialMovieInfo?.name || '',
        releaseDate: initialMovieInfo?.releaseDate || '',
        imageUrl: initialMovieInfo?.imageUrl || '',
        rating: initialMovieInfo?.rating || '',
        genre: initialMovieInfo?.genres?.map(item => item?.toUpperCase()) || [],
        runtime: initialMovieInfo?.runtime || '',
        description: initialMovieInfo?.description || '',
        id: initialMovieInfo?.id
    });

    const formik = useFormik({
        initialValues: {
            title: initialMovieInfo?.name || '',
            releaseDate: initialMovieInfo?.releaseDate || '',
            imageUrl: initialMovieInfo?.imageUrl || '',
            rating: initialMovieInfo?.rating || '',
            genre: initialMovieInfo?.genres?.map(item => item?.toUpperCase()) || [],
            runtime: initialMovieInfo?.runtime || '',
            description: initialMovieInfo?.description || '',
            id: initialMovieInfo?.id,
        },
        validate: (values) => {
            const errors = {};

            if (!values.title) {
                errors.title = 'Title is required';
            }

            if (!values.releaseDate) {
                errors.releaseDate = 'Release Date is required';
            }

            if (!values.imageUrl) {
                errors.imageUrl = 'Image url is required';
            }

            if (!values.rating) {
                errors.rating = 'Rating is required';
            }

            if (!values.genre.length) {
                errors.genre = 'Genre is required';
            }

            if (!values.runtime) {
                errors.runtime = 'Runtime is required';
            }

            if (!values.description) {
                errors.description = 'Description is required';
            }

            return errors;
        },
        onSubmit: (values) => {
            onSubmit(values);

            const formBody = {
                "title": values?.title,
                "vote_average": +values?.rating,
                "release_date": values?.releaseDate,
                "poster_path": values?.imageUrl,
                "overview": values?.description,
                "runtime": +values?.runtime,
                "genres": values?.genre,
                "id": values?.id,
            };

            if (initialMovieInfo) {
                axios.put('http://localhost:4000/movies', formBody).then(() => { }).catch(() => console.log('Error while updating movie'));
            } else {
                axios.post('http://localhost:4000/movies', formBody).then(() => { }).catch(() => console.log('Error while updating movie'));
            }
        },
    });

    useEffect(() => {
        formik.setValues({
            title: initialMovieInfo?.name || '',
            releaseDate: initialMovieInfo?.releaseDate || '',
            imageUrl: initialMovieInfo?.imageUrl || '',
            rating: initialMovieInfo?.rating || '',
            genre: initialMovieInfo?.genres?.map(genre => genre?.toUpperCase()) || [],
            runtime: initialMovieInfo?.runtime || '',
            description: initialMovieInfo?.description || '',
            id: initialMovieInfo?.id,
        });
    }, [initialMovieInfo]);

    const handleChange = (event) => {
        const { name, options, selectedOptions, type, value } = event.target;
        const updatedValue =
            type === 'select-multiple'
                ? Array.from(selectedOptions, (option) => option.value)
                : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: updatedValue,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
        controller.abort();
        const formBody = {
            "title": formData?.title,
            "vote_average": +formData?.rating,
            "release_date": formData?.releaseDate,
            "poster_path": formData?.imageUrl,
            "overview": formData?.description,
            "runtime": +formData?.runtime,
            "genres": formData?.genre,
            "id": formData?.id
        };
        if (initialMovieInfo) {
            axios.put('http://localhost:4000/movies', formBody).then(() => { }).catch(() => console.log('Error whiling updating movie'))
        } else {
            axios.post('http://localhost:4000/movies', formBody).then(() => { }).catch(() => console.log('Error whiling updating movie'))
        }
    };

    const handleReset = (event) => {
        event.preventDefault();
        setFormData({
            title: initialMovieInfo?.name || '',
            releaseDate: initialMovieInfo?.releaseDate || '',
            imageUrl: initialMovieInfo?.imageUrl || '',
            rating: initialMovieInfo?.rating || '',
            genre: initialMovieInfo?.genres || '',
            runtime: initialMovieInfo?.runtime || '',
            description: initialMovieInfo?.description || '',
            id: initialMovieInfo?.id
        });
    };


    useEffect(() => {
        setFormData({
            title: initialMovieInfo?.name || '',
            releaseDate: initialMovieInfo?.releaseDate || '',
            imageUrl: initialMovieInfo?.imageUrl || '',
            rating: initialMovieInfo?.rating || '',
            genre: initialMovieInfo?.genres?.map(genre => genre?.toUpperCase()) || [],
            runtime: initialMovieInfo?.runtime || '',
            description: initialMovieInfo?.description || '',
            id: initialMovieInfo?.id
        });
    }, [initialMovieInfo]);


    return (
        <div className="movie-form-container">
            <form onSubmit={formik.handleSubmit}>
                <div className="movie-form-row">
                    <label className="movie-form-label">
                        TITLE:
                        <input
                            className="movie-form-left-input"
                            type="text"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.title && formik.touched.title && (
                            <div className="error">{formik.errors.title}</div>
                        )}
                    </label>
                    <label className="movie-form-label">
                        RELEASE DATE:
                        <input
                            className="movie-form-right-input"
                            type="date"
                            name="releaseDate"
                            value={formik.values.releaseDate}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.releaseDate && formik.touched.releaseDate && (
                            <div className="error">{formik.errors.releaseDate}</div>
                        )}
                    </label>
                </div>
                <div className="movie-form-row">
                    <label className="movie-form-label">
                        MOVIE URL:
                        <input
                            className="movie-form-left-input"
                            type="text"
                            name="imageUrl"
                            value={formik.values.imageUrl}
                            onChange={formik.handleChange}
                            placeholder="https://"
                        />
                        {formik.errors.imageUrl && formik.touched.imageUrl && (
                            <div className="error">{formik.errors.imageUrl}</div>
                        )}
                    </label>
                    <label className="movie-form-label">
                        RATING:
                        <input
                            className="movie-form-right-input"
                            type="text"
                            name="rating"
                            value={formik.values.rating}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.rating && formik.touched.rating && (
                            <div className="error">{formik.errors.rating}</div>
                        )}
                    </label>
                </div>
                <div className="movie-form-row">
                    <label className="movie-form-label">
                        GENRE:
                        <select
                            className="movie-form-left-input"
                            multiple
                            id="genre"
                            name="genre"
                            value={formik.values.genre}
                            onChange={formik.handleChange}
                        >
                            <option value="ALL">ALL</option>
                            <option value="DOCUMENTARY">DOCUMENTARY</option>
                            <option value="COMEDY">COMEDY</option>
                            <option value="HORROR">HORROR</option>
                            <option value="CRIME">CRIME</option>
                            <option value="DRAMA">DRAMA</option>
                        </select>
                        {formik.errors.genre && formik.touched.genre && (
                            <div className="error">{formik.errors.genre}</div>
                        )}
                    </label>
                    <label className="movie-form-label">
                        RUNTIME:
                        <input
                            className="movie-form-right-input"
                            type="text"
                            name="runtime"
                            value={formik.values.runtime}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.runtime && formik.touched.runtime && (
                            <div className="error">{formik.errors.runtime}</div>
                        )}
                    </label>
                </div>
                <div className="movie-form-row">
                    <label className="movie-form-label">
                        OVERVIEW:
                        <textarea
                            className="movie-form-textarea"
                            type="text"
                            rows="5"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.description && formik.touched.description && (
                            <div className="error">{formik.errors.description}</div>
                        )}
                    </label>
                </div>
                <div className="movie-form-row btn-div">
                    <button
                        className="movie-form-reset-button"
                        type="button"
                        onClick={formik.handleReset}
                    >
                        Reset
                    </button>
                    <button className="movie-form-submit-button" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default MovieForm;