import {ActionType, requireAuthorization, redirectToRoute, loadHotels, choseCity, setSortType, setFetchError, setLogin} from './action';
import {AuthorizationStatus} from '../constants';

describe(`Action creators work correctly`, () => {
  it(`Action creator for requireAuthorization returns action with authorization status`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH || AuthorizationStatus.NO_AUTH,
    };

    expect(requireAuthorization()).toEqual(expectedAction);
  });
});
