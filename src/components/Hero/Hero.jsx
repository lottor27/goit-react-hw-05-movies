import React from "react";
import { Link, useLocation } from 'react-router-dom';


const Hero = ({ arrayResults }) => {
     
    console.log(arrayResults);
  const location = useLocation();
  
    function getRandomInt() {
        return Math.floor(Math.random() * 21);
      }

      console.log(getRandomInt());
      const randomHero = arrayResults[getRandomInt()]
      console.log(randomHero.poster_path);
      const posterIMG = `https://image.tmdb.org/t/p/original/${randomHero.backdrop_path}`
      
  return (
    <div>
      
      {arrayResults && (
        <div className="card mb-3">
          <img
            src={posterIMG}
            className="card-img-top"
            alt={randomHero.title}
          />
          <div className="card-body">
            <Link
              to={`/movies/${randomHero.id}`}
              className="card-title"
              state={{ from: location }}
            >
              {randomHero.original_title}
            </Link>
            <p className="card-text">{randomHero.overview}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                10/{randomHero.vote_average.toFixed(2)}
              </small>
            </p>
            <Link to={`/movies/${randomHero.id}`} state={{ from: location }}>
              {' '}
              Details.....
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero