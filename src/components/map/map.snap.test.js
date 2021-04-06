import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';
import {SortType, DEFAULT_CITY, AuthorizationStatus} from '../../constants';
import Map from './map';

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

jest.mock(`../../store/api-actions`, () => {
  return {
    getHotelsList: jest.fn().mockImplementation(() => {
      return {
        type: `test`
      };
    })
  };
});

test(`Should Map render correctly`, () => {
  const state = {
    AUTH: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    DATA: {
      hotelsList: notParsedData,
      isDataLoaded: true,
    },
    CITY: {
      activeCityItem: DEFAULT_CITY,
    },
    SORT_TYPE: {
      activeSortType: SortType.POPULAR
    },
    LOGIN: {
      userLogin: ``
    }
  };
  const history = createMemoryHistory();
  const mockStore = configureStore();
  const store = mockStore(state);
  const activePlaceCardId = 2;
  const points = [];

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Map cityName={DEFAULT_CITY} activePlaceCardId={activePlaceCardId} points={points} />
        </Router>
      </redux.Provider>
  );
  expect(container).toMatchSnapshot();
});
