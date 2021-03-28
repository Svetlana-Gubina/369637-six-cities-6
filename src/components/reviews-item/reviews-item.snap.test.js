import React from 'react';
import {render} from '@testing-library/react';
import ReviewsItem from './reviews-item';

test(`Should ReviewsItem render correctly`, () => {
  const review = {
    userAvatar: `img/1.png`,
    userName: `Oliver`,
    userRate: 3,
    reviewText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    reviewTime: `March 2021`,
  };

  const {container} = render(<ReviewsItem userAvatar={review.userAvatar} userName={review.userName} userRate={review.userRate} reviewText={review.reviewText} reviewTime={review.reviewTime} />);
  expect(container).toMatchSnapshot();
});
