import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieTile from './MovieTile';

const sampleMovie = {
  imageUrl: 'http://google.com/picture/1',
  name: 'Sample Movie',
  releaseYear: 2022,
  genres: ['HORROR', 'CRIME'],
};

// Test Case 1: Render MovieTile with required props
test('renders MovieTile with required props', () => {
  const { getByText, getByAltText } = render(<MovieTile movieInfo={sampleMovie} onTileClick={() => {}} />);
  
  // Ensure the movie details are displayed
  expect(getByText('Sample Movie')).toBeInTheDocument();
  expect(getByText('Release Year: 2022')).toBeInTheDocument();
  expect(getByText('HORROR, CRIME')).toBeInTheDocument();
  
  // Ensure the image is rendered with alt text
  expect(getByAltText('Sample Movie')).toBeInTheDocument();
});

// Test Case 2: Click on the movie tile
test('handles click on the movie tile', () => {
  const onTileClick = jest.fn();
  const { getByText } = render(<MovieTile movieInfo={sampleMovie} onTileClick={onTileClick} />);
  
  // Simulate a click on the movie tile
  fireEvent.click(getByText('Sample Movie'));
  
  // Ensure that the onTileClick function is called with the correct movieInfo
  expect(onTileClick).toHaveBeenCalledWith(sampleMovie);
});

// Test Case 3: Invalid prop types
test('renders MovieTile with invalid prop types', () => {
  // Provide invalid props (releaseYear should be a string, not a number)
  const invalidMovie = {
    imageUrl: 'http://google.com/picture/1',
    name: 'Invalid Movie',
    releaseYear: '2022', // Invalid type
    genres: ['HORROR', 'CRIME'],
  };

  // Expect console.error to be called due to invalid prop type
  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
  // Render MovieTile with invalid props
  render(<MovieTile movieInfo={invalidMovie} onTileClick={() => {}} />);
  
  // Check if console.error is called with a PropType error
  expect(errorSpy).toHaveBeenCalled();
  
  // Restore the original console.error
  errorSpy.mockRestore();
});

// Test Case 4: Missing required prop
test('renders MovieTile with missing required prop', () => {
  // remove the imageUrl prop, which is required
  const movieWithoutImageUrl = {
    name: 'Missing Image Movie',
    releaseYear: 2022,
    genres: ['ALL', 'CRIME'],
  };

  // Expect console.error to be called due to missing required prop
  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
  // Render MovieTile with missing required prop
  render(<MovieTile movieInfo={movieWithoutImageUrl} onTileClick={() => {}} />);
  
  // Check if console.error is called with a PropType error
  expect(errorSpy).toHaveBeenCalled();
  
  // Restore the original console.error
  errorSpy.mockRestore();
});

