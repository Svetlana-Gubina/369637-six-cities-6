import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import {AuthorizationStatus} from '../../constants';
import Room from './room';

const mockStore = configureStore({});
let history;
let store;


describe(`Test Favorites`, () => {
  const useSelectorMock = jest.spyOn(reactRedux, `useSelector`);
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
    useSelectorMock.mockClear();
  });


  it(`should render LoadingScreen before data is fetched`, () => {
    useSelectorMock.mockReturnValue({
      authorizationStatus: AuthorizationStatus.NO_AUTH
    });
    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <Room />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

});
