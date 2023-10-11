import React, { useState } from 'react';
import '../genre-select/GenreSelect.css';

function SearchForm({ initialSearchQuery, onSearch }) {

    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyPress = (i) => {
        if (i.key = 'Enter') {
            console.log('handleKeyPress' + searchQuery);
            onSearch(searchQuery);
        }
    };

    const handleSearch = () => {
        console.log('handleSearch' + searchQuery);
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