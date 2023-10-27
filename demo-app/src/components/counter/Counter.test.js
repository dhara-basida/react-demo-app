import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from './Counter';

//Test that component renders initial value provided in props
describe('Counter', () => {
  it('renders the initial value provided in props', () => {
    const initialValue = 15; // Set the initial value
    const { getByText } = render(<Counter initialValue={initialValue} />);

    expect(getByText(`Counter Value: ${initialValue}`)).toBeInTheDocument();
  });
});


//Test that a click event on "increment" button increments the displayed value
describe('Counter', () => {
  it('increment the counter when the "Decrement" button is clicked', async() => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');
    await userEvent.click(incrementButton);

    const updatedValue = getByText(/Counter Value:/);
    const updatedCount = parseInt(updatedValue.textContent.replace('Counter Value: ', ''), 10);

    // Assert that the count has been incremented
    expect(updatedCount).toBe(+1);
  });
});


//Test that a click event on "decrement" button decrements the displayed value
describe('Counter', () => {
  it('decrements the counter when the "Decrement" button is clicked', () => {
    const { getByText } = render(<Counter />);

    const decrementButton = getByText('Decrement');
    fireEvent.click(decrementButton);

    // Find the updated value after clicking the "Decrement" button
    const updatedValue = getByText(/Counter Value:/);

    // Parse the updated value from the text (removing "Counter Value: " and converting to an integer)
    const updatedCount = parseInt(updatedValue.textContent.replace('Counter Value: ', ''), 10);

    // Assert that the count has been decremented
    expect(updatedCount).toBe(-1);
  });
});
