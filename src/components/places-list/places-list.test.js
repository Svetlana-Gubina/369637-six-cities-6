import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as reactRedux from 'react-redux';
import PlacesList from './places-list';

const data = [
  {
    id: 1,
    previewImage: `img/1.png`,
    price: 120,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
];

const mockStore = configureStore({});
let history;
let store;

describe(`Test PlacesList`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it(`PlacesList should render correctly`, () => {
    const setActivePlaceCard = jest.fn();
    const activePlaceCardId = 1;

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <PlacesList placesInfo={data} activePlaceCardId={activePlaceCardId} setActivePlaceCard={setActivePlaceCard} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Beautiful & luxurious studio at great location/i)).toBeInTheDocument();
  });

});
