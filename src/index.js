import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {redirect} from "./store/middlewares/redirect";
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer/root-reducer';
import {createAPI} from './api';
import {requireAuthorization} from './store/action';
import App from "./components/app/app";
import {checkAuth} from './store/api-actions';
import {REVIEWS, CITY, AVAILABLE_CITIES, AuthorizationStatus, SortType} from './constants';

export const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});


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
