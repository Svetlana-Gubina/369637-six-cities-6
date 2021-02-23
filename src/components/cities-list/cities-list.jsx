import React from 'react';
import {connect} from 'react-redux';
import {cityNameType, optionsType, setActiveElementType} from '../../prop-types';
import CityItem from '../city-item/city-item';
import {v4 as uuidv4} from "uuid";
import {ActionCreator} from '../../store/action';

const CitiesList = (props) => {
  const {options, activeCityItem, setActiveCityItem} = props;

  return (
    <ul className="locations__list tabs__list">
      {options.map((option) => <CityItem
        key={uuidv4()}
        cityName={option.name}
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
  options: optionsType,
  activeCityItem: cityNameType,
  setActiveCityItem: setActiveElementType
};

export {CitiesList};
export default connect(null, mapDispatchToProps)(CitiesList);
