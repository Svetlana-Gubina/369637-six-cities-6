import React from 'react';
import {connect} from 'react-redux';
import {cityNameType, citiesType, setActiveElementType} from '../../prop-types';
import CityItem from '../city-item/city-item';
import {v4 as uuidv4} from "uuid";
import {ActionCreator} from '../../store/action';

const CitiesList = (props) => {
  const {cities, activeCityItem, setActiveCityItem} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((cityName) => <CityItem
        key={uuidv4()}
        cityName={cityName}
        activeCityItem={activeCityItem}
        setActiveCityItem={setActiveCityItem}
      />)}
    </ul>);
};

const mapDispatchToProps = (dispatch) => ({
  setActiveCityItem(cityName) {
    dispatch(ActionCreator.choseCity(cityName));
  },
});

CitiesList.propTypes = {
  cities: citiesType,
  activeCityItem: cityNameType,
  setActiveCityItem: setActiveElementType
};

export {CitiesList};
export default connect(null, mapDispatchToProps)(CitiesList);
