import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import LoadingScreen from '../loading-screen/loading-screen';
import MainEmptyScreen from '../main-empty/main-empty';
import {AppRoute, AVAILABLE_CITIES} from '../../constants';

const mockStore = configureStore({});
describe(`Test routing`, () => {
  const useSelectorMock = jest.spyOn(redux, `useSelector`);
  it(`Render 'LoadingScreen' when user navigate to '/' url, before data is loaded`, () => {
    useSelectorMock.mockReturnValue({
      isDataLoaded: false,
    });

    const history = createMemoryHistory();
    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <LoadingScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it(`Render 'MainEmptyScreen' when user navigate to '/' url, if no data fetched`, () => {
    useSelectorMock.mockReturnValue({
      hotelsList: [],
      isDataLoaded: false,
    });

    const history = createMemoryHistory();
    const cities = AVAILABLE_CITIES;
    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <MainEmptyScreen cities={cities} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });


  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.LOGIN);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'PageNotFound' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/non-existent-route`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Back home/)).toBeInTheDocument();
  });

});
