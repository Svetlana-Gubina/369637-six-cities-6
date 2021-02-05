import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import PropTypes from 'prop-types';

const App = (props) => {
  const {placesInfo} = props;

  return <WelcomeScreen placesInfo={placesInfo}/>;
};

App.propTypes = {
  placesInfo: PropTypes.arrayOf(PropTypes.shape({
    imgSrc: PropTypes.string,
    placeCardPriceValue: PropTypes.number,
    placeCardName: PropTypes.string,
    placeCardType: PropTypes.string
  })),
};

export default App;
