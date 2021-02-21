import React, {useState} from 'react';
import {optionsType} from '../../prop-types';
import CityItem from '../city-item/city-item';
import {v4 as uuidv4} from "uuid";

const CitiesList = (props) => {
  const {cities} = props;
  const [activeElementId, setActiveElement] = useState(`Paris`);

  return <ul className="locations__list tabs__list">
    <div style={{
      display: `none`
    }}>{activeElementId}</div>
    {cities.map((city) => {
      <CityItem
        key={uuidv4()}
        city={city}
        setActiveElement={setActiveElement} />;
    })}
  </ul>;
};

CitiesList.propTypes = {
  cities: optionsType
};

export default CitiesList;
