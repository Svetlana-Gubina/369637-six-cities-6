import {options} from '../mocks/offers';
import {ActionType} from './action';

const initialState = {
  city: options[0].name,
  availableOffers: options[0].availableOffers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return {
        city: action.city
      };
    case ActionType.FILL_OFFERS_LIST:
      return {
        availableOffers: action.availableOffers
      };

    default: return state;
  }
};

export {reducer};
