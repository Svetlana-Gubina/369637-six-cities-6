import React from "react";
import {connect} from 'react-redux';
import {Link, useParams} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import GalleryImage from '../gallery-image/gallery-image';
import PropertyInside from '../property-inside-list/property-inside';
import UserNav from '../user-nav/user-nav';
import {AuthorizationStatus} from '../../constants';
import {cityNamePropType, placesInfoPropType, authorizedPropType, reviewItemsPropType} from '../../prop-types';
import {getOfferInfoById} from '../../utils';

const Room = (props) => {
  let {id} = useParams();
  const {isAuthorized, placesInfo} = props;
  const offerInfo = getOfferInfoById(placesInfo, parseInt(id, 10));

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
              {/* {offerInfo.images.map((img) =>
                <GalleryImage
                  key={uuidv4()}
                  img={img} />
              )} */}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
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
                  Apartment
                </li>
                <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                {/* <PropertyInside goods={offerInfo.goods} /> */}
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
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
                {/* <ReviewsList /> */}
                {isAuthorized === AuthorizationStatus.AUTH ?
                  <ReviewForm /> : ``
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            {/* <Map activePlaceCardId={activePlaceCardId} /> */}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {/* <NearPlacesList placesInfo={getSomePlacesInfo(placesInfo, 1, 4)} /> */}
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: state.authorizationStatus,
  placesInfo: state.hotelsList,
  comments: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadComments(id) {
    dispatch(getComents(id));
  }
});

Room.propTypes = {
  city: cityNamePropType,
  placesInfo: placesInfoPropType,
  reviewItems: reviewItemsPropType,
  isAuthorized: authorizedPropType,
};


export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
