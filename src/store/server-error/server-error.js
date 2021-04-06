import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

const initialState = {
  serverErrorMessage: `sorry`,
  isServerError: true
};

const serverError = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.SET_SERVER_ERROR, (state, action) => {
    state.serverErrorMessage = action.payload;
    state.isServerError = true;
  });
});

export {serverError};
