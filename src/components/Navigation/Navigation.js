import React from "react";
import "./Navigation.css";
import { useLocation, Link, NavLink } from "react-router-dom";

function Navigation(props) {
  const location = useLocation();

  return (
    <div className="header__menu">
      <Link
        className="logo link header__logo"
        to={location.pathname === "/" ? "#!" : "/"}
      ></Link>
      {props.isLogIn ? (
        <nav
          className={`header__menu-wrapper ${
            props.isBurgerMenuOpen ? "header__menu-wrapper_active" : ""
          }`}
        >
          <div className="header__menu-block">
            <div className="header__block-auth">
              <NavLink
                className="link header__menu-link header__menu-link_invisible"
                to="/"
              >
                Главная
              </NavLink>
              <NavLink className="link header__menu-link" to="/movies">
                Фильмы
              </NavLink>
              <NavLink className="link header__menu-link" to="/saved-movies">
                Сохранённые фильмы
              </NavLink>
            </div>
            <Link className="button header__account-button" to="/profile">
              Аккаунт
            </Link>
          </div>
          <button
            className="button header__menu-close"
            onClick={props.closeBurgerMenu}
            type="button"
          ></button>
        </nav>
      ) : (
        <div className="header__block-not-auth">
          <NavLink className="link header__link-signup" to="/signup">
            Регистрация
          </NavLink>
          <NavLink
            className="button button_green header__button-signin"
            to="/signin"
          >
            Войти
          </NavLink>
        </div>
      )}
      {props.isLogIn ? (
        <div
          className={`header__menu-burger ${
            props.isBurgerMenuOpen ? "header__menu-burger_active" : ""
          }`}
          onClick={props.clickOnBurgerMenu}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navigation;
