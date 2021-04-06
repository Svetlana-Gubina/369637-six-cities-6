import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

const initialState = {
  reviews: [],
};

const updateReviewsForPlace = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.UPDATE_REVIEWS, (state, action) => {
    state.reviews = [
      ...state.reviews,
      action.payload
    ];
  });
});

export {updateReviewsForPlace};
