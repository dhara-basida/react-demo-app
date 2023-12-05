import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SortControl from './SortControl';

// Test Case 1: Render SortControl with default values
test('renders SortControl with default values', () => {
  const { getByLabelText, getByDisplayValue } = render(
    <SortControl currentSelection="releaseDate" onSortChange={() => {}} />
  );
  expect(getByLabelText('Sort by:')).toBeInTheDocument();
  expect(getByDisplayValue('Release Date')).toBeInTheDocument();
});

/* // Test Case 2: Change sort selection
test('handles sort change', () => {
  const onSortChange = jest.fn();
  const { getByLabelText, getByDisplayValue } = render(
    <SortControl currentSelection="releaseDate" onSortChange={onSortChange} />
  );

  // Simulate changing the sort selection to 'Title'
  fireEvent.change(getByLabelText('Sort by:'), { target: { value: 'title' } });

  // Ensure the onSortChange function is called with the correct value
  expect(onSortChange).toHaveBeenCalledWith('title');
  expect(getByDisplayValue('Title')).toBeInTheDocument();
});
 */
// Test Case 3: Check default sort selection without onChange prop
test('renders default sort selection without onChange prop', () => {
  const { getByDisplayValue } = render(<SortControl currentSelection="releaseDate" />);
    expect(getByDisplayValue('Release Date')).toBeInTheDocument();
});
