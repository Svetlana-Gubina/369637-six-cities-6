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
    placeCardType: PlaceType.APARTMENT
  },
  {
    id: 2,
    imgSrc: `apartment-02`,
    placeCardPriceValue: 132,
    placeCardName: `Canal View Prinsengracht`,
    placeCardType: PlaceType.APARTMENT
  },
  {
    id: 3,
    imgSrc: `apartment-03`,
    smallImgSrc: `apartment-small-03`,
    placeCardPriceValue: 180,
    placeCardName: `Nice, cozy, warm big bed apartment`,
    placeCardType: PlaceType.APARTMENT
  },
  {
    id: 4,
    imgSrc: `apartment-01`,
    smallImgSrc: `apartment-small-04`,
    placeCardPriceValue: 180,
    placeCardName: `White castle`,
    placeCardType: PlaceType.APARTMENT
  },
  {
    id: 5,
    imgSrc: `room`,
    smallImgSrc: `room-small`,
    placeCardPriceValue: 80,
    placeCardName: `Wood and stone place`,
    placeCardType: PlaceType.PRIVATE_ROOM
  },
];
