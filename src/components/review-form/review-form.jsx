import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {getHotelsList} from '../../store/api-actions';
import {api} from '../../index';
import {REVIEW_MIN_LENGTH} from '../../constants';
import {idPropType} from '../../prop-types';

const ReviewForm = (props) => {
  const {id} = props;
  const [review, setReview] = useState({
    comment: ``,
    rating: 0
  });
  const [isLoading, setIsLoading] = useState(false);

  const error = useRef();

  const handleReset = () => {
    document.getElementById(`userReviewForm`).reset();
    setReview({
      comment: ``,
      rating: 0
    });
  };

  const handleCommentChange = (evt) => {
    const {value} = evt.target;
    setReview({
      ...review,
      comment: value
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    api.post(`/comments/${id}`, {
      "comment": review.comment,
      "rating": review.rating
    })
    .then(() => {
      setIsLoading(false);
      handleReset();
      dispatch(getHotelsList());
    })
    .catch(() => {
      setIsLoading(false);
      error.current.style.display = `block`;
    });
  };

  return (
    <form id="userReviewForm" className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <div style={{
        display: `none`,
        color: `red`
      }} ref={error}>Sorry! Something went wrong! Please try again</div>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" onChange={() => setReview({
          ...review,
          rating: 5,
        })} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" onChange={() => setReview({
          ...review,
          rating: 4,
        })} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" onChange={() => setReview({
          ...review,
          rating: 3,
        })} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" onChange={() => setReview({
          ...review,
          rating: 2,
        })} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" onChange={() => setReview({
          ...review,
          rating: 1,
        })} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} onChange={handleCommentChange} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{REVIEW_MIN_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={review.comment.length < REVIEW_MIN_LENGTH || review.rating === 0 || isLoading} >{isLoading ? `...` : `Submit`}</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: idPropType,
};

export default ReviewForm;

