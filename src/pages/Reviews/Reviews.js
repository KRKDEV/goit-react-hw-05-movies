import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import css from './Reviews.module.css';
import parse from 'html-react-parser';

const API_KEY = `5576770c01d63e1242c2c0a47f8d9a02`;

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const queryParams = useParams();
  const id = queryParams.movieId;

  const API_URL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    setIsLoading(true);

    const getReviews = async () => {
      const reviewsResults = await fetch(API_URL)
        .then(response => response.json())
        .catch(error => console.log('There was an error', error));
      if (reviewsResults) {
        setIsLoading(false);
        const results = [...reviewsResults.results];
        results.map(review => ({
          id: review.id,
          author: review.author,
          content: review.content,
          rating: review.rating,
        }));
        setReviews(results);
      } else {
        console.log('There was a problem with fetching...');
      }
    };
    getReviews();
  }, [API_URL]);

  return (
    <div>
      <h3>Reviews</h3>
      <ul className={css['reviews__list']}>
        {isLoading && <Loader />}
        {reviews && reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li key={id} className={css['reviews__item']}>
              <h3>
                Author: <span>{author}</span>
              </h3>
              <p>{parse(`${content}`)}</p>
            </li>
          ))
        ) : (
          <p>There are no reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
