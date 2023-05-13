import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';

const API_KEY = `5576770c01d63e1242c2c0a47f8d9a02`;
const MovieDetails = () => {
  const [details, setDetails] = useState([]);

  const queryParams = useParams();
  const id = queryParams.movieId;

  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  useEffect(() => {
    const getDetails = async () => {
      const detailsResults = await fetch(API_URL)
        .then(response => response.json())
        .catch(error => console.log('There was an error', error));
      setDetails(detailsResults);
    };
    getDetails();
  }, [API_URL]);

  const poster = `https://image.tmdb.org/t/p/w500${details.poster_path}`;
  const user_score = (details.vote_average * 1000) / 100;
  return (
    <main>
      <div className={css['movie-details']}>
        <img
          src={poster}
          alt={details.title}
          className={css['movie-details__img']}
        />
        <ul className={css['movie-details__list']}>
          <li>
            <h1>{details.title}</h1>
          </li>
          <li>
            <p>
              User score: <span>{user_score}%</span>
            </p>
          </li>
          <li>
            <h3>Overview</h3>
          </li>
          <li>
            <p>{details.overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
          </li>
          <li>
            {details.genres !== undefined && (
              <span>{`${details.genres
                .map(genre => genre.name)
                .join(', ')}`}</span>
            )}
          </li>
        </ul>
      </div>
      <div className={css['additional']}>
        <h3>Additional informations</h3>
        <div className={css['additional__wrapper']}>
          <Link to="cast">
            <p>Cast</p>
          </Link>
          <Link to="reviews">
            <p>Reviews</p>
          </Link>
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default MovieDetails;
