
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieTile.css';

const MovieTile = ({ movieInfo, onTileClick, onEditClick, onDeleteClick }) => {
  //  const { imageUrl, name, releaseYear, genres } = movieInfo;
  const [isContextMenuOpen, setContextMenuOpen] = useState(false);


  const handleTileClick = () => {
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
    e.preventDefault();
    setContextMenuOpen(!isContextMenuOpen);
  };

  const contextMenu = () => {
    return <div className="context-menu">
      <button className="context-menu-button" onClick={toggleContextMenu} onBlur={toggleContextMenu}>
        <span>&#8942;</span>
      </button>
      {isContextMenuOpen && (
        <ul className="menu-list">
          <li onClick={() => handleContextMenuClick('edit')}>Edit</li>
          <li onClick={() => handleContextMenuClick('delete')}>Delete</li>
        </ul>
      )}
    </div>
  }


  const { imageUrl, name, releaseYear, genres } = movieInfo;


  return (
    <div className="container" onClick={handleTileClick}>
      <div className="movie-info">
        <img src={imageUrl} alt={name} className="movie-image" />
        <div className="movie-details">
          <h3>{name}</h3>
          <p>{`Release Year: ${releaseYear}`}</p>
          <p>{`${genres.join(', ')}`}</p>
        </div>
        {contextMenu()}
      </div>
      {/* {contextMenu()} */}
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
