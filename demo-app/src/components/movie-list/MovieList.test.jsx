// MovieList.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieList from './MovieList';
import * as router from 'react-router'

const navigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  jest.spyOn(router,'useLocation').mockImplementation(() => navigate);
});

describe('MovieList', () => {
    const movies = [
        {
            id: 1,
            imageUrl: 'https://picsum.photos/seed/picsum/200/300',
            name: 'Universe',
            releaseYear: 2022,
            releaseDate: '2023-11-10',
            rating: 5,
            genres: ['DOCUMENTARY', 'HORROR'],
            runtime: '4h 30m',
            description: 'It was a dramatic movie'
        },
        {
            id: 2,
            imageUrl: 'https://picsum.photos/seed/picsum/200/300',
            name: 'Titanic',
            releaseYear: 2000,
            releaseDate: '2023-11-10',
            rating: 5,
            genres: ['COMEDY', 'HORROR'],
            runtime: '4h 30m',
            description: 'It was a dramatic movie'
        },
    ];

    const mockEditMovieHandler = jest.fn();
    const mockDeleteMovieHandler = jest.fn();

    it('renders the movie tiles count correctly', () => {
        const { container } = render(
            <MovieList
                movies={movies}
                editMovieHandler={mockEditMovieHandler}
                deleteMovieHandler={mockDeleteMovieHandler}
            />
        );

        // Check if the correct number of movie tiles are rendered
        const movieTiles = container.querySelectorAll('.movie-info');
        expect(movieTiles).toHaveLength(movies.length);

    });

});
