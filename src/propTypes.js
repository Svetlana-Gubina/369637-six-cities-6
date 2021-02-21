import PropTypes from 'prop-types';

export const authorizedType = PropTypes.bool;

export const cityType = PropTypes.shape({
  zoom: PropTypes.number,
  lat: PropTypes.number,
  lng: PropTypes.number,
});

export const pointsType = PropTypes.arrayOf(PropTypes.shape({
  lat: PropTypes.number,
  lng: PropTypes.number,
}));

export const placesInfoType = PropTypes.arrayOf(PropTypes.shape({
  imgSrc: PropTypes.string,
  placeCardPriceValue: PropTypes.number,
  placeCardName: PropTypes.string,
  placeCardType: PropTypes.string,
  lat: PropTypes.number,
  long: PropTypes.number
}));

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

export const placeCardInfoType = {
  id: PropTypes.number,
  imgSrc: PropTypes.string,
  placeCardPriceValue: PropTypes.number,
  placeCardName: PropTypes.string,
  placeCardType: PropTypes.string,
  setActiveElement: PropTypes.func,
  className: PropTypes.string,
  specialCardClass: PropTypes.string,
  additionalClass: PropTypes.string,
};

export const additionalClassType = PropTypes.string;