import React from 'react';
import { render, fireEvent, getByRole } from '@testing-library/react';
import GenreSelect from './GenreSelect';

//Test that component renders all genres passed in props
describe('GenreSelect', () => {
    it('renders all genres passed in props', () => {
        const genres = ['All', 'Documentary', 'Comedy', 'Horror'];
        const { getAllByRole } = render(<GenreSelect genres={genres} selectedGenre="" onSelect={() => { }} />);

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
        const onSelect = jest.fn(); // Mock the onSelect function
        const { getByText } = render(
            <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />
        );

        // Find the button with the selected genre text
        const selectedButton = getByText(selectedGenre);

        // Ensure that the selected button has the "selected-button" class
        expect(selectedButton).toHaveClass('selected-button');
    });
});

//Test that after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments
describe('GenreSelect', () => {
    it('calls the onSelect callback with the correct genre after a click event', () => {
        const genres = ['Action', 'Comedy', 'Drama', 'Science Fiction', 'Horror'];
        const selectedGenre = 'Comedy'; // Set the selected genre
        const onSelect = jest.fn(); // Mock the onSelect function
        const { getByText } = render(
            <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />
        );

        // Find the button with the selected genre text
        const selectedButton = getByText('Drama');

        // Simulate a click event on the selected button
        fireEvent.click(selectedButton);

        // Ensure that the onSelect callback was called with the correct genre
        expect(onSelect).toHaveBeenCalledWith('Drama');
    });
});