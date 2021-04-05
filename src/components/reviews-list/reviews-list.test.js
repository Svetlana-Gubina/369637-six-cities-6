import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as reactRedux from 'react-redux';
import ReviewsList from './reviews-list';

const comments = [{
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    avatarUrl: `img/1.png`,
    name: `Max`
  }
},
];
const mockStore = configureStore({});
let history;
let store;

describe(`Test ReviewsList`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });
  it(`ReviewsList should render correctly in case of fetch error`, () => {
    const hasCommentsError = true;
    const isCommentsLoading = false;

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <ReviewsList comments={comments} hasCommentsError={hasCommentsError} isCommentsLoading={isCommentsLoading} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Error occured fetching data/i)).toBeInTheDocument();
  });

  it(`ReviewsList should render correctly for successful data fetching`, () => {
    const hasCommentsError = false;
    const isCommentsLoading = false;

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <ReviewsList comments={comments} hasCommentsError={hasCommentsError} isCommentsLoading={isCommentsLoading} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByRole(`list`)).toBeInTheDocument();
  });

});
