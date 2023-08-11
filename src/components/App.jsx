import { getAllTrendingFilms, getAllSearchFilms } from "ServiceApi/AllApiFetch";
import { lazy, Suspense } from 'react';
import HomePage from "pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Layout from "Layout/Layout";

import Cast from "components/Cast";
import Reviews from "pages/Reviews";
import DetailsMovies from "pages/DetailsMovies";
import ErrorPage from "pages/ErrorPage";
import Movies from "pages/Movies";
import InTernd from "pages/InTrend";


export const App = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path='inTrend' element={<InTernd />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<DetailsMovies />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    // </Suspense>
  );
};
