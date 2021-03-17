import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../constants';
import {authorizedPropType} from '../../prop-types';

const UserNav = (props) => {
  const {isAuthorized} = props;

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

const mapStateToProps = ({AUTH}) => ({
  isAuthorized: AUTH.authorizationStatus,
});

UserNav.propTypes = {
  isAuthorized: authorizedPropType,
};


export {UserNav};
export default connect(mapStateToProps, null)(UserNav);
