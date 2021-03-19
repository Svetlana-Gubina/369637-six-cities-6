import {NameSpace} from './store/root-reducer/root-reducer';
import {createSelector} from 'reselect';
import HotelsModel from './models/hotels-model';

export const getHotelsData = (state) => state[NameSpace.DATA].hotelsList;
export const getSortType = (state) => state[NameSpace.SORT_TYPE].activeSortType;
export const getAuthorizationStatus = (state) => state[NameSpace.AUTH].authorizationStatus;
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getActiveCityItem = (state) => state[NameSpace.CITY].activeCityItem;

export const getParsedHotelsData = createSelector(
    [getHotelsData],
    (placesInfo) => {
      return HotelsModel.parseHotelsData(placesInfo);
    }
);

