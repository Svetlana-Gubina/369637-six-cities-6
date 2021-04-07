import {updateReviewsForPlace} from './update-reviews';
import {ActionType} from '../action';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(updateReviewsForPlace(undefined, {}))
      .toEqual({
        reviews: [],
      });
  });

  it(`Reducer with data should update state`, () => {
    const state = {
      reviews: [],
    };
    const review = {
      userAvatar: `img/1.png`,
      userName: `Oliver`,
      userRate: 3,
      reviewText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      reviewTime: `March 2021`,
    };

    const updateReviewsAction = {
      type: ActionType.UPDATE_REVIEWS,
      payload: review
    };

    expect(updateReviewsForPlace(state, updateReviewsAction))
      .toEqual({
        reviews: [
          review,
        ],
      });
  });
});

