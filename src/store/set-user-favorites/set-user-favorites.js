import {createReducer} from '@reduxjs/toolkit';
import {setFavorites} from '../action';

const initialState = {
  favorites: [],
};

const setUserFavorites = createReducer(initialState, (builder) => {
  builder.addCase(setFavorites, (state, action) => {
    state.favorites = action.payload;
  });
});

export {setUserFavorites};
