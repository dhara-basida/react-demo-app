import React from 'react';
import MovieTile from '../components/movie-tile/MovieTile';

export default {
  title: 'MovieTile',
  component: MovieTile
}

export const Basic = (args) => {
  const onTileClick = action => console.log(`tile clicked: ${action}`);
  const onEditClick = action => console.log(`Selected menu item: ${action}`);
  const onDeleteClick = action => console.log(`Selected menu item: ${action}`);
  return <MovieTile {...args} onTileClick={onTileClick} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
};
Basic.args = {
  movieInfo: { imageUrl: 'https://picsum.photos/seed/picsum/200/300', name: 'Titanic', releaseYear: 2022, genres: ['Comedy', 'Horror', 'Crime'] },
}
