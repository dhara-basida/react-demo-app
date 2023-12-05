import React from 'react';
import MovieDetails from '../components/movie-details/MovieDetails';

export default {
    title: 'MovieDetails',
    component: MovieDetails
}

export const Basic = (args) => <MovieDetails {...args} />;
Basic.args = {
    movieDetailInfo: { imageUrl: 'https://picsum.photos/seed/picsum/200/300', name: 'Titanic', releaseYear: 2022, rating: 8.5, duration: '2h 30m', description: 'It was nice' }
}

