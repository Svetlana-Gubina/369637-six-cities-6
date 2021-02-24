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
  },
  {
    id: 2,
    imgSrc: `apartment-02`,
    placeCardPriceValue: 132,
    placeCardName: `Canal View Prinsengracht`,
    placeCardType: PlaceType.APARTMENT,
    lat: 52.369553943508,
    lng: 4.85309666406198,
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
