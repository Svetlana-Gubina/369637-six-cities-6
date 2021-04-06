import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import LoadingScreen from '../loading-screen/loading-screen';
import MainEmptyScreen from '../main-empty/main-empty';
import UserNav from '../user-nav/user-nav';
import PlacesSortingForm from '../places-sorting-form/places-sorting-form';
import {getHotelsList} from '../../store/api-actions';
import {getOffersForCity, sortOffersBy} from '../../utils';
import {getParsedHotelsData} from '../../selectors';
import {onLoadPropType, locationPropType, citiesPropType, sortTypesPropType, lengthPropType, placesInfoPropType} from '../../prop-types';

const WelcomeScreen = (props) => {
  const {typesOfSort, cities} = props;
  const placesInfo = useSelector(getParsedHotelsData);
  const {isDataLoaded} = useSelector((state) => state.DATA);
  const {activeCityItem} = useSelector((state) => state.CITY);
  const {activeSortType} = useSelector((state) => state.SORT_TYPE);
  const [activePlaceCardId, setActivePlaceCard] = useState(0);
  const activeCityOffers = getOffersForCity(activeCityItem, placesInfo);
  const offersToRender = sortOffersBy(activeSortType, activeCityOffers);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(getHotelsList());
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  if (!isDataLoaded && placesInfo.length === 0) {
    return (
      <MainEmptyScreen cities={cities} />
    );
  }


  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <UserNav />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities} activeCityItem={activeCityItem} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${activeCityOffers.length} places to stay in ${activeCityItem}`}</b>
              <PlacesSortingForm typesOfSort={typesOfSort} activeSortTypeName={activeSortType} />
              <div className="cities__places-list places__list tabs__content">
                <PlacesList activePlaceCardId={activePlaceCardId} setActivePlaceCard={setActivePlaceCard} placesInfo={offersToRender} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map cityName={activeCityItem} activePlaceCardId={activePlaceCardId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

WelcomeScreen.propTypes = {
  cities: citiesPropType,
  city: locationPropType,
  length: lengthPropType,
  activeCityOffers: placesInfoPropType,
  typesOfSort: sortTypesPropType,
  sortOffersBy: onLoadPropType
};

export default WelcomeScreen;
