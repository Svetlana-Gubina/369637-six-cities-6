import React from 'react';
import PlaceCard from '../place-card/place-card';
import {idPropType, placesInfoPropType, setActiveElementPropType} from '../../prop-types';

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
        key={placeInfo.id}
        id={placeInfo.id}
        imgSrc={placeInfo.previewImage}
        placeCardPriceValue={placeInfo.price}
        placeCardName={placeInfo.title}
        placeCardType={placeInfo.type}
        setActivePlaceCard={setActivePlaceCard}
        className={className}
        specialCardClass={specialCardClass}
      />)}
    </div>
  );
};

PlacesList.propTypes = {
  activePlaceCardId: idPropType,
  placesInfo: placesInfoPropType,
  setActivePlaceCard: setActiveElementPropType,
};

export default PlacesList;
