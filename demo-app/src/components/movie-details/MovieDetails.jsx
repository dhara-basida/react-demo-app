
import axios from 'axios';
import PropTypes from 'prop-types';
import { React, useEffect, useState } from 'react';
import {
  useParams, useSearchParams
} from "react-router-dom";
import './MovieDetails.css';
import { useNavigate } from "react-router-dom";
import MovieListPage from '../movie-list-page/MovieListPage';


const MovieDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let { movieId } = useParams();
  // const { imageUrl, name, releaseYear, rating, duration, description } = movieDetailInfo;
  const [movieDetailInfo, setMovieDetailInfo] = useState({});
  const { imageUrl, name, releaseYear, rating, duration, description } = movieDetailInfo;

  useEffect(() => {
    if (movieId) {
      console.log(movieId);
      getMovies();
    }
  }, [])

  const controller = new AbortController();
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
          const preparedObject = {
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
          setMovieDetailInfo(preparedObject);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="movie-details-container" data-testid="movie-details">
        <div className="movie-header">
          <p>Netflix</p>
          <img src="/image/Close-Button.svg" className="close-button" onClick={() => {
            const currentSearchParams = new URLSearchParams(searchParams);
            // Append the existing query parameters to the navigation URL
            const queryParams = currentSearchParams.toString();
            if (queryParams) {
              navigate(`/?${queryParams}`);
            } else {
              navigate(`/`);
            }
          }} /></div>

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
      <MovieListPage searchQuery={searchParams.get('search')} />
    </>
  );
};

// MovieDetails.propTypes = {
//   movieDetailInfo: PropTypes.shape({
//     imageUrl: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     releaseYear: PropTypes.number.isRequired,
//     rating: PropTypes.number,
//     duration: PropTypes.string,
//     // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
//     description: PropTypes.string
//   }).isRequired,

// };

export default MovieDetails;
