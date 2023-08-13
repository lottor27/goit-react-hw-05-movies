import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, } from 'react';
import Loader from "components/Loader/Loader";
import SearchMovies from "components/Search/Search";
import SearchResultsList from "components/SearchResults/SearchResults";
import { getAllSearchFilms } from "ServiceApi/AllApiFetch"

const Movies = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [searchParams] = useSearchParams();
 

    useEffect(() => {
        const fetchSearchMovies = async () => {
            setIsLoader(true);
            try {
                const data = await getAllSearchFilms(searchQuery);
                setSearchResults(data.results);
                
            }
            catch (error) {
                console.error(error.message);
            } finally {
                setIsLoader(false);
            }
        }
        fetchSearchMovies(searchQuery)
    }, [searchQuery]);

    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            setSearchQuery(query);
        }
    }, [searchParams]);
    useEffect(() => {
        searchParams.set('query', searchQuery);
    }, [searchParams, searchQuery]);


    const onSearchSubmit = query => setSearchQuery(query);

    return (<div>
       {isLoader && <Loader />}
       <SearchMovies onSearchSubmit={onSearchSubmit}/>
       {searchResults &&
                <SearchResultsList arrayResults={searchResults} />
            }
            
      </div>
    )
}

export default Movies