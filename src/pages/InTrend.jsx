import React from "react";
import { getAllTrendingFilms } from "ServiceApi/AllApiFetch"
import { useEffect, useState } from "react"
import Loader from "components/Loader/Loader";
import { Link, useLocation } from 'react-router-dom';



const InTernd = () => {

    const [arrayResults, setArrayResults] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const location = useLocation();
    
    useEffect(() => {
      const fetchTrendingMovies = async () => {
          setIsLoader(true);
          try {
              const data = await getAllTrendingFilms();
              setArrayResults(data.results);
          }
          catch (error) {
              console.message(error);
          } finally {
              setIsLoader(false);
          }
      }
      fetchTrendingMovies()
  }, [])
  


    return (
        <div className="container">
            
        {isLoader && <Loader />}
        {arrayResults && <div className="card-group">
{arrayResults.map(arrayResult => {
    const posterIMG = `https://image.tmdb.org/t/p/original/${arrayResult.backdrop_path}`
    
    return (
      <div className="card" key={arrayResult.id}>
        <img src={posterIMG} className="card-img-top" alt={arrayResult.title} />
        <div className="card-body">
          <Link
            to={`/movies/${arrayResult.id}`}
            className="card-title"
            state={{ from: location }}
          >
            {arrayResult.title}
          </Link>
          <p className="card-text">{arrayResult.overview}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              10/{arrayResult.vote_average.toFixed(2)}
            </small>
          </p>
          <Link to={`/movies/${arrayResult.id}`} state={{ from: location }}>
            {' '}
            Details.....
          </Link>
        </div>
      </div>
    );
})}
  </div>}
  </div>
    )
}

export default InTernd