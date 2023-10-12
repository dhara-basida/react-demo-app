import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ initialSearchQuery, onSearch }) {

    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchQuery);
        }
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    }

    return (<div className="search-container">
        <input
            type="text"
            placeholder="What do you want to watch?"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
    </div>
    );

}
export default SearchForm;
