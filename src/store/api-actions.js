import {setLoginError, setLogin, setServerError, loadHotels, requireAuthorization, redirectToRoute} from "./action";
import {AuthorizationStatus, AppRoute} from "../constants";

export const getHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(loadHotels(data));
      dispatch(setServerError(``));
    })
    .catch(() => {
      dispatch(setServerError(`Error`));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((res) => {
      dispatch(setLogin(JSON.stringify(res.data.name)));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setServerError(``));
    })
    .catch((error) => {
      if (error.response && error.response.status >= 500) {
        dispatch(setServerError(`Error`));
      }
      throw new Error(`User is not authorized!`);
    })
);

export const login = ({login: email, password: password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setLoginError(``));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        dispatch(setLoginError(`Error`));
      }
    })
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);
