import PropTypes from 'prop-types';
import {PlaceType} from './constants';

export const idType = PropTypes.number.isRequired;

export const placeType = PropTypes.oneOf([PlaceType.APARTMENT, PlaceType.HOUSE, PlaceType.ROOM, PlaceType.HOTEL]);

export const priceType = PropTypes.number.isRequired;

export const imgSrcType = PropTypes.string;

export const isDataLoadedType = PropTypes.bool.isRequired;

export const cityNameType = PropTypes.string.isRequired;

export const citiesType = PropTypes.arrayOf(PropTypes.string);

export const onSubmitType = PropTypes.func.isRequired;

export const onLoadType = PropTypes.func.isRequired;

export const setActiveElementType = PropTypes.func;

export const classNameType = PropTypes.string;

export const authorizedType = PropTypes.string.isRequired;

export const commentGetType = PropTypes.shape({
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

export const usertype = PropTypes.shape({
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
});

export const authInfoType = PropTypes.shape({
  avatarUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const placeInfoType = PropTypes.shape({
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
  price: PropTypes.number.isRequired,
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
  type: PropTypes.oneOf([PlaceType.APARTMENT, PlaceType.HOUSE, PlaceType.ROOM, PlaceType.HOTEL]),
});

export const locationType = PropTypes.shape({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number,
});

export const pointsType = PropTypes.arrayOf(PropTypes.shape({
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
}));

export const placesInfoType = PropTypes.arrayOf(placeInfoType);

export const reviewItemsType = PropTypes.arrayOf(
    PropTypes.shape({
      userAvatar: PropTypes.string,
      userName: PropTypes.string,
      userRate: PropTypes.string,
      reviewText: PropTypes.string,
      reviewTime: PropTypes.string,
    })
);

export const reviewsItemType = {
  userAvatar: PropTypes.string,
  userName: PropTypes.string,
  userRate: PropTypes.string,
  reviewText: PropTypes.string,
  reviewTime: PropTypes.string,
};

export const lengthType = PropTypes.number;

export const sortTypeNameType = PropTypes.string;

export const sortTypesType = PropTypes.shape({
  POPULAR: PropTypes.string,
  PRICE_LOW_TO_HIGH: PropTypes.string,
  PRICE_HIGH_TO_LOW: PropTypes.string,
  TOP_RATED_FIRST: PropTypes.string,
});

export const popUpStateType = PropTypes.bool;
