import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as reactRedux from 'react-redux';
import MainEmptyScreen from './main-empty';
import {AVAILABLE_CITIES, DEFAULT_CITY} from '../../constants';

const mockStore = configureStore({});
let history;
let store;

describe(`Test MainEmptyScreen`, () => {
  const useSelectorMock = jest.spyOn(reactRedux, `useSelector`);
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
    useSelectorMock.mockClear();
  });

  it(`MainEmptyScreen should render correctly`, () => {
    useSelectorMock.mockReturnValue({activeCityItem: DEFAULT_CITY});
    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <MainEmptyScreen cities={AVAILABLE_CITIES} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  });
});
