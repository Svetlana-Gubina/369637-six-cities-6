import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Favorites from '../favorites/favorites';
import PageNotFound from '../page-not-found/page-not-found';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import {AppRoute} from '../../constants';
import {locationPropType, citiesPropType, sortTypesPropType} from '../../prop-types';

const App = (props) => {
  const {typesOfSort, cities, city} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <WelcomeScreen cities={cities} typesOfSort={typesOfSort} city={city} />;
      </Route>
      <Route exact path={AppRoute.FAVORITES} component={Favorites} />
      <Route exact path={AppRoute.OFFER} component={Room} />
      <Route exact path={AppRoute.LOGIN} component={SignIn} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  cities: citiesPropType,
  city: locationPropType,
  typesOfSort: sortTypesPropType,
};

export default App;
