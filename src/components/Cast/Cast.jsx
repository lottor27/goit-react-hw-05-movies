import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllFilmsCredits } from "ServiceApi/AllApiFetch"
import Loader from "components/Loader/Loader";
import DefaultActor from 'DefaultActor.jpg'

const Cast = () => {
    const { movieId } = useParams();
    const [castResults, setCastResults] = useState(null);
    const [Error, setError] = useState('');
    const [isLoader, setIsLoader] = useState(false);

    useEffect(() => {
        const fetchMovieCast = async () => {
            setIsLoader(true);
            setError('');
            try {
                const data = await getAllFilmsCredits(movieId);
                setCastResults(data.cast);
            }
            catch (error) {
                setError(error.message);
                console.log(Error)
            } finally {
                setIsLoader(false);
            }
        }
        fetchMovieCast()
    }, [Error, movieId]);

    console.log(castResults);
    return (
        <>
            {isLoader && <Loader />}
            <h2>Casting</h2>
            {castResults && 
            <div className="card-group cardbox"> 
            {castResults.map(castResult => {
                const avatarIMG = `https://image.tmdb.org/t/p/original/${castResult.profile_path}`
                const posterPath = castResult.profile_path ? avatarIMG : DefaultActor;
                return (
                  <div className="card-cast" key={castResult.id}>
  <img src={posterPath} className="card-img-top" alt={castResult.name}/>
  <div className="card-body">
    <h5 className="card-title">{castResult.name}</h5>
    <p className="card-text">{castResult.character}</p>
    <p className="card-text">Popularity - {castResult.popularity}</p>
  </div>
</div>
                )
            })}
        </div>}
        </>
    )
}

export default Cast