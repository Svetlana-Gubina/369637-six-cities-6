import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import {applyMiddleware} from 'redux';
import {createAPI} from './api';
import App from "./components/app/app";
import {offers, options, SortType} from './mocks/offers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {authorized, ZOOM} from './constants';

const city = {
  zoom: ZOOM,
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

const store = createStore(
    reducer,
    composeWithDevTools()
);

const onUnauthorized = () => {
  console.log(`User unauthorized!`);
};

const api = createAPI(onUnauthorized);

ReactDOM.render(
    <Provider store={store}>
      <App
        SortType={SortType}
        options={options}
        reviewItems={reviews}
        city={city}
        placesInfo={offers}
        authorized={authorized}
      />
    </Provider>,
    document.querySelector(`#root`)
);
