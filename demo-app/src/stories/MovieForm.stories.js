import React from 'react';
import MovieForm from '../components/movie-form/MovieForm';
import { action } from '@storybook/addon-actions';

export default {
    title: 'MovieForm',
    component: MovieForm
}

export const Basic = (args) => {
    const handleOnSubmit = (formData) => {
        console.log('on Submit');
        action('Submit button clicked')(formData);
    }
    return <MovieForm {...args} onSubmit={handleOnSubmit} />;
}
Basic.args = {
    initialMovieInfo:
    {
        name: 'Sample Movie',
        releaseDate: '2023-01-01',
        imageUrl: 'https://example.com/sample.jpg',
        rating: '5',
        genres: ['COMEDY'],
        runtime: '120',
        description: 'A sample movie description.',
    }
}
