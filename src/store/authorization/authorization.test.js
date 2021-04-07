import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {authorization} from './authorization';
import {AuthorizationStatus, AppRoute} from '../../constants';
import {ActionType} from '../action';
import {checkAuth, login, logOut} from '../api-actions';

const api = createAPI(() => {});

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(authorization(undefined, {}))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });

  it(`Reducer should update authorizationStatus to 'auth'`, () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };

    expect(authorization(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call GET to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(AppRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });

  it(`Should make a correct API call POST to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `johnDoe@gmail.com`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(AppRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

  it(`Should make a correct API call to /logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logOut();

    apiMock
      .onGet(AppRoute.LOGOUT)
      .reply(200, [{fake: true}]);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });

      });
  });
});
