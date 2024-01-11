import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetails from './MovieDetails';
import * as router from 'react-router';
import axios from 'axios';

const navigate = jest.fn();
jest.mock('axios');
beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  jest.spyOn(router,'useLocation').mockImplementation(() => navigate);
});

const sampleMovieDetail = {
    "id": 337167,
    "title": "Fifty Shades Freed",
    "tagline": "Don't miss the climax",
    "vote_average": 6.1,
    "vote_count": 1195,
    "release_date": "2018-02-07",
    "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    "budget": 55000000,
    "revenue": 136906000,
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 106
};

describe('MovieDetails', () => {

  beforeEach(() => {
    // Reset mock implementation before each test
    jest.resetAllMocks();
    axios.get.mockImplementation(() => Promise.resolve({data:sampleMovieDetail}));
  });
  
// Test Case 1: Render MovieDetails with required props
test('renders MovieDetails with required props', () => {
  axios.get.mockResolvedValueOnce({data:sampleMovieDetail});

  const { getByText } = render(<MovieDetails/>);
  
  // Ensure the movie details are displayed
  expect(getByText('Sample Movie')).toBeInTheDocument();
  expect(getByText('8.5')).toBeInTheDocument();
  expect(getByText('2022')).toBeInTheDocument();
  expect(getByText('2h 30m')).toBeInTheDocument();
  expect(getByText('A movie description.')).toBeInTheDocument();  
});
})

