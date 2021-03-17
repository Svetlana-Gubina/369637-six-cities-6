import {ActionType} from '../action';
import {AuthorizationStatus} from '../../constants';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    default: return state;
  }
};

export {authorization};
