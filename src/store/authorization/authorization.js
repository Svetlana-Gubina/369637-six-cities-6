import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../constants';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const authorization = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.REQUIRED_AUTHORIZATION, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export {authorization};
