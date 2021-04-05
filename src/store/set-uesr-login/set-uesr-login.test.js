import {setUserLogin} from './set-uesr-login';
import {ActionType} from '../action';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(setUserLogin(undefined, {}))
      .toEqual({userLogin: ``});
  });

  it(`Reducer should update userLogin with provided login`, () => {
    const state = {userLogin: ``};
    const login = `johnDoe@gmail.com`;

    const setLogin = {
      type: ActionType.SET_LOGIN,
      payload: login
    };

    expect(setUserLogin(state, setLogin))
      .toEqual({userLogin: login});
  });
});
