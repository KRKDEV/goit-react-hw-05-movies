import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import { Loader } from '../../components/Loader/Loader';

const API_KEY = `5576770c01d63e1242c2c0a47f8d9a02`;

const Home = () => {
  const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  const [title, setTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrending = async () => {
    setIsLoading(true);

    const response = await fetch(API_URL)
      .then(response => response.json())
      .catch(error => console.log('There was an error', error));
    if (response) {
      setIsLoading(false);
      const results = [...response.results];
      return results.map(movie => ({
        title: movie.title,
        id: movie.id,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average.toString().slice(0, 1),
      }));
    } else {
      console.log('There was an error with fetch');
    }
  };
  useEffect(() => {
    const getMovies = async () => {
      const fetchResults = await fetchTrending();
      setTitle(fetchResults);
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h1>Trending today...</h1>
      <ul className={css['trending__list']}>
        {isLoading ? (
          <Loader />
        ) : (
          title &&
          title.length &&
          title.map(({ id, title, poster_path, vote_average }) => (
            <li key={id} className={css['trending__card']}>
              <Link to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt="Poster"
                />
                <p>{title}</p>
                <p className={css['trending__vote']}>
                  <span>{vote_average}</span> / 10
                </p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </main>
  );
};

export default Home;
