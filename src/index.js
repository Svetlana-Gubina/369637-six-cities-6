import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {createAPI} from './api';
import {ActionCreator} from './store/action';
import App from "./components/app/app";
import {checkAuth} from './store/api-actions';
import {ZOOM, AVAILABLE_CITIES, AuthorizationStatus, SortType} from './constants';

const city = {
  zoom: ZOOM,
  latitude: 52.38333,
  longitude: 4.9,
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

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        SortType={SortType}
        cities={AVAILABLE_CITIES}
        reviewItems={reviews}
        city={city}
      />
    </Provider>,
    document.querySelector(`#root`)
);
