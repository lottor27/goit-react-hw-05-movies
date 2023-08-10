import { getTrendingFilm } from "ServiceApi/AllApiFetch"
import { useEffect, useState } from "react"


const HomePage = () => {
    
    const [data, setData] = useState([])

    useEffect(() => {
    const fetchinfo= async () => {
        try {
            const data = await getTrendingFilm();
            const movieInfo = data.response;
            console.log(data.results);
            setData(movieInfo)
        } catch (error) {
            console.error(error.message);
        } 
    }
    fetchinfo({movieInfo})
}, [])


       console.log({movieInfo});
	return (
		<div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
	)
}

export default HomePage