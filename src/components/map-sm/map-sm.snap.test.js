import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';
import MapSm from './map-sm';


const pointsData = [
  {
    location: {
      latitude: 52.370225,
      longitude: 4.895177,
      zoom: 10
    },
  },
  {
    location: {
      latitude: 52.370210,
      longitude: 4.895169,
      zoom: 10
    },
  },
  {
    location: {
      latitude: 52.370233,
      longitude: 4.895133,
      zoom: 10
    },
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

test(`Should MapSm render correctly`, () => {
  const history = createMemoryHistory();
  const mockStore = configureStore();
  const store = mockStore({});
  const activePlaceCardId = 1;
  const points = pointsData;
  const location = {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  };

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <MapSm location={location} activePlaceCardId={activePlaceCardId} points={points} />
        </Router>
      </redux.Provider>
  );
  expect(container).toMatchSnapshot();
});
