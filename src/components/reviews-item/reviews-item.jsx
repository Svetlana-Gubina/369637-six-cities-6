import React from "react";
import dayjs from 'dayjs';
import {ratingStarsToPercent} from '../../utils';
import {reviewItemPropType} from '../../prop-types';

const ReviewsItem = (props) => {
  const {userAvatar, userName, userRate, reviewText, reviewTime} = props;

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar"
          src={userAvatar}
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
          <span style={{width: ` ${ratingStarsToPercent(userRate)}`}} />
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

ReviewsItem.propTypes = reviewItemPropType;

export default ReviewsItem;
