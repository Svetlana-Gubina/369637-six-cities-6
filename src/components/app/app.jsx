import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Favorites from '../favorites/favorites';
import PageNotFound from '../page-not-found/page-not-found';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {optionsType, cityType, placesInfoType, authorizedType, reviewItemsType} from '../../prop-types';

const App = (props) => {
  const {options, reviewItems, city, placesInfo, authorized} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <WelcomeScreen options={options} city={city} placesInfo={placesInfo} authorized={authorized}/>;
      </Route>
      <Route exact path="/favorites">
        <Favorites placesInfo={placesInfo} />
      </Route>
      <Route exact path="/offer/:id?">
        <Room city={city} placesInfo={placesInfo} reviewItems={reviewItems} authorized={authorized} />
      </Route>
      <Route exact path="/login">
        <SignIn />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  options: optionsType,
  reviewItems: reviewItemsType,
  city: cityType,
  placesInfo: placesInfoType,
  authorized: authorizedType,
};

export default App;
