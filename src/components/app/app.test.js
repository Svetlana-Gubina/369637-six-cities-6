import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import LoadingScreen from '../loading-screen/loading-screen';
import MainEmptyScreen from '../main-empty/main-empty';
import {AppRoute, AVAILABLE_CITIES, DEFAULT_CITY, SortType} from '../../constants';

const notParsedData = [
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Paris`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heaing`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
];

const mockStore = configureStore({});
describe(`Test routing`, () => {
  const useSelectorMock = jest.spyOn(redux, `useSelector`);
  const useDispatchMock = jest.spyOn(redux, `useDispatch`);
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

  it(`Render 'WelcomeScreen' when user navigate to '/' url, and data was fetched`, () => {
    useSelectorMock.mockReturnValue({
      hotelsList: notParsedData,
      isDataLoaded: true,
      activeCityItem: DEFAULT_CITY,
      activeSortType: SortType.POPULAR,
    });

    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);

    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(dispatch).toHaveReturned();
    expect(screen.getByText(/Beautiful & luxurious studio at great location/i)).toBeInTheDocument();
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
