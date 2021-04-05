import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {hotelsData} from './hotels-data';
import {ActionType} from '../action';
import {AppRoute} from '../../constants';
import {getHotelsList} from '../api-actions';

const api = createAPI(() => {});
describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(hotelsData(undefined, {}))
      .toEqual({
        hotelsList: [],
        isDataLoaded: false
      });
  });

  it(`Reducer with fetched data should update state`, () => {
    const state = {
      hotelsList: [],
      isDataLoaded: false,
    };
    const hotels = [
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Amsterdam`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
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
    const loadHotelsAction = {
      type: ActionType.LOAD_HOTELS,
      payload: hotels
    };

    expect(hotelsData(state, loadHotelsAction))
      .toEqual({
        hotelsList: hotels,
        isDataLoaded: true
      });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsListLoader = getHotelsList();

    apiMock
      .onGet(AppRoute.HOTELS)
      .reply(200, [{fake: true}]);

    return hotelsListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_HOTELS,
          payload: [{fake: true}],
        });
      });
  });
});
