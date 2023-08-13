import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Layout from "Layout/Layout";

const HomePage = lazy(() => import('pages/Homepage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const DetailsMovies = lazy(() => import('pages/DetailsMovies'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
const Movies = lazy(() => import('pages/Movies'));
const InTernd = lazy(() => import('pages/InTrend'));


export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path='inTrend' element={<InTernd />} />
          <Route path='inTrend:movieId' element={<InTernd />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<DetailsMovies />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
     </Suspense>
  );
};
