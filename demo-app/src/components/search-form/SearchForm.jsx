import React, { useRef, useEffect, useState } from 'react';
import './SearchForm.css';
import MovieListPage from '../movie-list-page/MovieListPage';
import { useSearchParams } from 'react-router-dom';
import MovieForm from '../movie-form/MovieForm';
import ModalDialog from '../modal-dialog/ModalDialog';

function SearchForm({ initialSearchQuery, onSearch }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search'));
    const [modalComponent, setModalComponent] = useState({ title: '', children: null });
    const [visible, setvisible] = useState(false);
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.value = searchQuery;
    }, [searchQuery])

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setSearchQuery(inputRef.current.value)
            if (inputRef.current.value) {
                const currentSearchParams = new URLSearchParams(searchParams);
                currentSearchParams.set( 'search',inputRef.current.value);
                setSearchParams(currentSearchParams);
            } else {
                searchParams.delete('search');
                // After reset search query, need to update search query from route,otherwise result will not be reflected
                setSearchParams(searchParams);
            }
        }
    };

    const handleSearch = () => {
        setSearchQuery(inputRef.current.value);
        if (inputRef.current.value) {
            const currentSearchParams = new URLSearchParams(searchParams);
                currentSearchParams.set( 'search',inputRef.current.value);
                setSearchParams(currentSearchParams);
        } else {
            searchParams.delete('search')
            // After reset search query, need to update search query from route,otherwise result will not be reflected
            setSearchParams(searchParams);
        }
        // onSearch(inputRef.current.value);
    }

    const addMovieHandler1 = () => {
        setModalComponent({ title: 'ADD MOVIE', children: <MovieForm onSubmit={handleFormSubmit} /> })
        setvisible(true);
    };

    const closeDialog = () => {
        setvisible(false);
    };

    const handleFormSubmit = (formData) => {
        closeDialog();
    };
    return (
        <>
        <div>
                <button onClick={addMovieHandler1}>Add Movie</button>
            </div>
            {
                visible && <ModalDialog title={modalComponent.title} onClose={() => setvisible(false)}>
                    {modalComponent.children}
                </ModalDialog>
            }
            <div className="search-container">
                <input
                    type="text"
                    placeholder="What do you want to watch?"
                    ref={inputRef}
                    onKeyUp={handleKeyPress}
                    data-testid="search-input"
                />
                <button data-testid="search-button" onClick={handleSearch}>Search</button>
            </div>
            <MovieListPage searchQuery={searchQuery} />
        </>

    );

}
export default SearchForm;
