export const ActionType = {
  CHOOSE_CITY: `welcomeScreen/chooseCity`,
  UPDATE_OFFERS: `welcomeScreen/updateOffers`,
};

// actionCreator()

export const ActionCreator = {
  choseCity: (cityName) => ({
    type: ActionType.CHOOSE_CITY,
    payload: cityName,
  }),
  updateOffers: (cityName) => ({

  }),
};
