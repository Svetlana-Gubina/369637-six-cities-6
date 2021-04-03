import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import SortTypesList from './sort-types-list';
import {SortType} from '../../constants';

const mockStore = configureStore({});
let history;
let store;

describe(`Test SortTypesList`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it(`SortTypesList should render correctly`, () => {
    const popUpState = true;
    const typesOfSort = SortType;
    const activeSortTypeName = SortType.POPULAR;

    render(
        <Provider store={store}>
          <Router history={history}>
            <SortTypesList popUpState={popUpState} typesOfSort={typesOfSort} activeSortTypeName={activeSortTypeName} />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Price: low to high/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: high to low/i)).toBeInTheDocument();
    expect(screen.getByText(/Top rated first/i)).toBeInTheDocument();
  });
});

