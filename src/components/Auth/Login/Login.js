import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { authorize } from "../../../utils/Auth";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [formValues, setformValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setformValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValid(false);
    authorize(formValues.accountEmail, formValues.accountPassword)
      .then(() => {
        props.handleSignin();
        props.SetInfoPopupText("Вход выполнен успешно!");
        navigate("/movies", { replace: true });
        props.handleInfoPopup(true);
        setIsValid(true);
      })
      .catch((error) => {
        props.handleInfoPopup(false);
        if (error === 401) {
          props.SetInfoPopupText("Вы ввели неправильный логин или пароль");
        } else {
          props.SetInfoPopupText("При авторизации произошла ошибка");
        }
      });
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
          className={`input auth__input ${
            errors.accountEmail ? "auth__input_red" : "auth__input_green"
          }`}
          type="email"
          id="popup-input-email"
          name="accountEmail"
          placeholder="Ваш email"
          required
          onChange={handleChange}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        ></input>
        <span className="text auth__input-error" id="popup-input-email-error">
          {errors.accountEmail}
        </span>
        <p className="text auth__input-info">Пароль</p>
        <input
          className={`input auth__input ${
            errors.accountPassword ? "auth__input_red" : "auth__input_green"
          }`}
          type="password"
          id="popup-input-password"
          name="accountPassword"
          placeholder="Ваш пароль"
          minLength="4"
          maxLength="40"
          required
          onChange={handleChange}
        ></input>
        <span
          className="text auth__input-error"
          id="popup-input-password-error"
        >
          {errors.accountPassword}
        </span>
        <button
          className={`button button_blue auth__button ${
            isValid ? "" : "auth__button_disabled"
          }`}
          type="submit"
        >
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
