import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();

  return (
    <section className="movies-cards">
      <MoviesCard isSaved={props.isSaved} />
      <button
        className={`button ${
          location.pathname === "/saved-movies"
            ? "button_invisible movies-cards__without-add"
            : "movies-cards__add-more-movies"
        }`}
        type="button"
      >
        Ещё
      </button>
      <div
        className={`${
          location.pathname === "/saved-movies"
            ? "movies-cards__space-between"
            : ""
        }`}
      ></div>
    </section>
  );
}

export default MoviesCardList;
