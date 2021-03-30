import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as reactRedux from 'react-redux';
import userEvent from '@testing-library/user-event';
import CityItem from './city-item';
import {DEFAULT_CITY} from '../../constants';

const mockStore = configureStore({});
let history;
let store;

describe(`Test ReviewsList`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it(`CitiesList should render correctly`, () => {
    const setActiveCityItem = jest.fn();
    const cityName = `Amsterdam`;
    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <CityItem cityName={cityName} activeCityItem={DEFAULT_CITY} setActiveCityItem={setActiveCityItem} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole(`link`));
    expect(setActiveCityItem).toHaveBeenCalledWith(cityName);
  });
});
