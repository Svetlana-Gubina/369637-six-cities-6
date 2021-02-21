import React from "react";
import dayjs from 'dayjs';
import {reviewsItemType} from '../propTypes';

const ReviewsItem = (props) => {
  const {userAvatar, userName, userRate, reviewText, reviewTime} = props;

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar"
          src={`img/` + userAvatar + `.jpg`}
          width={54}
          height={54}
          alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">
        {userName}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <div style={{
            display: `none`
          }}>{userRate}</div>
          <span style={{width: `80%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {reviewText}
      </p>
      <time className="reviews__time" dateTime={reviewTime}>{dayjs(reviewTime).format(`MMMM YYYY`)}</time>
    </div>
  </li>;
};

ReviewsItem.propTypes = reviewsItemType;

export default ReviewsItem;