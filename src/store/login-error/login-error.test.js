import {ActionType} from '../action';
import {loginError} from './login-error';


describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(loginError(undefined, {}))
      .toEqual({
        loginErrorMessage: ``,
      });
  });

  it(`Reducer with error should update state`, () => {
    const state = {
      loginErrorMessage: ``,
    };

    const message = `Error.`;

    const setLoginErrorAction = {
      type: ActionType.SET_LOGIN_ERROR,
      payload: message
    };

    expect(loginError(state, setLoginErrorAction))
      .toEqual({
        loginErrorMessage: message,
      });
  });
});
