import React from 'react'
import { Link, } from 'react-router-dom'
import DefaultFilm from 'DefaultFilm.jpg'


const SearchResultsList = ({ arrayResults }) => {
    

    return (
        <ul>
            {arrayResults.map(arrayResult => {

             
               let posterIMG = `https://image.tmdb.org/t/p/original/${arrayResult.backdrop_path}`
                
                return (
                    <div className="card mb-3"  key={arrayResult.id}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img 
                        src={ arrayResult.backdrop_path ? posterIMG : DefaultFilm} 
                        className="img-fluid rounded-start" 
                        alt={arrayResult.title}/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                        <Link to={`/movies/${arrayResult.id}`} className="card-title">{arrayResult.title} </Link> 
                          <p className="card-text">{arrayResult.overview}</p>
                          <p className="card-text"><small className="text-body-secondary">10/{arrayResult.vote_average}</small></p>
                          <Link to={`/movies/${arrayResult.id}`} className="card-text" > Details.....</Link> 
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })}
        </ul>
    )
}

export default SearchResultsList

