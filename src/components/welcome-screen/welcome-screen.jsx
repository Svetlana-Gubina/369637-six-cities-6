import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import LoadingScreen from '../loading-screen/loading-screen';
import {getHotelsList} from '../../store/api-actions';
import PlacesSortingForm from '../places-sorting-form/places-sorting-form';
import {AuthorizationStatus, getOffersForCity} from '../../constants';
import {isDataLoadedType, onLoadType, cityNameType, locationType, citiesType, sortTypeNameType, sortTypesType, lengthType, placesInfoType, authorizedType} from '../../prop-types';

const WelcomeScreen = (props) => {
  const {SortType, placesInfo, onLoad, isDataLoaded, activeSortType, cities, activeCityItem, isAuthorized} = props;
  const [activePlaceCardId, setActivePlaceCard] = useState(0);
  const activeCityOffers = getOffersForCity(activeCityItem, placesInfo);

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
                  {isAuthorized === AuthorizationStatus.AUTH ?
                    <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                      </span>
                    </Link> :
                    <Link className="header__nav-link header__nav-link--profile" to="/login">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  }
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
              <PlacesSortingForm sortTypes={SortType} activeSortTypeName={activeSortType} />
              <div className="cities__places-list places__list tabs__content">
                <PlacesList activePlaceCardId={activePlaceCardId} setActivePlaceCard={setActivePlaceCard} placesInfo={activeCityOffers} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map activePlaceCardId={activePlaceCardId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeCityItem: state.activeCityItem,
  activeSortType: state.activeSortType,
  isAuthorized: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
  placesInfo: state.hotelsList,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad() {
    dispatch(getHotelsList());
  }
});

WelcomeScreen.propTypes = {
  cities: citiesType,
  city: locationType,
  placesInfo: placesInfoType,
  isAuthorized: authorizedType,
  length: lengthType,
  activeCityOffers: placesInfoType,
  activeCityItem: cityNameType,
  SortType: sortTypesType,
  activeSortType: sortTypeNameType,
  onLoad: onLoadType,
  isDataLoaded: isDataLoadedType,
};

export {WelcomeScreen};
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
