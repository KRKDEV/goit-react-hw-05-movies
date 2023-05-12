import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews';

export const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};