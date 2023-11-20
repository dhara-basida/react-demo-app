import React from 'react';
import GenreSelect from '../components/genre-select/GenreSelect';

export default {
    title: 'GenreSelect',
    component: GenreSelect
}

// export const CustomSelectedGenre = () => (
//     <GenreSelect
//         genres={['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME']}
//         selectedGenre="COMEDY"
//         onSelect={(genre) => {
//             console.log(`Selected genre: ${genre}`);
//         }}
//     />);

export const Basic = (args) => <GenreSelect {...args} />;
Basic.args = {
    genres:  ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
    selectedGenre: "COMEDY",
    onSelect: genre => {
        console.log(`Selected genre: ${genre}`);
    }
}

