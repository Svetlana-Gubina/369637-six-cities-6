import {ActionCreator} from "./action";
import {AuthorizationStatus, AppRoute} from "../constants";

export const getHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadHotels(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      throw new Error(`User is not authorized!`);
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const getHotelInfo = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/:${id}`)
    .then((data) => dispatch(ActionCreator.loadHotelInfo()))
);

export const getComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/:${id}`)
    .then(() => dispatch({/* action */}))
);

export const getHotelNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/:${id}/nearby`)
    .then(() => dispatch({/* action */}))
);

