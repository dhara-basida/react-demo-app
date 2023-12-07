
import React, { useState, useEffect } from 'react';
import './MovieForm.css';

const MovieForm = ({ initialMovieInfo, onSubmit }) => {
    const [formData, setFormData] = useState({
        title: initialMovieInfo?.title || '',
        releaseDate: initialMovieInfo?.releaseDate || '',
        imageUrl: initialMovieInfo?.imageUrl || '',
        rating: initialMovieInfo?.rating || '',
        genre: initialMovieInfo?.genre || '',
        runtime: initialMovieInfo?.runtime || '',
        description: initialMovieInfo?.runtime || ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
    };

    useEffect(() => {
        setFormData({
            title: initialMovieInfo?.title || '',
            releaseDate: initialMovieInfo?.releaseDate || '',
            imageUrl: initialMovieInfo?.imageUrl || '',
            rating: initialMovieInfo?.rating || '',
            genre: initialMovieInfo?.genre || '',
            runtime: initialMovieInfo?.runtime || '',
            description: initialMovieInfo?.runtime || ''
        });
    }, [initialMovieInfo]);


    return (<div className="movie-form-container"> <form onSubmit={handleSubmit}>
        <div className="movie-form-row">
            <label className="movie-form-label" >
                TITLE:
                <input className="movie-form-left-input" type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <label className="movie-form-label" >
                RELEASE DATE:
                <input className="movie-form-right-input" type="date" name="releaseDate" value={formData.releaseDate} onChange={handleChange} />
            </label>
        </div>
        <div className="movie-form-row">
            <label className="movie-form-label" >
                MOVIE URL:
                <input className="movie-form-left-input" type="text" name="imageUrl" value={formData.imageUrl} placeholder="https://" />
            </label>
            <label className="movie-form-label" >
                RATING:
                <input className="movie-form-right-input" type="text" name="rating" value={formData.rating} />
            </label>
        </div>
        <div className="movie-form-row">
            <label className="movie-form-label" >
                GENRE:
                <select className="movie-form-left-input" id="genre" name="select genre" value={formData.genre} onChange={handleChange} >
                    <option value="all">ALL</option>
                    <option value="documentary">DOCUMENTARY</option>
                    <option value="comedy">COMEDY</option>
                    <option value="horror">HORROR</option>
                    <option value="crime">CRIME</option>

                </select>
            </label>
            <label className="movie-form-label" >
                RUNTIME:
                <input className="movie-form-right-input" type="text" name="runtime" value={formData.runtime} />
            </label>
        </div>
        <div className="movie-form-row">
            <label className="movie-form-label" >
                OVERVIEW:
                <textarea className="movie-form-textarea" type="text" row="5" name="description" value={formData.description} />
            </label>
        </div>
        <div className="movie-form-row">
            <button className="movie-form-reset-button" type="submit">Reset</button>
            <button className="movie-form-submit-button" type="submit">Submit</button>
        </div>
    </form>

    </div>);
}
export default MovieForm;