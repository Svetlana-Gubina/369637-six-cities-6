import {createReducer} from '@reduxjs/toolkit';
import {setLogin} from '../action';

const initialState = {
  userLogin: ``,
};

const setUserLogin = createReducer(initialState, (builder) => {
  builder.addCase(setLogin, (state, action) => {
    state.userLogin = action.payload;
  });
});

export {setUserLogin};
