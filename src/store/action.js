export const ActionType = {
  CHOOSE_CITY: `welcomeScreen/chooseCity`,
  UPDATE_OFFERS: `welcomeScreen/updateOffers`,
  SET_SORT_TYPE: `welcomeScreen/setSortType`,
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
  setSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sortType,
  }),
  sortOptions: (type) => ({
    type: ActionType.SORT_OPTIONS,
    payload: type,
  }),
};
