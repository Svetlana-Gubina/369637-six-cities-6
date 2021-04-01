import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import * as reactRedux from 'react-redux';
import ReviewForm from './review-form';

const mockStore = configureStore({});
let history;
let store;

describe(`Test ReviewForm`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it(`ReviewForm should render correctly`, () => {
    const id = 1;
    const isChangedComments = false;
    const setIsChangedComments = jest.fn;

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <ReviewForm id={id} isChangedComments={isChangedComments} setIsChangedComments={setIsChangedComments} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    expect(screen.getByText(/Your review/i)).toBeInTheDocument();

    userEvent.type(screen.getByRole(`textbox`), `Hello, World!`);
    expect(screen.getByRole(`textbox`)).toHaveValue(`Hello, World!`);

    userEvent.click(screen.getByTestId(`radio5Label`));
    expect(screen.getByTestId(`radio5`)).toBeChecked();
    userEvent.click(screen.getByTestId(`radio3Label`));
    expect(screen.getByTestId(`radio3`)).toBeChecked();
    expect(screen.getByTestId(`radio5`)).not.toBeChecked();
  });
});
