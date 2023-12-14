
import React from 'react';
import './DeleteMovie.css';

const DeleteMovie = ({ onDelete }) => {

    return (
        <div className="delete-movie-container">
            <p>
                Are you sure you want to delete this movie?
            </p>
            <div>
            <button type="button" className="delete-movie-confirm-button" onClick={onDelete}>Confirm</button>
            </div>

        </div>);
}
export default DeleteMovie;