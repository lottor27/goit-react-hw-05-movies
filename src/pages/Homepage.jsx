import { getTrendingFilm } from "ServiceApi/AllApiFetch"
import { useEffect, useState } from "react"
import React from "react"
import Loader from "components/Loader/Loader"
import Hero from "components/Hero/Hero"

const HomePage = () => {
  const [arrayResults, setArrayResults] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  
  useEffect(() => {
    const fetchTrendingMovies = async () => {
        setIsLoader(true);
        try {
            const data = await getTrendingFilm();
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


    console.log("Hello in home");
	return (
    <div>
    {isLoader && <Loader />}
    {arrayResults && <Hero arrayResults={arrayResults} />}
    </div>
  
	)
}

export default HomePage