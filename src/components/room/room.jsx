import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {Link, useParams} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {api} from '../../index';
import HotelsModel from '../../models/hotels-model';
import CommentModel from '../../models/comment-model';
import LoadingScreen from './../loading-screen/loading-screen';
import ReviewForm from '../review-form/review-form';
import ReviewsItem from '../reviews-item/reviews-item';
import GalleryImage from '../gallery-image/gallery-image';
import PropertyInside from '../property-inside-list/property-inside';
import NearPlacesList from '../near-places-list/near-places-list';
import UserNav from '../user-nav/user-nav';
import Map from '../map/map';
import {AuthorizationStatus} from '../../constants';
import {authorizedPropType} from '../../prop-types';


const Room = (props) => {
  let {id} = useParams();
  const {isAuthorized} = props;
  const [activePlaceCardId, setActivePlaceCard] = useState(0);

  const [hotel, setHotel] = useState([]);
  const [host, setHost] = useState([]);
  const [images, setImages] = useState([]);
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    api.get(`/hotels/${id}`)
    .then((res) => {
      setHotel(HotelsModel.parseHotelData(res.data));
      setHost(HotelsModel.parseHotelData(res.data).host);
      setImages(HotelsModel.parseHotelData(res.data).images);
      setGoods(HotelsModel.parseHotelData(res.data).goods);
    });
  }, []);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get(`/comments/${id}`)
    .then((res) => {
      setComments(CommentModel.parseCommentsData(res.data));
    });
  }, []);

  const [nearby, setNearby] = useState([]);

  useEffect(() => {
    api.get(`/hotels/${id}/nearby`)
    .then((res) => {
      setNearby(HotelsModel.parseHotelsData(res.data));
    });
  }, []);

  if (!hotel) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <UserNav isAuthorized={isAuthorized} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((img) =>
                <GalleryImage
                  key={uuidv4()}
                  imageUrl={img} />
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {hotel.isPremium ? <div className="property__mark">
                <span>Premium</span>
              </div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {hotel.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{
                    width: `80%`,
                  }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {hotel.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {hotel.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {hotel.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{hotel.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <PropertyInside goods={goods} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{1}</span></h2>
                <ul className="reviews__list">
                  {comments.map((commentItem) => <ReviewsItem
                    key={commentItem.id}
                    userAvatar={commentItem.user.avatarUrl}
                    reviewText={commentItem.comment}
                    userRate={commentItem.rating}
                    reviewTime={commentItem.date}
                    userName={commentItem.user.name}
                  />)}
                </ul>
                {isAuthorized === AuthorizationStatus.AUTH ?
                  <ReviewForm id={id} /> : ``
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map activePlaceCardId={activePlaceCardId} points={nearby} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlacesList activePlaceCardId={activePlaceCardId} setActivePlaceCard={setActivePlaceCard} placesInfo={nearby} />
          </section>
        </div>
      </main>
    </div>
  );
};

const maphotelToProps = (hotel) => ({
  isAuthorized: hotel.authorizationStatus,
});


Room.propTypes = {
  isAuthorized: authorizedPropType,
};


export {Room};
export default connect(maphotelToProps, null)(Room);
