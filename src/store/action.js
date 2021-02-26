export const ActionType = {
  CHOOSE_CITY: `welcomeScreen/chooseCity`,
  UPDATE_OFFERS: `welcomeScreen/updateOffers`,
  SET_SORT_TYPE: `welcomeScreen/setSortType`,
  SORT_OPTIONS: `welcomeScreen/sortOptions`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_HOTELS: `store/loadHotels`,
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadHotels: (hotelsList) => ({
    type: ActionType.LOAD_HOTELS,
    payload: hotelsList,
  }),
};
