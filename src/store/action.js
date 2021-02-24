export const ActionType = {
  CHOOSE_CITY: `welcomeScreen/chooseCity`,
  UPDATE_OFFERS: `welcomeScreen/updateOffers`,
  SORT_OPTIONS: `welcomeScreen/sortOptions`,
};

// actionCreator()

export const ActionCreator = {
  choseCity: (cityName) => ({
    type: ActionType.CHOOSE_CITY,
    payload: cityName,
  }),
  updateOffers: (name) => ({
    type: ActionType.UPDATE_OFFERS,
    payload: name,
  }),
  sortOptions: (type) => ({
    type: ActionType.SORT_OPTIONS,
    payload: type,
  }),
};
