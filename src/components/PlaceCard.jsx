import React from "react";
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const {imgSrc, placeCardPriceValue, placeCardName, placeCardType} = props;

  return (
    <article className="cities__place-card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={`img/` + imgSrc + `.jpg`}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
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
          <a href="#">{placeCardName}</a>
        </h2>
        <p className="place-card__type">{placeCardType}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  imgSrc: PropTypes.string,
  placeCardPriceValue: PropTypes.number,
  placeCardName: PropTypes.string,
  placeCardType: PropTypes.string
};

PlaceCard.defaultProps = {
  imgSrc: `room`,
  placeCardPriceValue: 80,
  placeCardName: `Wood and stone place`,
  placeCardType: `Private room`
};


export default PlaceCard;
