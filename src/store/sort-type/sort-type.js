import {ActionType} from '../action';
import {SortType} from '../../constants';

const initialState = {
  activeSortType: SortType.POPULAR,
};

const setSortType = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        activeSortType: action.payload,
      };

    default: return state;
  }
};

export {setSortType};
