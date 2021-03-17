import {ActionType} from '../action';
import HotelsModel from '../../models/hotels-model';

const initialState = {
  hotelsList: [],
  isDataLoaded: false,
};

const hotelsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        hotelsList: HotelsModel.parseHotelsData(action.payload),
        isDataLoaded: true
      };

    default: return state;
  }
};

export {hotelsData};
