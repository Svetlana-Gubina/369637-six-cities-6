export const ZOOM = 12;

export const authorized = true;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const PlaceType = {
  APARTMENT: `apartment`,
  ROOM: `room`,
  HOUSE: `house`,
  HOTEL: `hotel`
};

export const AVAILABLE_CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const DEFAULT_CITY = `Paris`;

export const getOffersForCity = (cityName, opts) => {
  return opts.filter((opt) => opt.city.name === cityName);
};

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
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
