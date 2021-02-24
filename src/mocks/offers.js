const PlaceType = {
  APARTMENT: `Apartment`,
  PRIVATE_ROOM: `Private room`
};

export const offers = [
  {
    id: 1,
    imgSrc: `apartment-01`,
    placeCardPriceValue: 120,
    placeCardName: `Beautiful &amp; luxurious apartment at great location`,
    placeCardType: PlaceType.APARTMENT,
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    rating: 5,
  },
  {
    id: 2,
    imgSrc: `apartment-02`,
    placeCardPriceValue: 132,
    placeCardName: `Canal View Prinsengracht`,
    placeCardType: PlaceType.APARTMENT,
    lat: 52.369553943508,
    lng: 4.85309666406198,
    rating: 4,
  },
  {
    id: 3,
    imgSrc: `apartment-03`,
    smallImgSrc: `apartment-small-03`,
    placeCardPriceValue: 180,
    placeCardName: `Nice, cozy, warm big bed apartment`,
    placeCardType: PlaceType.APARTMENT,
    lat: 52.3909553943508,
    lng: 4.929309666406198,
    rating: 3,
  },
  {
    id: 4,
    imgSrc: `room`,
    smallImgSrc: `room-small`,
    placeCardPriceValue: 80,
    placeCardName: `Wood and stone place`,
    placeCardType: PlaceType.PRIVATE_ROOM,
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    rating: 2,
  },
];


export const options = [
  {
    name: `Paris`,
    availableOffers: offers,
  },
  {
    name: `Cologne`,
    availableOffers: offers.slice(0, 2),
  },
  {
    name: `Brussels`,
    availableOffers: offers.slice(1, 3),
  },
  {
    name: `Amsterdam`,
    availableOffers: offers.slice(0, 3),
  },
  {
    name: `Hamburg`,
    availableOffers: offers.slice(1, 2),
  },
  {
    name: `Dusseldorf`,
    availableOffers: offers.slice(0, 1),
  }
];

export const getOffersForCity = (cityName, opts) => {
  const optionsItem = opts.find((item) => {
    return item.name === cityName;
  });
  return optionsItem.availableOffers;
};

export const getSomePlacesInfo = (placesInfo, fromIndex, toIndex) => {
  return placesInfo.slice(fromIndex, toIndex);
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
