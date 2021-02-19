import React from "react";
import WelcomeScreen from "./welcomeScreen";
import Favorites from './favorites';
import Page404 from './page404';
import Room from './room';
import SignIn from './signIn';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {cityType, placesInfoType, authorizedType, reviewItemsType} from '../propTypes';

const App = (props) => {
  const {reviewItems, city, placesInfo, authorized} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <WelcomeScreen city={city} placesInfo={placesInfo} authorized={authorized}/>;
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
        <Page404 />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  reviewItems: reviewItemsType,
  city: cityType,
  placesInfo: placesInfoType,
  authorized: authorizedType,
};

export default App;
