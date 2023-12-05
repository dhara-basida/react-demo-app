import React from 'react';
import { render, fireEvent, getByRole } from '@testing-library/react';
import GenreSelect from './GenreSelect';

//Test that component renders all genres passed in props
describe('GenreSelect', () => {
    it('renders all genres passed in props', () => {
        const genres = ['All', 'Documentary', 'Comedy', 'Horror'];
        const { getAllByRole } = render(<GenreSelect genres={genres} selectedGenre="" />);

        // Use getAllByText to find all buttons with genre text
        const genreButtons = getAllByRole('button');

        // Ensure that all genres are rendered
        expect(genreButtons).toHaveLength(genres.length);
    });
});

//Test that component highlights a selected genre passed in props
describe('GenreSelect', () => {
    it('highlights the selected genre passed in props', () => {
        const genres = ['Action', 'Comedy', 'Drama', 'Science Fiction', 'Horror'];
        const selectedGenre = 'Comedy'; // Set the selected genre
        const { getByText } = render(
            <GenreSelect genres={genres} selectedGenre={selectedGenre} />
        );

        // Find the button with the selected genre text
        const selectedButton = getByText(selectedGenre);

        // Ensure that the selected button has the "selected-button" class
        expect(selectedButton).toHaveClass('selected-button');
    });
});
