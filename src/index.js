import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {offers} from './mocks/offers';

const authorized = true;

ReactDOM.render(
    <App
      placesInfo={offers}
      authorized={authorized}
    />,
    document.querySelector(`#root`)
);
