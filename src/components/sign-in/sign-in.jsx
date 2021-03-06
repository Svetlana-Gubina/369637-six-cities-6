import React, {useState, useRef, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import {login} from "../../store/api-actions";
import {redirectToRoute} from '../../store/action';
import {AuthorizationStatus, AppRoute} from '../../constants';


const SignIn = () => {
  const {authorizationStatus} = useSelector((state) => state.AUTH);
  const [userEmail, setUserEmail] = useState(``);
  const [userPassword, setUserPassword] = useState(``);
  const {loginErrorMessage} = useSelector((state) => state.LOGIN_ERROR_MESSAGE);

  const badRequest = useRef();
  useEffect(() => {
    if (loginErrorMessage) {
      badRequest.current.style.display = `block`;
    }
  }, [loginErrorMessage]);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(redirectToRoute(AppRoute.ROOT));
    }
  }, [authorizationStatus]);

  const handleEmailChange = (evt) => {
    setUserEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setUserPassword(evt.target.value);
  };

  const dispatch = useDispatch();
  const error = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userEmail)) {
      error.current.style.display = `block`;
      return;
    }

    dispatch(login({
      login: userEmail,
      password: userPassword,
    }));
  };

  return (
    <div className="page page--gray page--login">
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
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div style={{
                display: `none`,
                color: `red`
              }} ref={error}>Please enter correct email</div>
              <div style={{
                display: `none`,
                color: `red`
              }} ref={badRequest}>Somethig went wrong! Please try again</div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  onChange={handleEmailChange}
                  className="login__input form__input"
                  type="email" name="email"
                  placeholder="Email"
                  data-testid="userEmail"
                  required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onChange={handlePasswordChange}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  data-testid="userPassword"
                  required />
              </div>
              <button className="login__submit form__submit button" type="submit" data-testid="formSubmit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
