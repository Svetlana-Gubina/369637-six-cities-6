import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from "react-router-dom";
import {getHotelsList} from '../../store/api-actions';
import {v4 as uuidv4} from "uuid";
import {api} from '../../store';
import HotelsModel from '../../models/hotels-model';
import CommentModel from '../../models/comment-model';
import LoadingScreen from '../loading-screen/loading-screen';
import PageNotFound from '../page-not-found/page-not-found';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import GalleryImage from '../gallery-image/gallery-image';
import PropertyInside from '../property-inside/property-inside';
import NearPlacesList from '../near-places-list/near-places-list';
import UserNav from '../user-nav/user-nav';
import Map from '../map/map';
import {redirectToRoute} from '../../store/action';
import {ratingStarsToPercent} from '../../utils';
import {AuthorizationStatus, AppRoute} from '../../constants';

const Room = () => {
  let {id} = useParams();
  const {authorizationStatus} = useSelector((state) => state.AUTH);
  const {hotelsList} = useSelector((state) => state.DATA);
  const [activePlaceCardId, setActivePlaceCard] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    api.get(`/hotels/${id}`)
    .then((res) => {
      setHotel(HotelsModel.parseHotelData(res.data));
      setIsLoading(false);
    })
    .catch(() => {
      setHasError(true);
      setIsLoading(false);
    });
  }, [id, hotelsList]);

  const dispatch = useDispatch();
  const handleBookmarkButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    } else {
      api.post(`/favorite/${id}/${Number(!hotel.isFavorite)}`)
      .then(() => {
        dispatch(getHotelsList());
      })
      .catch(() => {
        throw new Error(`Something went wrong! Please try again`);
      });
    }
  };

  const [comments, setComments] = useState([]);
  const [hasCommentsError, setHasCommentsError] = useState(false);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const [isChangedComments, setIsChangedComments] = useState(false);
  useEffect(() => {
    api.get(`/comments/${id}`)
    .then((res) => {
      setComments(CommentModel.parseCommentsData(res.data));
      setIsCommentsLoading(false);
    })
    .catch(() => {
      setHasCommentsError(true);
      setIsCommentsLoading(false);
    });
  }, [id, isChangedComments]);

  const [nearby, setNearby] = useState([]);
  useEffect(() => {
    api.get(`/hotels/${id}/nearby`)
    .then((res) => {
      setNearby(HotelsModel.parseHotelsData(res.data));
    });
  }, [id]);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <>
      {hasError ? <PageNotFound /> : <div className="page">
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
                    <UserNav />
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
                {hotel.images.map((img) =>
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
                  <button className={`${hotel.isFavorite ? `property__bookmark-button--active` : ``} property__bookmark-button button`} type="button"
                    onClick={() => handleBookmarkButtonClick()}>
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{
                      width: ` ${ratingStarsToPercent(hotel.rating)}`,
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
                  <PropertyInside goods={hotel.goods} />
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={hotel.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {hotel.host.name}
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
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                  <ReviewsList comments={comments} hasCommentsError={hasCommentsError} isCommentsLoading={isCommentsLoading} />
                  {authorizationStatus === AuthorizationStatus.AUTH ?
                    <ReviewForm id={parseInt(id, 10)} isChangedComments={isChangedComments} setIsChangedComments={setIsChangedComments} /> : ``
                  }
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map cityName={hotel.city.name} activePlaceCardId={activePlaceCardId} points={nearby} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearPlacesList setActivePlaceCard={setActivePlaceCard} placesInfo={nearby} />
            </section>
          </div>
        </main>
      </div>
      }
    </>
  );
};

export default Room;
