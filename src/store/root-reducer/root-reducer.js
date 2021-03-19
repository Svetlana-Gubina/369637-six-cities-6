import {combineReducers} from 'redux';
import {hotelsData} from '../hotels-data/hotels-data';
import {authorization} from '../authorization/authorization';
import {setSortType} from '../sort-type/sort-type';
import {chooseCity} from '../choose-city/choose-city';

export const NameSpace = {
  DATA: `DATA`,
  AUTH: `AUTH`,
  SORT_TYPE: `SORT_TYPE`,
  CITY: `CITY`
};

export default combineReducers({
  [NameSpace.DATA]: hotelsData,
  [NameSpace.AUTH]: authorization,
  [NameSpace.SORT_TYPE]: setSortType,
  [NameSpace.CITY]: chooseCity
});

