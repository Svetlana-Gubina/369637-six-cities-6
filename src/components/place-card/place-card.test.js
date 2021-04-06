import React from 'react';
import * as redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import {AuthorizationStatus} from '../../constants';
import PlaceCard from './place-card';

const mockStore = configureStore({});
let history;
let store;

describe(`Test PlaceCard`, () => {
  const useSelectorMock = jest.spyOn(redux, `useSelector`);
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
    useSelectorMock.mockClear();
  });

  useSelectorMock.mockReturnValue({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });

  it(`PlaceCard should render correctly`, () => {
    const id = 1;
    const imgSrc = `img/1.png`;
    const placeCardPriceValue = 120;
    const placeCardName = `Beautiful & luxurious studio at great location`;
    const placeCardType = `apartment`;
    const isFavorite = false;
    const setActivePlaceCard = jest.fn;
    const className = `cities`;
    const specialCardClass = className + `__place-card`;

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <PlaceCard id={id} imgSrc={imgSrc} placeCardPriceValue={placeCardPriceValue} placeCardName={placeCardName} placeCardType={placeCardType} isFavorite={isFavorite} setActivePlaceCard={setActivePlaceCard} className={className} specialCardClass={specialCardClass} additionalClass={``} />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Beautiful & luxurious studio at great location/i)).toBeInTheDocument();
  });
});
