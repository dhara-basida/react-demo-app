import React from 'react';
import GenreSelect from '../components/genre-select/GenreSelect';

export default {
    title: 'GenreSelect',
    component: GenreSelect
}

export const Basic = (args) => {
    return <GenreSelect {...args} selectedGenre={args.selectedGenre} />
}
Basic.args = {
    genres: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
    selectedGenre: "COMEDY",
}

