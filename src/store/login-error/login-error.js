import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

const initialState = {
  loginErrorMessage: ``,
};

const loginError = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.SET_LOGIN_ERROR, (state, action) => {
    state.loginErrorMessage = action.payload;
  });
});

export {loginError};
