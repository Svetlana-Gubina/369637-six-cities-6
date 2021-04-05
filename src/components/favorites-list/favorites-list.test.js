import React from 'react';
import * as redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import {AuthorizationStatus} from '../../constants';
import FavoritesList from './favorites-list';

const data = [
  {
    id: 1,
    city: {
      name: `Amsterdam`
    },
    previewImage: `img/1.png`,
    price: 120,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`,
    isFavorite: true
  },
];

const mockStore = configureStore({});
let history;
let store;

describe(`Test FavoritesList`, () => {
  const useSelectorMock = jest.spyOn(redux, `useSelector`);
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
    useSelectorMock.mockClear();
  });

  useSelectorMock.mockReturnValue({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  it(`FavoritesList should render correctly`, () => {

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <FavoritesList placesInfo={data} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Beautiful & luxurious studio at great location/i)).toBeInTheDocument();
  });
});
