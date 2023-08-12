import Loader from "components/Loader/Loader";
import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getAllFilmsReviews } from "ServiceApi/AllApiFetch"
import ReviewsList from "components/ReviewsList/ReviewsList";


const Reviews = () => {
    const { movieId } = useParams();
    const [reviewsResults, setCastResults] = useState(null);
    const [Error, setError] = useState('');
    const [isLoader, setIsLoader] = useState(false);

    useEffect(() => {
        const fetchMovieCast = async () => {
            setIsLoader(true);
            setError('');
            try {
                const data = await getAllFilmsReviews(movieId);
                if (data.results.length > 0) setCastResults(data.results);
            }
            catch (error) {
                setError(error.message);
                console.log(Error)
            } finally {
                setIsLoader(false);
            }
        }
        fetchMovieCast()
    }, [Error, movieId])


    return (
        <div>
            {isLoader && <Loader />}
            <h2>Reviews</h2>
            {reviewsResults ?
                <ReviewsList reviewsResults={reviewsResults} />
                : (<p>We dont have any reviews for this movie</p>)}
               </div> 
               )
}
export default Reviews