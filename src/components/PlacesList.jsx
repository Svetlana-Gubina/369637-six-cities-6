import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import PropTypes from 'prop-types';
import PlaceCard from './PlaceCard';

const PlacesList = (props) => {
  const {placesInfo} = props;
  const [, setActiveElement] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {placesInfo.map((placeInfo) => <PlaceCard
        key={uuidv4()}
        id={placeInfo.id}
        imgSrc={placeInfo.imgSrc}
        placeCardPriceValue={placeInfo.placeCardPriceValue}
        placeCardName={placeInfo.placeCardName}
        placeCardType={placeInfo.placeCardType}
        setActiveElement={setActiveElement}
      />)}
    </div>
  );
};

PlacesList.propTypes = {
  placesInfo: PropTypes.arrayOf(PropTypes.shape({
    imgSrc: PropTypes.string,
    placeCardPriceValue: PropTypes.number,
    placeCardName: PropTypes.string,
    placeCardType: PropTypes.string
  })),
};

export default PlacesList;
