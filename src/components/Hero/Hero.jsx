import React from "react";

const Hero =({arrayResults})=>{
    console.log(arrayResults);
    
    function getRandomInt() {
        return Math.floor(Math.random() * 21);
      }

      console.log(getRandomInt());
      const randomHero = arrayResults[getRandomInt()]
      console.log(randomHero.poster_path);
      const posterIMG = `https://image.tmdb.org/t/p/original/${randomHero.backdrop_path}`
    return(
        <div className="card mb-3">
        <img src={posterIMG} className="card-img-top" alt={randomHero.title}/>
        <div className="card-body">
          <h5 className="card-title">{randomHero.original_title}</h5>
          <p className="card-text">{randomHero.overview}</p>
          <p className="card-text"><small className="text-body-secondary">10/{randomHero.vote_average.toFixed(2)}</small></p>
        </div>
      </div>
    )
}

export default Hero