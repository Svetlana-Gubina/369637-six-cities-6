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
import {REVIEWS, CITY, AVAILABLE_CITIES, AuthorizationStatus, SortType} from './constants';

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
        typesOfSort={SortType}
        cities={AVAILABLE_CITIES}
        reviewItems={REVIEWS}
        city={CITY}
      />
    </Provider>,
    document.querySelector(`#root`)
);
