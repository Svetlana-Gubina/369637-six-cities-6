import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {redirect} from "./store/middlewares/redirect";
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import browserHistory from './browser-history';
import rootReducer from './store/root-reducer/root-reducer';
import {createAPI} from './api';
import {requireAuthorization} from './store/action';
import App from "./components/app/app";
import {checkAuth} from './store/api-actions';
import {AuthorizationStatus} from './constants';

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
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.querySelector(`#root`)
);

