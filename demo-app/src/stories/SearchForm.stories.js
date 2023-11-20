import React from 'react';
import SearchForm from '../components/search-form/SearchForm';

export default {
  title: 'SearchForm1',
  component: SearchForm
}

// export const WithInitialQuery = () => {
//   args: {
//     initialSearchQuery: 'Titanic';
//     onSearch : (query) => {
//   console.log(`Initial search query: ${query}`);

// }
//     }}

export const Basic = (args) => <SearchForm {...args} />;
Basic.args = {
  initialSearchQuery: 'Titanic', onSearch: (query) => {
    console.log(`Initial search query: ${query}`)
  }
};
