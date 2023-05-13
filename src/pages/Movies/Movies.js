import { useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';
import css from './Movies.module.css';

const API_KEY = `5576770c01d63e1242c2c0a47f8d9a02`;
const About = () => {
  const [titles] = useState([]);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}`;

  const handleSubmit = async event => {
    setIsLoading(true);
    event.preventDefault();
    event.currentTarget.reset();
    if (value === '') {
      setIsLoading(false);
      return Notiflix.Notify.info('You have to write movie title');
    }
    const movieSearch = await fetch(API_URL)
      .then(response => response.json())
      .catch(error => console.log('There was an error', error));
    if (movieSearch.results.length === 0) {
      setIsLoading(false);
      return Notiflix.Notify.failure('Could not find any movies');
    }
    if (movieSearch) {
      setIsLoading(false);
      const results = [...movieSearch.results];
      results.map(movie => ({
        title: movie.title,
        id: movie.id,
        poster_path: movie.poster_path,
      }));
      results.forEach(result => {
        titles.push({
          movieId: result.id,
          movieTitle: result.title,
          moviePoster: result.poster_path,
        });
      });
      Notiflix.Notify.success('Found some movies');
    } else {
      Notiflix.Notify.error('There was an error');
    }
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <main>
      <h1>Search for movies</h1>
      <form className={css['searchform']} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a movie title to search..."
          className={css['searchform__input']}
          onChange={handleChange}
        />
        <button type="submit" className={css['searchform__btn']}>
          Search
        </button>
      </form>
      <ul className={css['search__list']}>
        {isLoading ? (
          <Loader />
        ) : (
          titles.length !== 0 &&
          titles.map(movie => (
            <li key={movie.movieId} className={css['search__card']}>
              <Link to={`/movies/${movie.movieId}`}>
                <img
                  src={`https://www.themoviedb.org/t/p/w500/${movie.moviePoster}`}
                  alt="poster"
                />
                <p>{movie.movieTitle}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </main>
  );
};

export default About;
