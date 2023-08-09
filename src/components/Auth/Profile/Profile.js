import React from "react";
import "./Profile.css";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../../context/CurrentUser";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isInputChanged, SetIsInputChanged] = useState(false);
  const [isEdit, SetIsEdit] = useState(false);
  const [isInputEdit, SetIsInputEdit] = useState(false);
  const [formValues, setformValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validation = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setformValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  //*values
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    SetIsInputEdit(false);
  }, [currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editUserInfo(name, email);
    SetIsInputChanged(false);
    SetIsEdit(false);
  };

  const handleChangeInputs = () => {
    SetIsInputChanged(true);
    SetIsEdit(true);
  };

  //*change values
  const handleChangeName = (event) => {
    validation(event);
    SetIsInputEdit(false);
    setName(event.target.value);
    if (currentUser.name !== event.target.value) {
      SetIsInputEdit(true);
    } else {
      SetIsInputEdit(false);
    }
  };

  const handleChangeEmail = (event) => {
    validation(event);
    setEmail(event.target.value);
    if (currentUser.email !== event.target.value) {
      SetIsInputEdit(true);
    } else {
      SetIsInputEdit(false);
    }
  };

  const logout = () => {
    props.handleSignout();
  };

  return (
    <div className="profile">
      <h3 className="title profile__title">Привет, {currentUser.name}</h3>
      <form
        className="profile__form"
        name="formChangeProfile"
        action="#"
        onSubmit={handleSubmit}
      >
        <div className="profile__info">
          <label className="text profile__info-item profile__info-item_bold">
            Имя
          </label>
          <input
            className="input profile__info-item-input"
            name="name"
            type="text"
            value={isEdit ? name || "" : currentUser.name || ""}
            disabled={isEdit ? false : true}
            minLength="2"
            maxLength="40"
            onChange={handleChangeName}
            pattern="^[A-Za-zА-Яа-яЁё\s\-]+$"
          ></input>
        </div>
        <div className="border border_grey profile__border"></div>
        <div className="profile__info">
          <label className="text profile__info-item profile__info-item_bold">
            E-mail
          </label>
          <input
            className="input profile__info-item-input"
            name="email"
            type="email"
            value={isEdit ? email || "" : currentUser.email || ""}
            disabled={isEdit ? false : true}
            onChange={handleChangeEmail}
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          ></input>
        </div>
        {isInputChanged ? (
          <div className="profile__buttons-submit">
            <span
              className={`profile__button-submit-error ${
                isInputEdit ? "" : "profile__button-submit-error_invisible"
              }`}
            >
              {isValid ? "" : `${errors.email || errors.name}`}
            </span>
            <button
              className={`button button_blue profile__button-submit ${
                isInputEdit && isValid ? "" : "button_disabled"
              }`}
              type="submit"
            >
              Сохранить
            </button>{" "}
          </div>
        ) : (
          <div className="profile__buttons">
            <button
              className="button profile__button"
              type="button"
              onClick={handleChangeInputs}
            >
              Редактировать
            </button>
            <button
              className="button profile__button profile__button_text_red"
              type="button"
              onClick={logout}
            >
              Выйти из аккаунта
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Profile;
