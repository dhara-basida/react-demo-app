import React from 'react';
import './SortControl.css'; // Import the CSS file

const SortControl = ({ currentSelection, onSortChange }) => {
    const handleSortChange = (e) => {
        const newSelection = e.target.value;
        onSortChange(newSelection);
    };

    return (
        <div className="sort-control">
            <label htmlFor="sortSelect">Sort by:</label>
            <select
                id="sortSelect"
                value={currentSelection}
                onChange={handleSortChange}
            >
                <option value="release_date" data-testid="sort-control">Release Date</option>
                <option value="title">Title</option>
            </select>
        </div>
    );
};

export default SortControl;
