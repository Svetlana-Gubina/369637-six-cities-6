import {SortType, MAX_RATING} from './constants';

export const ratingStarsToPercent = (ratingNum) => {
  return `${ratingNum * (100 / MAX_RATING)}%`;
};

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
        return a.price - b.price;
      });

    case SortType.PRICE_HIGH_TO_LOW:
      return opts.slice().sort((a, b) => {
        return b.price - a.price;
      });

    case SortType.TOP_RATED_FIRST:
      return opts.slice().sort((a, b) => {
        return a.rating - b.rating;
      });

    default: return opts;
  }
};

