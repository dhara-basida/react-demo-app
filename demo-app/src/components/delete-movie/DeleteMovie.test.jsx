import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DeleteMovie from './DeleteMovie';

describe('DeleteMovie', () => {
    it('renders the component without crashing', () => {
        const { getByText } = render(<DeleteMovie onDelete={() => { }} />);

        // Assert that the component renders successfully
        expect(getByText('Are you sure you want to delete this movie?')).toBeInTheDocument();
    });
})

describe('DeleteMovie', () => {
    //checks if the onDelete prop function is called when the "Confirm" button is clicked.
    it('calls onDelete prop when Confirm button is clicked', () => {
        // Mock the onDelete function
        const onDeleteMock = jest.fn();

        const { getByText } = render(<DeleteMovie onDelete={onDeleteMock} />);

        // Simulate a click on the Confirm button
        fireEvent.click(getByText('Confirm'));

        // Assert that onDelete has been called
        expect(onDeleteMock).toHaveBeenCalled();
    });
});
