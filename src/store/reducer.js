import {ActionType} from './action';
import {DEFAULT_CITY, AuthorizationStatus, SortType} from '../constants';
import HotelsModel from '../models/hotels-model';

const initialState = {
  activeCityItem: DEFAULT_CITY,
  activeSortType: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  hotelsList: [],
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        hotelsList: HotelsModel.parseHotelsData(action.payload),
        isDataLoaded: true
      };

    case ActionType.CHOOSE_CITY:
      return {
        ...state,
        activeCityItem: action.payload,
      };

    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        activeSortType: action.payload,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    default: return state;
  }
};

export {reducer};
