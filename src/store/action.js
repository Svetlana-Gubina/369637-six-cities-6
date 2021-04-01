import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHOOSE_CITY: `welcomeScreen/chooseCity`,
  SET_SORT_TYPE: `welcomeScreen/setSortType`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_HOTELS: `store/loadHotels`,
  REDIRECT_TO_ROUTE: `signIn/redirectToRoute`,
  SET_LOGIN: `signIn/setLogin`,
};

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

export const loadHotels = createAction(ActionType.LOAD_HOTELS, (hotelsList) => {
  return {
    payload: hotelsList,
  };
});

export const choseCity = createAction(ActionType.CHOOSE_CITY, (cityName) => {
  return {
    payload: cityName
  };
});

export const setSortType = createAction(ActionType.SET_SORT_TYPE, (sortType) => {
  return {
    payload: sortType
  };
});

export const setLogin = createAction(ActionType.SET_LOGIN, (userData) => {
  return {
    payload: userData
  };
});
