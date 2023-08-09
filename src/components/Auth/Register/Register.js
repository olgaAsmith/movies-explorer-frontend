import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registration, authorize } from "../../../utils/Auth";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();
  const [formValues, setformValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  //*validation
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
    registration(
      formValues.accountName,
      formValues.accountEmail,
      formValues.accountPassword,
    )
      .then((res) => {
        if (!res) {
          props.handleInfoPopup(true);
          props.SetInfoPopupText("Регистрация прошла успешно!");
        } else if (
          res.message === "Пользователь с такими данными уже существует"
        ) {
          props.handleInfoPopup(false);
          props.SetInfoPopupText("Пользователь с таким email уже существует");
        }
        authorize(formValues.accountEmail, formValues.accountPassword)
          .then(() => {
            props.handleSignin();
            navigate("/movies", { replace: true });
          })
          .catch((error) => {
            console.log(error);
            props.SetInfoPopupText("При авторизации произошла ошибка");
            props.handleInfoPopup(false);
          });
        setIsValid(true);
      })
      .catch((error) => {
        console.log(error);
        props.handleInfoPopup(false);
        props.SetInfoPopupText("При регистрации пользователя произошла ошибка");
      });
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
          className={`input auth__input ${
            errors.accountName ? "auth__input_red" : "auth__input_green"
          }`}
          type="text"
          id="popup-input-name"
          name="accountName"
          placeholder="Ваше имя"
          minLength="2"
          maxLength="40"
          onChange={handleChange}
          pattern="^[A-Za-zА-Яа-яЁё\s\-]+$"
        ></input>
        <span className="text auth__input-error" id="popup-input-name-error">
          {errors.accountName}
        </span>
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
            isValid ? "" : "button_disabled"
          }`}
          type="submit"
        >
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
