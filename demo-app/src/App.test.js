import { render, screen } from '@testing-library/react';
import App from './App';
import './App.css';
import Counter from './components/counter/Counter';
import SearchForm from './components/search-form/SearchForm';
import GenreSelect from './components/genre-select/GenreSelect';
import React, { useState } from 'react';

test('sample test case', () => {
  render(<App />);
});
