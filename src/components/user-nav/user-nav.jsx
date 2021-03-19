import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../constants';

const UserNav = () => {
  const {isAuthorized} = useSelector((state) => state.AUTH);

  return isAuthorized === AuthorizationStatus.AUTH ?
    <Link className="header__nav-link header__nav-link--profile" to="/favorites">
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__user-name user__name">
      Oliver.conner@gmail.com
      </span>
    </Link> :
    <Link className="header__nav-link header__nav-link--profile" to="/login">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>;
};

export default UserNav;
