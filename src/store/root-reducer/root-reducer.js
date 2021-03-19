import {combineReducers} from 'redux';
import {hotelsData} from '../hotels-data/hotels-data';
import {authorization} from '../authorization/authorization';
import {setSortType} from '../sort-type/sort-type';
import {chooseCity} from '../choose-city/choose-city';
import {fetchError} from '../fetch-error/fetch-error';

export const NameSpace = {
  DATA: `DATA`,
  AUTH: `AUTH`,
  SORT_TYPE: `SORT_TYPE`,
  CITY: `CITY`,
  ERROR: `ERROR`
};

export default combineReducers({
  [NameSpace.DATA]: hotelsData,
  [NameSpace.AUTH]: authorization,
  [NameSpace.SORT_TYPE]: setSortType,
  [NameSpace.CITY]: chooseCity,
  [NameSpace.ERROR]: fetchError,
});

