import {configureStore} from '@reduxjs/toolkit';
import {redirect} from "./store/middlewares/redirect";
import rootReducer from './store/root-reducer/root-reducer';
import {createAPI} from './api';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './constants';

export const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});
