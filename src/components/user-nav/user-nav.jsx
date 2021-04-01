import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../constants';

const UserNav = () => {
  const {authorizationStatus} = useSelector((state) => state.AUTH);
  const {userLogin} = useSelector((state) => state.LOGIN);

  return authorizationStatus === AuthorizationStatus.AUTH ?
    <Link className="header__nav-link header__nav-link--profile" to="/favorites">
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__user-name user__name">
        {userLogin}
      </span>
    </Link> :
    <Link className="header__nav-link header__nav-link--profile" to="/login">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>;
};

export default UserNav;
