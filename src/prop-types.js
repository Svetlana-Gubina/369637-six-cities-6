import PropTypes from 'prop-types';

export const onSubmitType = PropTypes.func.isRequired;

export const onLoadType = PropTypes.func.isRequired;

export const setActiveElementType = PropTypes.func;

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
  long: PropTypes.number,
  rating: PropTypes.number,
}));

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

export const additionalClassType = PropTypes.string;

export const cityItemType = PropTypes.shape({
  name: PropTypes.string,
  availableOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        imgSrc: PropTypes.string,
        placeCardPriceValue: PropTypes.number,
        placeCardName: PropTypes.string,
        placeCardType: PropTypes.string,
        setActiveElement: PropTypes.func,
        className: PropTypes.string,
        specialCardClass: PropTypes.string,
        additionalClass: PropTypes.string,
      })
  ),
});

export const optionsType = PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      availableOffers: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            imgSrc: PropTypes.string,
            placeCardPriceValue: PropTypes.number,
            placeCardName: PropTypes.string,
            placeCardType: PropTypes.string,
            setActiveElement: PropTypes.func,
            className: PropTypes.string,
            specialCardClass: PropTypes.string,
            additionalClass: PropTypes.string,
          })
      ),
    })
);

export const cityNameType = PropTypes.string;

export const lengthType = PropTypes.number;

export const sortTypeNameType = PropTypes.string;

export const sortTypesType = PropTypes.shape({
  POPULAR: PropTypes.string,
  PRICE_LOW_TO_HIGH: PropTypes.string,
  PRICE_HIGH_TO_LOW: PropTypes.string,
  TOP_RATED_FIRST: PropTypes.string,
});

export const popUpStateType = PropTypes.bool;
