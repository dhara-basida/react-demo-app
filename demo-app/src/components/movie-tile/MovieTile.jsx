
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './MovieTile.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

const MovieTile = ({ movieInfo, onTileClick, onEditClick, onDeleteClick }) => {
  const navigate = useNavigate();
  const [isContextMenuOpen, setContextMenuOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTileClick = () => {
    const currentSearchParams = new URLSearchParams(searchParams);

    // Append the existing query parameters to the navigation URL
    const queryParams = currentSearchParams.toString();
    if(queryParams){
      navigate(`/${movieInfo.id}?${queryParams}`);
    }else{
      navigate(`/${movieInfo.id}`);
    }

    onTileClick(movieInfo);
  };

  const handleContextMenuClick = (action) => {
    setContextMenuOpen(false);
    if (action === 'edit' && onEditClick) {
      onEditClick(movieInfo);
    } else if (action === 'delete' && onDeleteClick) {
      onDeleteClick(movieInfo);
    }
  };


  const toggleContextMenu = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setContextMenuOpen(!isContextMenuOpen);
  };

  const contextMenu = () => {
    return <div className="context-menu">
      <button className="context-menu-button" onClick={toggleContextMenu}>
        <span>&#8942;</span>
      </button>
      {isContextMenuOpen && (
        <ul className="menu-list">
          <li onClick={(e) => {
            setContextMenuOpen(false);
            onEditClick(e);
          }}>Edit</li>
          <li onClick={(e) => {
            setContextMenuOpen(false);
            onDeleteClick(e);
          }}>Delete</li>
        </ul>
      )}
    </div>
  }


  const { imageUrl, name, releaseYear, genres } = movieInfo;

  return (
    <div className="container" data-testid="movie-list-container">
      <div className="container" onClick={handleTileClick}>
        <div className="movie-info">
          <div className="movie-image">
            <img src={imageUrl} alt={name} width={323} heigh={455} />
            </div>
          <div className="movie-details">
            <div className="movie-titleLine">
              <h3 className="movie-title" data-testid="movie-title">{name}</h3>
              <p className="movie-releaseYear">{releaseYear}</p>
            </div>
            <p className="movie-genres" data-testid="movie-genre">{`${genres.join(', ')}`}</p>
          </div>
          {contextMenu()}
        </div>
      </div>
    </div>
  );
};

MovieTile.propTypes = {
  movieInfo: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onTileClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default MovieTile;
