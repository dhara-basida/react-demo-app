
import React, { useState, useEffect } from 'react';
import './MovieForm.css';

const MovieForm = ({ initialMovieInfo, onSubmit }) => {
    console.log(initialMovieInfo);
    const [formData, setFormData] = useState({
        title: initialMovieInfo?.name || '',
        releaseDate: initialMovieInfo?.releaseDate || '',
        imageUrl: initialMovieInfo?.imageUrl || '',
        rating: initialMovieInfo?.rating || '',
        genre: initialMovieInfo?.genres || [],
        runtime: initialMovieInfo?.runtime || '',
        description: initialMovieInfo?.description || ''
    });

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
            description: initialMovieInfo?.description || ''
        });
    };


    useEffect(() => {
        setFormData({
            title: initialMovieInfo?.name || '',
            releaseDate: initialMovieInfo?.releaseDate || '',
            imageUrl: initialMovieInfo?.imageUrl || '',
            rating: initialMovieInfo?.rating || '',
            genre: initialMovieInfo?.genres || [],
            runtime: initialMovieInfo?.runtime || '',
            description: initialMovieInfo?.description || ''
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
                <input className="movie-form-left-input" type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://" />
            </label>
            <label className="movie-form-label" >
                RATING:
                <input className="movie-form-right-input" type="text" name="rating" value={formData.rating} onChange={handleChange} />
            </label>
        </div>
        <div className="movie-form-row">
            <label className="movie-form-label" >
                GENRE:
                <select className="movie-form-left-input" multiple id="genre" name="genre" value={formData.genre} onChange={handleChange} >
                    <option value="ALL">ALL</option>
                    <option value="DOCUMENTARY">DOCUMENTARY</option>
                    <option value="COMEDY">COMEDY</option>
                    <option value="HORROR">HORROR</option>
                    <option value="CRIME">CRIME</option>

                </select>
            </label>
            <label className="movie-form-label" >
                RUNTIME:
                <input className="movie-form-right-input" type="text" name="runtime"
                    value={formData.runtime} onChange={handleChange} />
            </label>
        </div>
        <div className="movie-form-row">
            <label className="movie-form-label" >
                OVERVIEW:
                <textarea className="movie-form-textarea" type="text" rows="5" name="description"
                    value={formData.description} onChange={handleChange} />
            </label>
        </div>
        <div className="movie-form-row btn-div">
            <button className="movie-form-reset-button" type="button" onClick={handleReset}>Reset</button>
            <button className="movie-form-submit-button" type="submit">Submit</button>
        </div>
    </form>

    </div>);
}
export default MovieForm;