import PropTypes from 'prop-types';
import {TypeOfPlace} from './constants';

export const goodsPropType = PropTypes.arrayOf(PropTypes.string);

export const isFavoritePropType = PropTypes.bool;

export const idPropType = PropTypes.number;

export const placePropType = PropTypes.oneOf([TypeOfPlace.APARTMENT, TypeOfPlace.HOUSE, TypeOfPlace.ROOM, TypeOfPlace.HOTEL]);

export const pricePropType = PropTypes.number;

export const imgSrcPropType = PropTypes.string;

export const isDataLoadedPropType = PropTypes.bool.isRequired;

export const cityNamePropType = PropTypes.string;

export const citiesPropType = PropTypes.arrayOf(PropTypes.string);

export const onSubmitPropType = PropTypes.func;

export const onLoadPropType = PropTypes.func;

export const setActiveElementPropType = PropTypes.func;

export const classNamePropType = PropTypes.string;

export const authorizedPropType = PropTypes.string;

export const commentGetPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
});

export const userPropType = PropTypes.shape({
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
});

export const authInfoPropType = PropTypes.shape({
  avatarUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const placeInfoPropType = PropTypes.shape({
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number,
    }),
    name: PropTypes.string.isRequired,
  }),
  bedrooms: PropTypes.number,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  maxAdults: PropTypes.number,
  price: PropTypes.number,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }),
  images: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number,
  }),
  previewImage: PropTypes.string,
  type: PropTypes.oneOf([TypeOfPlace.APARTMENT, TypeOfPlace.HOUSE, TypeOfPlace.ROOM, TypeOfPlace.HOTEL]),
});

export const locationPropType = PropTypes.shape({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number,
});

export const pointsPropType = PropTypes.arrayOf(PropTypes.shape({
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
}));

export const placesInfoPropType = PropTypes.arrayOf(placeInfoPropType);

export const reviewItemsPropType = PropTypes.arrayOf(
    PropTypes.shape({
      userAvatar: PropTypes.string,
      userName: PropTypes.string,
      userRate: PropTypes.string,
      reviewText: PropTypes.string,
      reviewTime: PropTypes.string,
    })
);

export const reviewItemPropType = {
  userAvatar: PropTypes.string,
  userName: PropTypes.string,
  userRate: PropTypes.number,
  reviewText: PropTypes.string,
  reviewTime: PropTypes.string,
};

export const lengthPropType = PropTypes.number;

export const sortTypeNamePropType = PropTypes.string;

export const sortTypesPropType = PropTypes.shape({
  POPULAR: PropTypes.string,
  PRICE_LOW_TO_HIGH: PropTypes.string,
  PRICE_HIGH_TO_LOW: PropTypes.string,
  TOP_RATED_FIRST: PropTypes.string,
});

export const popUpStatePropType = PropTypes.bool;
