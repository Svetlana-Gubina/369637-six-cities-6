import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as reactRedux from 'react-redux';
import CitiesList from './cities-list';
import {AVAILABLE_CITIES, DEFAULT_CITY} from '../../constants';

const mockStore = configureStore({});
let history;
let store;

describe(`Test CitiesList`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it(`CitiesList should render correctly`, () => {

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <CitiesList cities={AVAILABLE_CITIES} activeCityItem={DEFAULT_CITY} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  });
});
