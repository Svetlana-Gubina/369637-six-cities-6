import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {offers} from './mocks/offers';

const authorized = true;

const city = {
  zoom: 12,
  lat: 52.38333,
  lng: 4.9,
};

const reviews = [
  {
    userAvatar: `avatar-max`,
    userName: `Max`,
    userRate: `80%`,
    reviewText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    reviewTime: `2019-04-24`,
  },
];

ReactDOM.render(
    <App
      reviewItems={reviews}
      city={city}
      placesInfo={offers}
      authorized={authorized}
    />,
    document.querySelector(`#root`)
);
