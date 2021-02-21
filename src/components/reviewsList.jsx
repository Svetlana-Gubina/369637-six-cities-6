import React from "react";
import ReviewsItem from './reviewsItem';
import {v4 as uuidv4} from "uuid";
import {reviewItemsType} from '../propTypes';

const ReviewsList = (props) => {
  const {reviewItems} = props;

  return <ul className="reviews__list">
    {reviewItems.map((reviewItem) => <ReviewsItem
      key={uuidv4()}
      userAvatar={reviewItem.userAvatar}
      userName={reviewItem.userName}
      userRate={reviewItem.userRate}
      reviewText={reviewItem.reviewText}
      reviewTime={reviewItem.reviewTime}
    />)}
  </ul>;

};

ReviewsList.propTypes = {
  reviewItems: reviewItemsType,
};

export default ReviewsList;
