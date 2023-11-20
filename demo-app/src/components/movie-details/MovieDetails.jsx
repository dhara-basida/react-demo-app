
import { React } from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css';

const MovieDetails = ({ movieDetailInfo }) => {

  const { imageUrl, name, releaseYear, rating, duration, description } = movieDetailInfo;

  return (
    <div className="movie-details-container" >
      <div className="movie-header">
        <p>Netflix</p>
        <p>Search</p></div>
      {/* {change with picture} */}
      <div className="movie-details-info">
        <img src={imageUrl} alt={name} width='322' height='486' />
        <div className="movie-details">
          <h3>{name}</h3>
          <div>
            {/* <p>{name}</p> */}
            <p> {rating}</p>
          </div>
          {/* <p>{`${genres.join(', ')}`}</p> */}

          <div>
            <p>{releaseYear}</p>
            <p>{duration}</p>
          </div>

          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

MovieDetails.propTypes = {
  movieDetailInfo: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    rating: PropTypes.number,
    duration: PropTypes.string,
    // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string
  }).isRequired,

};

export default MovieDetails;
