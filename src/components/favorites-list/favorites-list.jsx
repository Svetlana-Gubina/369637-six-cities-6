import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import PlaceCard from '../place-card/place-card';
import {getOffersForCity} from '../../utils';
import {classNamePropType, placesInfoPropType} from '../../prop-types';

const FavoritesList = ({placesInfo}) => {
  const className = `favorites`;
  const specialCardClass = className + `__card`;
  const additionalClass = `favorites__card-info`;
  const [activeElementId, setActiveElement] = useState(0);
  const cities = [...new Set(placesInfo.map((placeInfo) => placeInfo.city.name))];


  return <div className="favorites__places">
    <div style={{
      display: `none`
    }}>{activeElementId}</div>
    <ul className="favorites__list">
      {cities.map((city) =>
        <li className="favorites__locations-items"
          key={uuidv4()}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {getOffersForCity(city, placesInfo).map((placeInfo) => <PlaceCard
              key={placeInfo.id}
              id={placeInfo.id}
              imgSrc={placeInfo.previewImage}
              placeCardPriceValue={placeInfo.price}
              placeCardName={placeInfo.title}
              placeCardType={placeInfo.type}
              isFavorite={placeInfo.isFavorite}
              setActivePlaceCard={setActiveElement}
              className={className}
              specialCardClass={specialCardClass}
              additionalClass={additionalClass}
            />)}
          </div>
        </li>)}
    </ul>
  </div>;
};

FavoritesList.propTypes = {
  placesInfo: placesInfoPropType,
  additionalClass: classNamePropType,
};

export default FavoritesList;
