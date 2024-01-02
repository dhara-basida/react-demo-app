import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetails from './MovieDetails';

const sampleMovieDetail = {
  imageUrl: 'http://google.com/picture/1',
  name: 'Sample Movie',
  releaseYear: 2022,
  rating: 8.5,
  duration: '2h 30m',
  description: 'A movie description.',
};

// Test Case 1: Render MovieDetails with required props
test('renders MovieDetails with required props', () => {
  const { getByText } = render(<MovieDetails movieDetailInfo={sampleMovieDetail} closeMovieDetails={() => {}} />);
  
  // Ensure the movie details are displayed
  expect(getByText('Sample Movie')).toBeInTheDocument();
  expect(getByText('8.5')).toBeInTheDocument();
  expect(getByText('2022')).toBeInTheDocument();
  expect(getByText('2h 30m')).toBeInTheDocument();
  expect(getByText('A movie description.')).toBeInTheDocument();  
});
