import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="auth">
      <Link className="logo link auth__logo auth__logo_center" to="/">
        {" "}
      </Link>
      <h3 className="title auth__title">Добро пожаловать!</h3>
      <form
        className="auth__form"
        name="formSignup"
        action="#"
        onSubmit={handleSubmit}
      >
        <p className="text auth__input-info">Имя</p>
        <input
          className="input auth__input"
          type="text"
          id="popup-input-name"
          name="accountEmail"
          placeholder="Ваше имя"
          minLength="2"
          maxLength="40"
        ></input>
        <span
          className="text auth__input-error"
          id="popup-input-name-error"
        ></span>
        <p className="text auth__input-info">E-mail</p>
        <input
          className="input input auth__input"
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
          Зарегистрироваться
        </button>
        <div className="auth__footer">
          <p className="auth__footer-text">Уже зарегистрированы? </p>
          <Link className="link auth__link" to="/signin">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
