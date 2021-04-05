import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import PlacesSortingForm from './places-sorting-form';
import {SortType} from '../../constants';

const mockStore = configureStore({});
let history;
let store;

describe(`Test PlacesSortingForm`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it(`PlacesSortingForm should render correctly`, () => {
    const activeSortTypeName = `Popular`;
    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <PlacesSortingForm typesOfSort={SortType} activeSortTypeName={activeSortTypeName} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
});
