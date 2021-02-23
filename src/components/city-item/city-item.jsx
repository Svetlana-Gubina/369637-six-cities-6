import React from 'react';
import {Link} from "react-router-dom";
import {cityNameType, setActiveElementType} from '../../prop-types';

const CityItem = (props) => {
  const {cityName, activeCityItem, setActiveCityItem} = props;

  return <li className="locations__item">
    <Link className={`locations__item-link tabs__item ${cityName === activeCityItem ? `tabs__item--active` : ``}`}
      to="/"
      onClick={() => setActiveCityItem(cityName)}>
      <span>{cityName}</span>
    </Link>
  </li>;
};

CityItem.propTypes = {
  cityName: cityNameType,
  activeCityItem: cityNameType,
  setActiveCityItem: setActiveElementType
};

export default CityItem;
