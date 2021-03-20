import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization} from '../action';
import {AuthorizationStatus} from '../../constants';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const authorization = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export {authorization};
