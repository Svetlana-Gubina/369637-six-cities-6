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

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * arr.length);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

export const options = [
  {
    name: `Paris`,
    availableOffers: shuffle(offers),
  },
  {
    name: `Cologne`,
    availableOffers: shuffle(offers),
  },
  {
    name: `Brussels`,
    availableOffers: shuffle(offers),
  },
  {
    name: `Amsterdam`,
    availableOffers: shuffle(offers),
  },
  {
    name: `Hamburg`,
    availableOffers: shuffle(offers),
  },
  {
    name: `Dusseldorf`,
    availableOffers: shuffle(offers),
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
