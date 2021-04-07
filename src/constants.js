export const DEBOUNCE_INTERVAL = 600;

export const MAX_RATING = 5;

export const REVIEW_MIN_LENGTH = 50;

export const REVIEW_MAX_LENGTH = 300;

export const MAX_COMMENTS_TO_RENDER = 10;

export const MAX_NEARBY_TO_RENDER = 3;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const TypeOfPlace = {
  APARTMENT: `apartment`,
  ROOM: `room`,
  HOUSE: `house`,
  HOTEL: `hotel`
};

export const AVAILABLE_CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const DEFAULT_CITY = `Paris`;

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

export const AppRoute = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  ROOT: `/`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
  HOTELS: `/hotels`,
};
