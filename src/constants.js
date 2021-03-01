const ZOOM = 12;

export const CITY = {
  zoom: ZOOM,
  latitude: 52.38333,
  longitude: 4.9,
};

export const REVIEWS = [
  {
    userAvatar: `avatar-max`,
    userName: `Max`,
    userRate: `80%`,
    reviewText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    reviewTime: `2019-04-24`,
  },
];

export const authorized = true;

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
