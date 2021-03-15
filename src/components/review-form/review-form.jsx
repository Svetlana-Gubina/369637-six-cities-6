import React, {useState, useRef} from 'react';
import {api} from '../../index';
import {idPropType} from '../../prop-types';

const ReviewForm = (props) => {
  const {id} = props;
  const [review, setReview] = useState({
    stars: 0,
    comment: ``});
  const [result, setResult] = useState([]);

  const formRef = useRef();

  const handleCommentChange = (evt) => {
    const {value} = evt.target;
    setReview({
      ...review,
      comment: value
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    api.post(`/comments/${id}`)
    .then((response) => setResult(response.status))
    .catch(() => {
      formRef.current.style.display = `block`;
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <div id={result} style={{
        display: `none`,
        color: `red`
      }} ref={formRef}>Sorry! Something went wrong! Please try again</div>
      <div>{review.comment}</div>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" onChange={() => setReview({
          ...review,
          stars: 5,
        })} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" onChange={() => setReview({
          ...review,
          stars: 4,
        })} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" onChange={() => setReview({
          ...review,
          stars: 3,
        })} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" onChange={() => setReview({
          ...review,
          stars: 2,
        })} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" onChange={() => setReview({
          ...review,
          stars: 1,
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
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: idPropType,
};

export default ReviewForm;

