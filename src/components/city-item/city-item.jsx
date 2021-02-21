import React from 'react';
import {Link} from "react-router-dom";
import {cityItemType, setActiveElementType} from '../../prop-types';

const CityItem = (props) => {
  const {city, setActiveElement} = props;

  return <li className="locations__item">
    <Link className="locations__item-link tabs__item" href="#" onClick={() => setActiveElement(city.name)}>
      <span>{city.name}</span>
    </Link>
  </li>;
};

CityItem.propTypes = {
  city: cityItemType,
  setActiveElement: setActiveElementType
};

export default CityItem;
