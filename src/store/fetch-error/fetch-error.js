import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

const initialState = {
  fetchErrorStatus: false,
};

const fetchError = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.SET_ERROR, (state) => {
    state.fetchErrorStatus = true;
  });
});

export {fetchError};
