import React from "react";
import {Link} from "react-router-dom";
import {pricePropType, classNamePropType, placePropType, imgSrcPropType, idPropType, setActiveElementPropType} from '../../prop-types';

const PlaceCard = (props) => {
  const {id, imgSrc, placeCardPriceValue, placeCardName, placeCardType, setActivePlaceCard, className, specialCardClass, additionalClass = ``} = props;

  return (
    <article className={`${specialCardClass} place-card`}>
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to="/offer" onMouseEnter={() => setActivePlaceCard(id)} onMouseLeave={() => setActivePlaceCard(0)}>
          <img
            className="place-card__image"
            src={imgSrc}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${additionalClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;{placeCardPriceValue}
            </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: ` 80%`
            }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {placeCardName}
          </Link>
        </h2>
        <p className="place-card__type">{placeCardType}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  id: idPropType,
  imgSrc: imgSrcPropType,
  placeCardPriceValue: pricePropType,
  placeCardName: classNamePropType,
  placeCardType: placePropType,
  setActivePlaceCard: setActiveElementPropType,
  className: classNamePropType,
  specialCardClass: classNamePropType,
  additionalClass: classNamePropType
};


export default PlaceCard;
