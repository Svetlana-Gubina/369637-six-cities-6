import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

const authorized = true;

const PlaceType = {
  APARTMENT: `Apartment`,
  PRIVATE_ROOM: `Private room`
};

const placesInfo = [
  {imgSrc: `apartment-01`,
    placeCardPriceValue: 120,
    placeCardName: `Beautiful &amp; luxurious apartment at great location`,
    placeCardType: PlaceType.APARTMENT
  },
  {
    placeCardPriceValue: 80,
    placeCardType: PlaceType.PRIVATE_ROOM
  },
  {imgSrc: `apartment-02`,
    placeCardPriceValue: 132,
    placeCardName: `Canal View Prinsengracht`,
    placeCardType: PlaceType.APARTMENT
  },
  {imgSrc: `apartment-03`,
    placeCardPriceValue: 180,
    placeCardName: `Nice, cozy, warm big bed apartment`,
    placeCardType: PlaceType.APARTMENT
  },
  {
    placeCardPriceValue: 80,
    placeCardType: PlaceType.PRIVATE_ROOM
  },
];

ReactDOM.render(
    <App
      placesInfo={placesInfo}
      authorized={authorized}
    />,
    document.querySelector(`#root`)
);
