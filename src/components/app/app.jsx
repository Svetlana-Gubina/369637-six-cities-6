import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import Favorites from '../favorites/favorites';
import PageNotFound from '../page-not-found/page-not-found';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {locationPropType, citiesPropType, sortTypesPropType, reviewItemsPropType} from '../../prop-types';

const App = (props) => {
  const {typesOfSort, cities, reviewItems, city} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <WelcomeScreen cities={cities} typesOfSort={typesOfSort} city={city} />;
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
      <Route exact path="/offer/:id?">
        <Room reviewItems={reviewItems} />
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
  cities: citiesPropType,
  reviewItems: reviewItemsPropType,
  city: locationPropType,
  typesOfSort: sortTypesPropType,
};

export default App;
