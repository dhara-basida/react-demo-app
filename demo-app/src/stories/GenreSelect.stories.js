import React, { useState } from 'react';
import GenreSelect from '../components/genre-select/GenreSelect';

export default {
    title: 'GenreSelect',
    component: GenreSelect
}

export const Basic = (args) => {
    const [selectedGenre, setSelectedGenre] = useState(args.selectedGenre)
    return <GenreSelect {...args} selectedGenre={selectedGenre} onSelect={setSelectedGenre} />
}
Basic.args = {
    genres: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
    selectedGenre: "COMEDY",
}

