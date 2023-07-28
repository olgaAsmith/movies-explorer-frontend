import React from "react";
import "./Profile.css";
import { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isInputChanged, SetIsInputChanged] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
    SetIsInputChanged(true);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    SetIsInputChanged(true);
  };

  return (
    <div className="profile">
      <h3 className="title profile__title">Привет, Виталий</h3>
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
            type="text"
            value={name || ""}
            minLength="2"
            maxLength="40"
            onChange={handleChangeName}
          ></input>
        </div>
        <div className="border border_grey profile__border"></div>
        <div className="profile__info">
          <label className="text profile__info-item profile__info-item_bold">
            E-mail
          </label>
          <input
            className="input profile__info-item-input"
            type="email"
            value={email || ""}
            onChange={handleChangeEmail}
          ></input>
        </div>
        {isInputChanged ? (
          <div className="profile__buttons-submit">
            <span className="profile__button-submit-error">
              При обновлении профиля произошла ошибка.
            </span>
            <button
              className="button button_blue profile__button-submit"
              type="submit"
            >
              Сохранить
            </button>{" "}
          </div>
        ) : (
          <div className="profile__buttons">
            <button className="button profile__button" type="button">
              Редактировать
            </button>
            <button
              className="button profile__button profile__button_text_red"
              type="button"
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
