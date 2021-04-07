import React, {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {placesInfoPropType, idPropType, setActiveElementPropType} from '../../prop-types';


const NearPlacesList = (props) => {
  const [activePlaceCardId, setActivePlaceCard] = useState(0);
  const {placesInfo} = props;
  const className = `near-places`;
  const specialCardClass = className + `__card`;

  const handleElementClick = () => {
    window.scrollTo(0, 0);
  };

  return <div className={className + `__list places__list`} onClick={() => handleElementClick()}>
    <div style={{
      display: `none`,
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
  </div>;
};

NearPlacesList.propTypes = {
  placesInfo: placesInfoPropType,
  activePlaceCardId: idPropType,
  setActivePlaceCard: setActiveElementPropType
};

export default NearPlacesList;
