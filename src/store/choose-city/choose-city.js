import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import {DEFAULT_CITY} from '../../constants';

const initialState = {
  activeCityItem: DEFAULT_CITY,
};

const chooseCity = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.CHOOSE_CITY, (state, action) => {
    state.activeCityItem = action.payload;
  });
});

export {chooseCity};
