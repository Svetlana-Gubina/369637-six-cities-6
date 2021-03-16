import {SortType} from './constants';

export const getOffersForCity = (cityName, opts) => {
  return opts.filter((opt) => opt.city.name === cityName);
};

export const getActiveCityLocation = (cityName, opts) => {
  const option = opts.find((opt) => opt.city.name === cityName);
  return option.city.location;
};

export const sortOffersBy = (sortType, opts) => {
  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return opts.slice().sort((a, b) => {
        return a.placeCardPriceValue - b.placeCardPriceValue;
      });

    case SortType.PRICE_HIGH_TO_LOW:
      return opts.slice().sort((a, b) => {
        return b.placeCardPriceValue - a.placeCardPriceValue;
      });

    case SortType.TOP_RATED_FIRST:
      return opts.slice().sort((a, b) => {
        return a.rating - b.rating;
      });

    default: return opts;
  }
};

export const getSomePlacesInfo = (placesInfo, fromIndex, toIndex) => {
  return placesInfo.slice(fromIndex, toIndex);
};
