import React from 'react';
import { render, fireEvent, waitFor,getAllByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieForm from './MovieForm';

describe('MovieForm component', () => {
    const initialMovieInfo = {
        name: 'Test Movie',
        releaseDate: '2023-01-01',
        imageUrl: 'https://example.com/test-movie.jpg',
        rating: '5',
        genres: ['COMEDY'],
        runtime: '120',
        description: 'A test movie description',
    };

    it('renders the form with initial movie information', () => {
        const { getByLabelText, getByText } = render(
            <MovieForm initialMovieInfo={initialMovieInfo} onSubmit={() => { }} />
        );

        expect(getByLabelText(/title/i).value).toBe(initialMovieInfo.name);
        expect(getByLabelText(/release date/i).value).toBe('2023-01-01');
        expect(getByLabelText(/movie url/i).value).toBe(initialMovieInfo.imageUrl);
        expect(getByLabelText(/rating/i).value).toBe(initialMovieInfo.rating);
        expect(getByLabelText(/genre/i).value).toBe('COMEDY');
        expect(getByLabelText(/runtime/i).value).toBe(initialMovieInfo.runtime);
        expect(getByLabelText(/overview/i).value).toBe(initialMovieInfo.description);
    });

    it('updates form data on user input', () => {
        const { getByLabelText ,getAllByLabelText} = render(
            <MovieForm initialMovieInfo={initialMovieInfo} onSubmit={() => { }} />
        );

        fireEvent.change(getByLabelText(/title/i), { target: { value: 'Updated Movie' } });
        fireEvent.change(getByLabelText(/release date/i), { target: { value: '2023-02-01' } });
        fireEvent.change(getByLabelText(/movie url/i), { target: { value: 'https://example.com/updated-movie.jpg' } });
        fireEvent.change(getByLabelText(/rating/i), { target: { value: '4' } });
        fireEvent.change(getByLabelText(/genre/i), { target: { value: ['HORROR'] } });
        fireEvent.change(getByLabelText(/runtime/i), { target: { value: '90' } });
        fireEvent.change(getByLabelText(/overview/i), { target: { value: 'An updated movie description' } });

        expect(getByLabelText(/title/i).value).toBe('Updated Movie');
        expect(getByLabelText(/release date/i).value).toBe('2023-02-01');
        expect(getByLabelText(/movie url/i).value).toBe('https://example.com/updated-movie.jpg');
        expect(getByLabelText(/rating/i).value).toBe('4');
        expect(getAllByLabelText(/genre/i)[0].selectedOptions[0].value).toBe('HORROR');
        expect(getByLabelText(/runtime/i).value).toBe('90');
        expect(getByLabelText(/overview/i).value).toBe('An updated movie description');
    });

    it('submits the form with updated data on button click', async () => {
        const onSubmitMock = jest.fn();

        const { getByLabelText, getByText } = render(
            <MovieForm initialMovieInfo={initialMovieInfo} onSubmit={onSubmitMock} />
        );

        fireEvent.change(getByLabelText(/title/i), { target: { value: 'Updated Movie' } });
        fireEvent.change(getByLabelText(/release date/i), { target: { value: '2023-02-01' } });
        fireEvent.change(getByLabelText(/movie url/i), { target: { value: 'https://example.com/updated-movie.jpg' } });

        fireEvent.click(getByText(/submit/i));

        await waitFor(() => {
            expect(onSubmitMock).toHaveBeenCalledWith({
                title: 'Updated Movie',
                releaseDate: '2023-02-01',
                imageUrl: 'https://example.com/updated-movie.jpg',
                rating: '5', // Rating is not updated in this test
                genre: ['COMEDY'], // Genre is not updated in this test
                runtime: '120', // Runtime is not updated in this test
                description: 'A test movie description', // Description is not updated in this test
            });
        });
    });

    it('resets the form to initial data on reset button click', () => {
        const { getByLabelText, getByText,getAllByLabelText } = render(
            <MovieForm initialMovieInfo={initialMovieInfo} onSubmit={() => { }} />
        );

        fireEvent.change(getByLabelText(/title/i), { target: { value: 'Updated Movie' } });
        fireEvent.change(getByLabelText(/release date/i), { target: { value: '2023-02-01' } });
        fireEvent.change(getByLabelText(/movie url/i), { target: { value: 'https://example.com/updated-movie.jpg' } });

        fireEvent.click(getByText(/reset/i));

        expect(getByLabelText(/title/i).value).toBe(initialMovieInfo.name);
        expect(getByLabelText(/release date/i).value).toBe('2023-01-01');
        expect(getByLabelText(/movie url/i).value).toBe(initialMovieInfo.imageUrl);
        expect(getByLabelText(/rating/i).value).toBe(initialMovieInfo.rating);
        expect(getAllByLabelText(/genre/i)[0].selectedOptions[0].value).toBe('COMEDY');
        expect(getByLabelText(/runtime/i).value).toBe(initialMovieInfo.runtime);
        expect(getByLabelText(/overview/i).value).toBe(initialMovieInfo.description);
    });
});
