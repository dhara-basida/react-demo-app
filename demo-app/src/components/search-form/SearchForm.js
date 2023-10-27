import React, { useRef, useEffect } from 'react';
import './SearchForm.css';

function SearchForm({ initialSearchQuery, onSearch }) {

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.value = initialSearchQuery;
    }, [initialSearchQuery])

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSearch(inputRef.current.value);
        }
    };

    const handleSearch = () => {
        onSearch(inputRef.current.value);
    }

    return (<div className="search-container">
        <input
            type="text"
            placeholder="What do you want to watch?"
            ref={inputRef}
            onKeyUp={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
    </div>
    );

}
export default SearchForm;
