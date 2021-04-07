import React from "react";
import ReviewsItem from '../reviews-item/reviews-item';
import LoadingScreen from '../loading-screen/loading-screen';
import {MAX_COMMENTS_TO_RENDER} from '../../constants';
import {isFavoritePropType, commentsPropType} from '../../prop-types';

const ReviewsList = (props) => {
  const {comments, hasCommentsError, isCommentsLoading} = props;

  if (isCommentsLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      {hasCommentsError ? <div>Error occured fetching data</div> : (<ul className="reviews__list">
        {comments
        .sort((a, b) => {
          return b.date - a.date;
        })
        .slice(0, MAX_COMMENTS_TO_RENDER)
        .map((commentItem) => <ReviewsItem
          key={commentItem.id}
          userAvatar={commentItem.user.avatarUrl}
          reviewText={commentItem.comment}
          userRate={commentItem.rating}
          reviewTime={commentItem.date}
          userName={commentItem.user.name}
        />)}
      </ul>)}
    </>
  );
};

ReviewsList.propTypes = {
  comments: commentsPropType,
  hasCommentsError: isFavoritePropType,
  isCommentsLoading: isFavoritePropType
};

export default ReviewsList;
