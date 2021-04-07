import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import userEvent from '@testing-library/user-event';
import {AuthorizationStatus} from '../../constants';
import SignIn from './sign-in';

const mockStore = configureStore({});
let store;

describe(`Test SignIn`, () => {
  const useDispatchMock = jest.spyOn(reactRedux, `useDispatch`);
  const useSelectorMock = jest.spyOn(reactRedux, `useSelector`);

  beforeEach(() => {
    store = mockStore({});
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    useSelectorMock.mockReturnValue({authorizationStatus: AuthorizationStatus.NO_AUTH});
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);

    history.push(`/login`);
    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <SignIn />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId(`userEmail`), `johnDoe`);
    userEvent.type(screen.getByTestId(`userPassword`), `123456`);

    expect(screen.getByDisplayValue(/johnDoe/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });

});
