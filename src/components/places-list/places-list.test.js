import React from 'react';
import * as redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {AuthorizationStatus} from '../../constants';
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
  const useSelectorMock = jest.spyOn(redux, `useSelector`);
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
    useSelectorMock.mockClear();
  });

  useSelectorMock.mockReturnValue({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });

  it(`PlacesList should render correctly`, () => {
    const setActivePlaceCard = jest.fn();
    const activePlaceCardId = 1;

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PlacesList placesInfo={data} activePlaceCardId={activePlaceCardId} setActivePlaceCard={setActivePlaceCard} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Beautiful & luxurious studio at great location/i)).toBeInTheDocument();
  });

});
