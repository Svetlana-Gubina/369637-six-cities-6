import React, {useEffect, useState} from "react";
import {api} from '../../index';
import CommentModel from '../../models/comment-model';
import ReviewsItem from '../reviews-item/reviews-item';
import LoadingScreen from '../loading-screen/loading-screen';
import {idPropType} from '../../prop-types';

const ReviewsList = (props) => {
  const {id} = props;
  const [comments, setComments] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get(`/comments/${id}`)
    .then((res) => {
      setComments(CommentModel.parseCommentsData(res.data));
      setIsLoading(false);
    })
    .catch(() => {
      setHasError(true);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      {hasError ? <div>Error occured fetching data</div> : (<ul className="reviews__list">
        {comments.map((commentItem) => <ReviewsItem
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
  id: idPropType,
};

export default ReviewsList;
