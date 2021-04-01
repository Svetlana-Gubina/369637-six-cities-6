import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import WelcomeScreen from './welcome-screen';
import {SortType, AVAILABLE_CITIES, DEFAULT_CITY} from '../../constants';

const mockStore = configureStore({});
let history;
let store;

const notParsedData = [
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Paris`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heaing`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
];

describe(`Test WelcomeScreen`, () => {
  const useSelectorMock = jest.spyOn(redux, `useSelector`);
  const useDispatchMock = jest.spyOn(redux, `useDispatch`);

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it(`WelcomeScreen should render correctly`, () => {

    useSelectorMock.mockReturnValue({
      hotelsList: notParsedData,
      isDataLoaded: true,
      activeCityItem: DEFAULT_CITY,
      activeSortType: SortType.POPULAR,
    });

    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <WelcomeScreen typesOfSort={SortType} cities={AVAILABLE_CITIES} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Beautiful & luxurious studio at great location/i)).toBeInTheDocument();
  });

});
