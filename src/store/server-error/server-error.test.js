import {ActionType} from '../action';
import {serverError} from './server-error';


describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(serverError(undefined, {}))
      .toEqual({
        serverErrorMessage: ``,
      });
  });

  it(`Reducer with error should update state`, () => {
    const state = {
      serverErrorMessage: ``,
    };

    const message = `Internal Server Error.`;

    const setServerErrorAction = {
      type: ActionType.SET_SERVER_ERROR,
      payload: message
    };

    expect(serverError(state, setServerErrorAction))
      .toEqual({
        serverErrorMessage: message,
      });
  });
});
