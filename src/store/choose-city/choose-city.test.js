import {chooseCity} from './choose-city';
import {DEFAULT_CITY, AVAILABLE_CITIES} from '../../constants';
import {ActionType} from '../action';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(chooseCity(undefined, {}))
      .toEqual({activeCityItem: DEFAULT_CITY});
  });

  it(`Reducer should update activeCityItem to selected city`, () => {
    const state = {activeCityItem: DEFAULT_CITY};
    const choseCityName = {
      type: ActionType.CHOOSE_CITY,
      payload: AVAILABLE_CITIES[2]
    };

    expect(chooseCity(state, choseCityName))
      .toEqual({activeCityItem: AVAILABLE_CITIES[2]});
  });
});
