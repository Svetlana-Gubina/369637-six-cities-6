import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import PlaceCard from './placeCard';
import {additionalClassType, placesInfoType} from '../propTypes';

const FavoritesList = ({placesInfo}) => {
  const className = `favorites`;
  const specialCardClass = className + `__card`;
  const additionalClass = `favorites__card-info`;
  const [activeElementId, setActiveElement] = useState(0);

  return <div className="favorites__places">
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
      additionalClass={additionalClass}
    />)}
  </div>;
};

FavoritesList.propTypes = {
  placesInfo: placesInfoType,
  additionalClass: additionalClassType,
};

export default FavoritesList;
