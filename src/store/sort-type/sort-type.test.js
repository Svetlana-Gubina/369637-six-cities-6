import {setSortType} from './sort-type';
import {SortType} from '../../constants';
import {ActionType} from '../action';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(setSortType(undefined, {}))
      .toEqual({activeSortType: SortType.POPULAR});
  });

  it(`Reducer should update sort type to selected type`, () => {
    const state = {activeSortType: SortType.POPULAR};
    const choseTypeOfSort = {
      type: ActionType.SET_SORT_TYPE,
      payload: SortType.PRICE_LOW_TO_HIGH
    };

    expect(setSortType(state, choseTypeOfSort))
      .toEqual({activeSortType: SortType.PRICE_LOW_TO_HIGH});
  });
});
