import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {api} from '../../index';
import FavoritesList from '../favorites-list/favorites-list';
import LoadingScreen from '../loading-screen/loading-screen';
import PageNotFound from '../page-not-found/page-not-found';
import HotelsModel from '../../models/hotels-model';
import {getOffersForCity} from '../../utils';
import {AVAILABLE_CITIES} from '../../constants';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get(`/favorite`)
    .then((res) => {
      setFavorites(HotelsModel.parseHotelsData(res.data));
      setIsLoading(false);
    })
    .catch(() => {
      setHasError(true);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      {hasError ? <PageNotFound /> : <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="/">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{AVAILABLE_CITIES[3]}</span>
                      </a>
                    </div>
                  </div>
                  <FavoritesList placesInfo={getOffersForCity(AVAILABLE_CITIES[3], favorites)} />
                </li>

                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{AVAILABLE_CITIES[2]}</span>
                      </a>
                    </div>
                  </div>
                  <FavoritesList placesInfo={getOffersForCity(AVAILABLE_CITIES[2], favorites)} />
                </li>
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>
      }
    </>
  );
};


export default Favorites;

