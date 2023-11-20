import React from 'react';
import MovieTile from '../components/movie-tile/MovieTile';

export default {
  title: 'MovieTile',
  component: MovieTile
}
export const Basic = (args) => <MovieTile {...args} />;
Basic.args = {
  movieInfo: { imageUrl: 'https://picsum.photos/seed/picsum/200/300', name: 'Titanic', releaseYear: 2022, genres: ['COMEDY', 'HORROR', 'CRIME'] },
  onTileClick: action => {
    console.log(`tile clicked: ${action}`);
  },
  onEditClick: action => {
    console.log(`Selected menu item: ${action}`);
  },
  onDeleteClick: action => {
    console.log(`Selected menu item: ${action}`);
  }
}
