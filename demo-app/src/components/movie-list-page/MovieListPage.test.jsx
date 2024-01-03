import React from 'react';
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MovieListPage from './MovieListPage';

jest.mock('axios');

describe('MovieListPage Component', () => {
  // Mock data for testing
  const mockMovies = [
    { id: 1, title: 'Scoorage' },
    { id: 2, title: 'Titanic' },
    { id: 3, title: 'Pulp Fiction' },
    { id: 4, title: 'Wolf' },
  ];

  beforeEach(() => {
    // Reset mock implementation before each test
    jest.resetAllMocks();
  });

  test('handles movie selection and displays details', async () => {
    axios.get.mockResolvedValueOnce({ data: { data: mockMovies } });

    render(<MovieListPage />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    fireEvent.click(screen.getByText('Scoorage'));
    expect(screen.getByText('Scoorage')).toBeInTheDocument();
  });
});


test('fetches movies and displays them', async () => {
    const mockMovies = [
        { id: 1, title: 'Scoorage' },
        { id: 2, title: 'Titanic' },
        { id: 3, title: 'Pulp Fiction1' },
        { id: 4, title: 'Wolf' },
      ];
    axios.get.mockResolvedValueOnce({ data: { data: mockMovies } });
  
    await act(async () => {
      render(<MovieListPage />);
      await waitFor(() => {
        expect(axios.get).toHaveBeenCalledWith(
          'http://localhost:4000/movies',
          expect.objectContaining({ params: expect.any(Object) })
        );
      });
    });
  
    expect(screen.getByText('Pulp Fiction')).toBeInTheDocument();
    expect(screen.getByText('Titanic')).toBeInTheDocument();
  });