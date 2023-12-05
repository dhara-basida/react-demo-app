import React, { useState } from 'react';
import SearchForm from '../components/search-form/SearchForm';

export default {
  title: 'SearchForm1',
  component: SearchForm
}

export const Basic = (args) => {
  const [initialSearchQuery, setInitialSearchQuery] = useState(args.initialSearchQuery)
  const handleOnSearch = (value) => {
    console.log('onSearch value', value);
    setInitialSearchQuery(value);
  };
  return <SearchForm initialSearchQuery={initialSearchQuery} onSearch={handleOnSearch} />
}
Basic.args = {
  initialSearchQuery: 'Titanic',
}
