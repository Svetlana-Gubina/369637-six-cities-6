import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import userEvent from '@testing-library/user-event';
import SignIn from './sign-in';

const mockStore = configureStore({});
let store;

describe(`Test SignIn`, () => {
  const useDispatchMock = jest.spyOn(reactRedux, `useDispatch`);

  beforeEach(() => {
    store = mockStore({});
    useDispatchMock.mockClear();
  });

  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();

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

    userEvent.click(screen.getByTestId(`formSubmit`));
    expect(dispatch).toHaveBeenCalled();
  });

});
