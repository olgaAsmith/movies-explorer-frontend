import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const location = useLocation();

  return (
    <ul className="movies-card__list">
      <li className="movies-card__item">
        <img
          className="movies-card__image"
          src={require("../../../images/gallery1.jpg")}
          alt="Обложка фильма"
        />
        <div className="movies-card__info">
          <p className="text movies-card__name">33 слова о дизайне</p>
          {location.pathname === "/saved-movies" ? (
            <button
              className="button movies-card__delete-button"
              type="button"
            ></button>
          ) : props.isSaved ? (
            <button
              className="button movies-card__save-button movies-card__save-button_green"
              type="button"
            ></button>
          ) : (
            <button
              className="button movies-card__save-button"
              type="button"
            ></button>
          )}
        </div>
        <p className="text movies-card__time">1ч42м</p>
      </li>
      <li className="movies-card__item">
        <img
          className="movies-card__image"
          src={require("../../../images/gallery1.jpg")}
          alt="Обложка фильма"
        />
        <div className="movies-card__info">
          <p className="text movies-card__name">33 слова о дизайне</p>
          {location.pathname === "/saved-movies" ? (
            <button
              className="button movies-card__delete-button"
              type="button"
            ></button>
          ) : props.isSaved ? (
            <button
              className="button movies-card__save-button movies-card__save-button_green"
              type="button"
            ></button>
          ) : (
            <button
              className="button movies-card__save-button"
              type="button"
            ></button>
          )}
        </div>
        <p className="text movies-card__time">1ч42м</p>
      </li>
      <li className="movies-card__item">
        <img
          className="movies-card__image"
          src={require("../../../images/gallery1.jpg")}
          alt="Обложка фильма"
        />
        <div className="movies-card__info">
          <p className="text movies-card__name">33 слова о дизайне</p>
          {location.pathname === "/saved-movies" ? (
            <button
              className="button movies-card__delete-button"
              type="button"
            ></button>
          ) : props.isSaved ? (
            <button
              className="button movies-card__save-button movies-card__save-button_green"
              type="button"
            ></button>
          ) : (
            <button
              className="button movies-card__save-button"
              type="button"
            ></button>
          )}
        </div>
        <p className="text movies-card__time">1ч42м</p>
      </li>
      <li className="movies-card__item">
        <img
          className="movies-card__image"
          src={require("../../../images/gallery1.jpg")}
          alt="Обложка фильма"
        />
        <div className="movies-card__info">
          <p className="text movies-card__name">33 слова о дизайне</p>
          {location.pathname === "/saved-movies" ? (
            <button
              className="button movies-card__delete-button"
              type="button"
            ></button>
          ) : props.isSaved ? (
            <button
              className="button movies-card__save-button movies-card__save-button_green"
              type="button"
            ></button>
          ) : (
            <button
              className="button movies-card__save-button"
              type="button"
            ></button>
          )}
        </div>
        <p className="text movies-card__time">1ч42м</p>
      </li>
    </ul>
  );
}

export default MoviesCard;
