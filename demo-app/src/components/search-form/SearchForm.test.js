import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

//Test that component renders initial value provided in props
describe('SearchForm', () => {
    it('renders the initial value provided in props', () => {
        const initialSearchQuery = 'Initial Value';

        const { getByDisplayValue } = render(
            <SearchForm initialSearchQuery={initialSearchQuery} onSearch={() => { }} />
        );

        // Find the input element by its initial value
        const inputElement = getByDisplayValue(initialSearchQuery);

        // Ensure that the input element contains the initial value
        expect(inputElement).toBeInTheDocument();
    });
});


//Test that after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value
describe('SearchForm', () => {
    it('calls the onChange prop with the proper value', () => {
        const onSearchMock = jest.fn();
        const { getByPlaceholderText, getByText } = render(
            <SearchForm initialSearchQuery="" onSearch={onSearchMock} />
        );

        const inputElement = getByPlaceholderText('What do you want to watch?');
        const submitButton = getByText('Search');

        // Simulate typing into the input field
        fireEvent.change(inputElement, { target: { value: 'Titanic' } });

        // Simulate a click event on the Submit button
        fireEvent.click(submitButton);

        // Ensure that the onSearch prop was called with the proper value
        expect(onSearchMock).toHaveBeenCalledWith('Titanic');
    });
});


//Test that after typing to the input and pressing Enter key, the "onChange" prop is called with proper value
describe('SearchForm', () => {
    it('calls the onSearch prop when Enter key is pressed', () => {
        const onSearchMock = jest.fn();
        const { getByPlaceholderText } = render(
            <SearchForm initialSearchQuery="Titanic" onSearch={onSearchMock} />
        );

        const inputElement = getByPlaceholderText('What do you want to watch?');

        // Simulate typing 'Final Destination' into the input field
        fireEvent.change(inputElement, { target: { value: 'Final Destination' } });

        // Simulate pressing the Enter key
        fireEvent.keyUp(inputElement, { key: 'Enter' });

        // Ensure that the onSearch prop was called with the proper value
        expect(onSearchMock).toHaveBeenCalledWith('Final Destination');
    });
});
