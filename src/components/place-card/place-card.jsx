import React from "react";
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {getHotelsList} from '../../store/api-actions';
import {api} from '../../store';
import {AuthorizationStatus, AppRoute} from '../../constants';
import {ratingStarsToPercent} from '../../utils';
import {redirectToRoute} from '../../store/action';
import {isFavoritePropType, pricePropType, classNamePropType, placePropType, imgSrcPropType, idPropType, setActiveElementPropType} from '../../prop-types';

const PlaceCard = (props) => {
  const {id, imgSrc, placeCardPriceValue, placeCardName, placeCardType, placeCardRating, isFavorite, setActivePlaceCard, className, specialCardClass, additionalClass = ``} = props;
  const {authorizationStatus} = useSelector((state) => state.AUTH);
  const dispatch = useDispatch();

  const handleBookmarkButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    } else {
      api.post(`/favorite/${id}/${Number(!isFavorite)}`)
      .then(() => {
        dispatch(getHotelsList());
      })
      .catch(() => {
        throw new Error(`Something went wrong! Please try again`);
      });
    }
  };


  return (
    <article className={`${specialCardClass} place-card`}>
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`} onMouseEnter={() => setActivePlaceCard(id)} onMouseLeave={() => setActivePlaceCard(0)}>
          {className !== `favorites` ? <img
            className="place-card__image"
            src={imgSrc}
            width="260"
            height="200"
            alt="Place image"
          /> : <img className="place-card__image" src={imgSrc} width="150" height="110" alt="Place image" />}
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
            className={`${isFavorite ? `place-card__bookmark-button--active` : ``} place-card__bookmark-button button`}
            type="button"
            onClick={() => handleBookmarkButtonClick()}
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
              width: ` ${ratingStarsToPercent(placeCardRating)}`
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
  additionalClass: classNamePropType,
  isFavorite: isFavoritePropType,
  placeCardRating: idPropType
};


export default PlaceCard;
