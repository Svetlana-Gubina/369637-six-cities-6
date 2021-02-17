import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import Favorites from './Favorites';
import Page404 from './Page404';
import Room from './Room';
import SignIn from './SignIn';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = (props) => {
  const {placesInfo, authorized} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <WelcomeScreen placesInfo={placesInfo} authorized={authorized}/>;
      </Route>
      <Route exact path="/favorites">
        <Favorites placesInfo={placesInfo} />
      </Route>
      <Route exact path="/offer/:id?">
        <Room authorized={authorized} />
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
  placesInfo: PropTypes.arrayOf(PropTypes.shape({
    imgSrc: PropTypes.string,
    placeCardPriceValue: PropTypes.number,
    placeCardName: PropTypes.string,
    placeCardType: PropTypes.string,
    placeCoords: PropTypes.shape({
      lat: PropTypes.number,
      long: PropTypes.number
    }),
  })),
  authorized: PropTypes.bool,
};

export default App;
