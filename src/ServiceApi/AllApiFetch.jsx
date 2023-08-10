// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.





import axios from 'axios'

const API_KEY = 'bd0a4499e3f0b036025d12595397227a';
const URL_FOR_IMG = 'https://image.tmdb.org/t/p/w500';
axios.defaults.baseURL = 'https://api.themoviedb.org/'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWY1ZmQ4ZGMwZDZkNWUzNmE0MTk2NTgzYzVjMTQ5ZSIsInN1YiI6IjY0ZDI5ODNlODUwOTBmMDE0NDVkMTZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cCL_vkXeZRKopM-L3r01YH3xygP-PT4RBaXjsS3_dWE',
    },
};

export const getAllFilms = async () => {
	const { data } = await axios(`3/trending/movie/day?language=en-US`, options)
	return data
}


// export const getAllTrendingFilms = async () => {
// 	const { data } = await axios('films')
// 	return data
// }

export const getAllSearchFilms = async () => {
	const { data } = await axios('films')
	return data
}

// export const getAllFilmsDetails = async () => {
// 	const { data } = await axios('films')
// 	return data
// }

// export const getAllFilmsCredits = async () => {
// 	const { data } = await axios('films')
// 	return data
// }



// export const getAllFilmsReviews = async () => {
// 	const { data } = await axios('films')
// 	return data
// }



