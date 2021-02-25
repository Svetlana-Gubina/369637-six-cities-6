import React from 'react';
import {v4 as uuidv4} from "uuid";
import PlaceCard from '../place-card/place-card';
import {placeCardInfoType} from '../../prop-types';

const PlacesList = (props) => {
  const {placesInfo, activePlaceCardId, setActivePlaceCard} = props;
  const className = `cities`;
  const specialCardClass = className + `__place-card`;

  return (
    <div className={className + `__places-list places__list tabs__content`}>
      <div style={{
        display: `none`
      }}>{activePlaceCardId}</div>
      {placesInfo.map((placeInfo) => <PlaceCard
        key={uuidv4()}
        id={placeInfo.id}
        imgSrc={placeInfo.imgSrc}
        placeCardPriceValue={placeInfo.placeCardPriceValue}
        placeCardName={placeInfo.placeCardName}
        placeCardType={placeInfo.placeCardType}
        setActivePlaceCard={setActivePlaceCard}
        className={className}
        specialCardClass={specialCardClass}
      />)}
    </div>
  );
};

PlacesList.propTypes = placeCardInfoType;

export default PlacesList;
