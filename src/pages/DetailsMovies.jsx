import React from "react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from 'components/Loader/Loader';
import { getAllFilmsDetails } from "ServiceApi/AllApiFetch"
import Button from "components/ButtonBack/ButtonBack";
import MovieDetailsCard from "components/MovieDetailsCard/MovieDetailsCard";

const DetailsMovies = () => {
    const { movieId } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isLoader, setIsLoader] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setIsLoader(true);
            try {
                const data = await getAllFilmsDetails(movieId);
                setSelectedMovie(data);
            }
            catch (error) {
                console.error(error.message);
            } finally {
                setIsLoader(false);
            }
        }
        fetchMovieDetails()
    }, [movieId])


    return (
        <div> {isLoader && <Loader />}
        <Button
                handleClick={() => { navigate(location) }}>
                Go back
            </Button>
            {selectedMovie && <MovieDetailsCard movie={selectedMovie} />}

        </div>
    )
}

export default DetailsMovies