import React from "react";
import {Switch, Route} from 'react-router-dom';
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Favorites from '../favorites/favorites';
import PageNotFound from '../page-not-found/page-not-found';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import {AppRoute, AVAILABLE_CITIES, SortType} from '../../constants';

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <WelcomeScreen cities={AVAILABLE_CITIES} typesOfSort={SortType} />;
      </Route>
      <Route exact path={AppRoute.FAVORITES} component={Favorites} />
      <Route exact path={AppRoute.OFFER} component={Room} />
      <Route exact path={AppRoute.LOGIN} component={SignIn} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default App;
