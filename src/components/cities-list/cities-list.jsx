import React from 'react';
import {connect} from 'react-redux';
import {cityNamePropType, citiesPropType, setActiveElementPropType} from '../../prop-types';
import CityItem from '../city-item/city-item';
import {v4 as uuidv4} from "uuid";
import {choseCity} from '../../store/action';

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
    dispatch(choseCity(cityName));
  },
});

CitiesList.propTypes = {
  cities: citiesPropType,
  activeCityItem: cityNamePropType,
  setActiveCityItem: setActiveElementPropType
};

export {CitiesList};
export default connect(null, mapDispatchToProps)(CitiesList);
