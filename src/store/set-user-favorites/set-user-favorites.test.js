import {setUserFavorites} from './set-user-favorites';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(setUserFavorites(undefined, {}))
      .toEqual({favorites: []});
  });
});
