import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const API_KEY = `5576770c01d63e1242c2c0a47f8d9a02`;

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const queryParams = useParams();
  const id = queryParams.movieId;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    setIsLoading(true);
    const getCast = async () => {
      const castResults = await fetch(API_URL)
        .then(response => response.json())
        .catch(error => console.log('There was an error', error));
      if (castResults) {
        setIsLoading(false);
        const results = [...castResults.cast];
        results.map(cast => ({
          id: cast.id,
          profile_path: cast.profile_path,
          original_name: cast.original_name,
          name: cast.name,
          character: cast.character,
        }));
        setCast(results);
      } else {
        console.log('There was a problem with fetching...');
      }
    };
    getCast();
  }, [API_URL]);

  return (
    <div>
      <h3>Cast</h3>
      <ul className={css['cast']}>
        {cast && cast.length ? (
          <>
            {cast.map(
              ({ id, profile_path, original_name, character, popularity }) => (
                <li key={id} className={css['cast-card']}>
                  <img
                    src={`https://www.themoviedb.org/t/p/w500/${profile_path}`}
                    alt={original_name}
                  />
                  <p>{original_name}</p>
                  <p>{character}</p>
                </li>
              )
            )}
          </>
        ) : (
          <p>We are sorry but cast is not available for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export default Cast;
