export const ActionType = {
  CHOOSE_CITY: `welcomeScreen/chooseCity`,
};

// actionCreator()

export const ActionCreator = {
  choseCity: (cityName) => ({
    type: ActionType.CHOOSE_CITY,
    payload: cityName,
  }),
};
