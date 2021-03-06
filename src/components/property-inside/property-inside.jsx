import React from 'react';
import {v4 as uuidv4} from "uuid";
import {goodsPropType} from '../../prop-types';

const PropertyInside = (props) => {
  const {goods} = props;

  return (
    <ul className="property__inside-list">
      {goods.map((good) =>
        <li
          key={uuidv4()}
          className="property__inside-item">
          {good}
        </li>)}
    </ul>
  );
};

PropertyInside.propTypes = {
  goods: goodsPropType
};

export default PropertyInside;
