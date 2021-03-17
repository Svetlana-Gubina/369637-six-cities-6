import {ActionType} from '../action';
import {DEFAULT_CITY} from '../../constants';

const initialState = {
  activeCityItem: DEFAULT_CITY,
};

const chooseCity = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return {
        ...state,
        activeCityItem: action.payload,
      };

    default: return state;
  }
};

export {chooseCity};
