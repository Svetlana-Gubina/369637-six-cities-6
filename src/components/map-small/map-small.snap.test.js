import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';
import MapSmall from './map-small';

const data = [
  {
    id: 1,
    previewImage: `img/1.png`,
    price: 120,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    }
  },
];

const pointsData = [
  {
    location: {
      latitude: 52.370225,
      longitude: 4.895177,
      zoom: 10
    },
    id: 2
  },
  {
    location: {
      latitude: 52.370210,
      longitude: 4.895169,
      zoom: 10
    },
    id: 3
  },
  {
    location: {
      latitude: 52.370233,
      longitude: 4.895133,
      zoom: 10
    },
    id: 4
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

test(`Should MapSmall render correctly`, () => {
  const history = createMemoryHistory();
  const mockStore = configureStore();
  const store = mockStore({});
  const points = pointsData;


  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <MapSmall points={points} hotel={data} />
        </Router>
      </redux.Provider>
  );
  expect(container).toMatchSnapshot();
});
