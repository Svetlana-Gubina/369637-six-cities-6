import {options, getOffersForCity, SortType, sortOffersBy} from '../mocks/offers';
import {ActionType} from './action';
import {AuthorizationStatus} from '../constants';

const initialState = {
  activeCityItem: options[0].name,
  availableOffers: options[0].availableOffers,
  activeSortType: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  hotelsList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return {
        ...state,
        activeCityItem: action.payload,
      };

    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        availableOffers: getOffersForCity(action.payload, options),
      };

    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        activeSortType: action.payload,
      };

    case ActionType.SORT_OPTIONS:
      return {
        ...state,
        availableOffers: sortOffersBy(action.payload, state.availableOffers),
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
