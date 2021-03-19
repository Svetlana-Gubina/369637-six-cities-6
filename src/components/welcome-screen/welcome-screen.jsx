import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import LoadingScreen from '../loading-screen/loading-screen';
import UserNav from '../user-nav/user-nav';
import {getHotelsList} from '../../store/api-actions';
import PlacesSortingForm from '../places-sorting-form/places-sorting-form';
import {getOffersForCity, sortOffersBy} from '../../utils';
import {getParsedHotelsData, getSortType, getAuthorizationStatus, getIsDataLoaded, getActiveCityItem} from '../../selectors';
import {onLoadPropType, isDataLoadedPropType, cityNamePropType, locationPropType, citiesPropType, sortTypeNamePropType, sortTypesPropType, lengthPropType, placesInfoPropType, authorizedPropType} from '../../prop-types';

const WelcomeScreen = (props) => {
  const {typesOfSort, placesInfo, onLoad, isDataLoaded, activeSortType, cities, activeCityItem, isAuthorized} = props;
  const [activePlaceCardId, setActivePlaceCard] = useState(0);
  const activeCityOffers = getOffersForCity(activeCityItem, placesInfo);
  const offersToRender = sortOffersBy(activeSortType, activeCityOffers);

  useEffect(() => {
    if (!isDataLoaded) {
      onLoad();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
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
                  <UserNav isAuthorized={isAuthorized} />
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
                <Map activePlaceCardId={activePlaceCardId} points={null} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeCityItem: getActiveCityItem(state),
  activeSortType: getSortType(state),
  isAuthorized: getAuthorizationStatus(state),
  isDataLoaded: getIsDataLoaded(state),
  placesInfo: getParsedHotelsData(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad() {
    dispatch(getHotelsList());
  }
});

WelcomeScreen.propTypes = {
  cities: citiesPropType,
  city: locationPropType,
  placesInfo: placesInfoPropType,
  isAuthorized: authorizedPropType,
  length: lengthPropType,
  activeCityOffers: placesInfoPropType,
  activeCityItem: cityNamePropType,
  typesOfSort: sortTypesPropType,
  activeSortType: sortTypeNamePropType,
  onLoad: onLoadPropType,
  isDataLoaded: isDataLoadedPropType,
  sortOffersBy: onLoadPropType
};

export {WelcomeScreen};
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
