import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import UserNav from './user-nav';
import {AuthorizationStatus} from '../../constants';

const mockStore = configureStore({});
let history;
let store;

describe(`Test UserNav`, () => {
  const useSelectorMock = jest.spyOn(reactRedux, `useSelector`);

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
    useSelectorMock.mockClear();
  });

  it(`UserNav should render correctly for unauthorized user`, () => {
    const login = `johnDoe@gmail.com`;

    useSelectorMock.mockReturnValue({
      authorizationStatus: AuthorizationStatus.AUTH,
      userLogin: login
    });
    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <UserNav />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/johnDoe@gmail.com/i)).toBeInTheDocument();
  });

  it(`UserNav should render correctly for authorized user`, () => {
    useSelectorMock.mockReturnValue({authorizationStatus: AuthorizationStatus.NO_AUTH});
    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <UserNav />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
