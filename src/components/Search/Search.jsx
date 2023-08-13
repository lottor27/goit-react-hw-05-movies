import React from "react";
import { useState } from "react";

import { useNavigate } from 'react-router-dom';

const SearchMovies = ({ onSearchSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchQuery(e.currentTarget.value.toLowerCase().trim())
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery === '') {
            alert('Enter a search query!');
            return
        }
        onSearchSubmit(searchQuery);
        navigate(`/movies?query=${searchQuery}`);
        setSearchQuery('');
    }

    return (
      <div>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="text"
            autoComplete="off"
            autoFocus
            aria-label="Search"
            placeholder="Search"
            onChange={handleChange}
            value={searchQuery}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    );
}

export default SearchMovies;

