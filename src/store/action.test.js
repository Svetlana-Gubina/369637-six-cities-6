import {ActionType, choseCity} from './action';

describe(`Action creators work correctly`, () => {

  it(`Action creator for reset game returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.CHOOSE_CITY,
    };

    expect(choseCity()).toEqual(expectedAction);
  });
});
