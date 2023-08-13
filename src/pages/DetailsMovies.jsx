import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from 'components/Loader/Loader';
import { getAllFilmsDetails } from "ServiceApi/AllApiFetch"
import Button from "components/ButtonBack/ButtonBack";
import MovieDetailsCard from "components/MovieDetailsCard/MovieDetailsCard";
import { Link, Outlet } from "react-router-dom";

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
      <div>
        {' '}
        {isLoader && <Loader />}
        <Button
          handleClick={() => {navigate(location);}} >
          Go back
        </Button>
        {selectedMovie && <MovieDetailsCard movie={selectedMovie} />}
        <div className="d-grid gap-2">
          <p className="text-body-secondary">Additional information</p>
          <Link to="cast" className="btn btn-outline-secondary">
            Cast
          </Link>
          <Link to="reviews" className="btn btn-outline-secondary">
            Reviews
          </Link>
          <Outlet />
        </div>
      </div>
    );
}

export default DetailsMovies