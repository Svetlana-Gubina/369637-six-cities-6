import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import PlacesSortingForm from '../places-sorting-form/places-sorting-form';
import {sortTypeNameType, sortTypesType, cityNameType, lengthType, optionsType, cityType, placesInfoType, authorizedType} from '../../prop-types';

const WelcomeScreen = (props) => {
  const {activeSortType, activeCityItem, availableOffers, SortType, options, city, placesInfo, authorized} = props;

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
                  {authorized ?
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
            <CitiesList options={options} activeCityItem={activeCityItem} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${availableOffers.length} places to stay in ${activeCityItem}`}</b>
              <PlacesSortingForm sortTypes={SortType} activeSortTypeName={activeSortType} />
              <div className="cities__places-list places__list tabs__content">
                <PlacesList placesInfo={availableOffers} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} points={placesInfo} />
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
  availableOffers: state.availableOffers,
  activeSortType: state.activeSortType
});


WelcomeScreen.propTypes = {
  options: optionsType,
  city: cityType,
  placesInfo: placesInfoType,
  authorized: authorizedType,
  length: lengthType,
  availableOffers: placesInfoType,
  activeCityItem: cityNameType,
  SortType: sortTypesType,
  activeSortType: sortTypeNameType,
};

export {WelcomeScreen};
export default connect(mapStateToProps, null)(WelcomeScreen);

