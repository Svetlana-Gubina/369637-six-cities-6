import {combineReducers} from 'redux';
import {hotelsData} from '../hotels-data/hotels-data';
import {authorization} from '../authorization/authorization';
import {setSortType} from '../sort-type/sort-type';
import {chooseCity} from '../choose-city/choose-city';
import {setUserLogin} from '../set-uesr-login/set-uesr-login';
import {setUserFavorites} from '../set-user-favorites/set-user-favorites';
import {updateReviewsForPlace} from '../update-reviews/update-reviews';
import {serverError} from '../server-error/server-error';
import {loginError} from '../login-error/login-error';

export const NameSpace = {
  DATA: `DATA`,
  AUTH: `AUTH`,
  SORT_TYPE: `SORT_TYPE`,
  CITY: `CITY`,
  LOGIN: `LOGIN`,
  FAVORITES: `FAVORITES`,
  REVIEWS: `REVIEWS`,
  SERVER_ERROR_MESSAGE: `SERVER_ERROR_MESSAGE`,
  LOGIN_ERROR_MESSAGE: `LOGIN_ERROR_MESSAGE`,
};

export default combineReducers({
  [NameSpace.DATA]: hotelsData,
  [NameSpace.AUTH]: authorization,
  [NameSpace.SORT_TYPE]: setSortType,
  [NameSpace.CITY]: chooseCity,
  [NameSpace.LOGIN]: setUserLogin,
  [NameSpace.FAVORITES]: setUserFavorites,
  [NameSpace.REVIEWS]: updateReviewsForPlace,
  [NameSpace.SERVER_ERROR_MESSAGE]: serverError,
  [NameSpace.LOGIN_ERROR_MESSAGE]: loginError,
});

