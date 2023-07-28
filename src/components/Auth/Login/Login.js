import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="auth">
      <Link className="logo link auth__logo auth__logo_center" to="/">
        {" "}
      </Link>
      <h3 className="title auth__title">Рады видеть!</h3>
      <form
        className="auth__form"
        name="formSignin"
        action="#"
        onSubmit={handleSubmit}
      >
        <p className="text auth__input-info">E-mail</p>
        <input
          className="input auth__input"
          type="email"
          id="popup-input-email"
          name="accountEmail"
          placeholder="Ваш email"
          required
        ></input>
        <span
          className="text auth__input-error"
          id="popup-input-email-error"
        ></span>
        <p className="text auth__input-info">Пароль</p>
        <input
          className="input auth__input"
          type="password"
          id="popup-input-password"
          name="accountPassword"
          placeholder="Ваш пароль"
          minLength="2"
          maxLength="40"
          required
        ></input>
        <span
          className="text auth__input-error"
          id="popup-input-password-error"
        ></span>
        <button className="button button_blue auth__button" type="submit">
          Войти
        </button>
        <div className="auth__footer">
          <p className="text auth__footer-text">Ещё не зарегистрированы?</p>
          <Link className="link auth__link" to="/signup">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
