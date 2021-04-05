import React from 'react';
import * as redux from 'react-redux';
import MockAdapter from 'axios-mock-adapter';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import {createAPI} from '../../api';
import {AppRoute} from '../../constants';
import HotelsModel from '../../models/hotels-model';
import Favorites from './favorites';

const api = createAPI(() => {});

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

const data = HotelsModel.parseHotelsData(notParsedData);

const mockStore = configureStore({});
let history;
let store;

describe(`Test Favorites`, () => {
  const useSelectorMock = jest.spyOn(redux, `useSelector`);
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
    useSelectorMock.mockClear();
  });

  useSelectorMock.mockReturnValue({
    hotelsList: notParsedData,
  });

  const fetchData = () => {
    const apiMock = new MockAdapter(api);
    apiMock
      .onGet(AppRoute.FAVORITES)
      .reply(200, notParsedData);
    return HotelsModel.parseHotelsData(notParsedData);
  };

  it(`should render Loading before data is fetched`, () => {

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <Favorites />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  test(`data should be correct `, async () => {
    const parsedData = await fetchData();
    expect(parsedData).toEqual(expect.objectContaining(data));
  });
});
