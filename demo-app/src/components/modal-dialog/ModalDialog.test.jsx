// ModalDialog.test.jsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModalDialog from './ModalDialog';

// Mock child component
const MockChildComponent = () => <div data-testid="mock-child">Child Component</div>;

describe('ModalDialog component', () => {
    const mockOnClose = jest.fn();

    it('renders modal with title and React component as children', () => {
        const title = 'Testing Modal';

        render(
            <ModalDialog title={title} onClose={mockOnClose}>
                <MockChildComponent />
            </ModalDialog>
        );

        // Check if the title and child component are rendered
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByTestId('mock-child')).toBeInTheDocument();
    });

    it('calls onClose when overlay is clicked', () => {
        render(
            <ModalDialog title="Test Modal" onClose={mockOnClose}>
                <MockChildComponent />
            </ModalDialog>
        );

        // Find the overlay and click it
        fireEvent.click(screen.getByTestId('dialog-overlay'));

        // Check if onClose is called
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when close image is clicked', () => {
        render(
            <ModalDialog title="Test Modal" onClose={mockOnClose}>
                <MockChildComponent />
            </ModalDialog>
        );

        fireEvent.click(screen.getByAltText('close'));
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when Escape key is pressed', () => {
        render(
            <ModalDialog title="Test Modal" onClose={mockOnClose}>
                <MockChildComponent />
            </ModalDialog>
        );

        fireEvent.keyDown(document, { key: 'Escape' });
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});
