import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import PlaceCard from '../place-card/place-card';
import {placesInfoPropType} from '../../prop-types';

const NearPlacesList = ({placesInfo}) => {
  const className = `near-places`;
  const specialCardClass = className + `__card`;
  const [activeElementId, setActiveElement] = useState(0);

  return <div className={className + `__list places__list`}>
    <div style={{
      display: `none`
    }}>{activeElementId}</div>
    {placesInfo.map((placeInfo) => <PlaceCard
      key={uuidv4()}
      id={placeInfo.id}
      imgSrc={placeInfo.imgSrc}
      placeCardPriceValue={placeInfo.placeCardPriceValue}
      placeCardName={placeInfo.placeCardName}
      placeCardType={placeInfo.placeCardType}
      setActiveElement={setActiveElement}
      className={className}
      specialCardClass={specialCardClass}
    />)}
  </div>;
};

NearPlacesList.propTypes = {
  placesInfo: placesInfoPropType,
};

export default NearPlacesList;
