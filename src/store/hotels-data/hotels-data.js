import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

const initialState = {
  hotelsList: [],
  isDataLoaded: false,
};

const hotelsData = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.LOAD_HOTELS, (state, action) => {
    state.hotelsList = action.payload;
    state.isDataLoaded = true;
  });
});

export {hotelsData};
