import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import {api} from '../../store';
import {setFavorites} from '../../store/action';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import LoadingScreen from '../loading-screen/loading-screen';
import UserNav from '../user-nav/user-nav';
import PageNotFound from '../page-not-found/page-not-found';
import HotelsModel from '../../models/hotels-model';
import {redirectToRoute} from '../../store/action';
import {AuthorizationStatus, AppRoute} from '../../constants';

const Favorites = () => {
  const {authorizationStatus} = useSelector((state) => state.AUTH);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {hotelsList} = useSelector((state) => state.DATA);
  const {favorites} = useSelector((state) => state.FAVORITES);

  let mount = true;

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
      mount = false;
    }
  }, [authorizationStatus]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (mount) {
      api.get(`/favorite`)
      .then((res) => {
        dispatch(setFavorites(res.data));
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
    }
  }, [hotelsList]);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <PageNotFound />
    );
  }

  return (
    <>
      {<div className="page">
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
                    <UserNav />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            {favorites.length === 0 ? <FavoritesEmpty /> :
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList placesInfo={HotelsModel.parseHotelsData(favorites)} />
              </section>}
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
