import React from 'react';
import {useDispatch} from 'react-redux';
import {cityNamePropType, citiesPropType} from '../../prop-types';
import CityItem from '../city-item/city-item';
import {v4 as uuidv4} from "uuid";
import {choseCity} from '../../store/action';

const CitiesList = (props) => {
  const {cities, activeCityItem} = props;

  const dispatch = useDispatch();

  const setActiveCityItem = (cityName) => {
    dispatch(choseCity(cityName));
  };

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

CitiesList.propTypes = {
  cities: citiesPropType,
  activeCityItem: cityNamePropType,
};

export default React.memo(CitiesList);
