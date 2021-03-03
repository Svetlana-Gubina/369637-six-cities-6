import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Favorites from '../favorites/favorites';
import PageNotFound from '../page-not-found/page-not-found';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import {AppRoute} from '../../constants';
import {locationPropType, citiesPropType, sortTypesPropType, reviewItemsPropType} from '../../prop-types';

const App = (props) => {
  const {typesOfSort, cities, reviewItems, city} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <WelcomeScreen cities={cities} typesOfSort={typesOfSort} city={city} />;
      </Route>
      <Route exact path={AppRoute.FAVORITES}>
        <Favorites />
      </Route>
      <Route exact path={AppRoute.OFFER}>
        <Room />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <SignIn />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  cities: citiesPropType,
  reviewItems: reviewItemsPropType,
  city: locationPropType,
  typesOfSort: sortTypesPropType,
};

export default App;
