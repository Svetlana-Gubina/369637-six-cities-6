import {options} from '../mocks/offers';
import {ActionType} from './action';

const initialState = {
  activeCityItem: options[0].name,
  availableOffers: options[0].availableOffers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return {
        ...state,
        activeCityItem: action.payload,
      };

    default: return state;
  }
};

export {reducer};
