import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();
  const movies = props.movies;
  return (
    <section className="movies-cards">
      <ul className="movies-card__list">
        {movies.map(({ ...movie }) => {
          return (
            <MoviesCard
              key={movie.id || movie._id}
              {...movie}
              userMovieList={props.userMovieList}
              setUserMovieList={props.setUserMovieList}
              saveMovie={props.saveMovie}
              deleteMovie={props.deleteMovie}
              serverError={props.serverError}
            />
          );
        })}
      </ul>
      <button
        className={`button ${
          location.pathname === "/saved-movies" ||
          movies.length >= props.moviesLength
            ? "button_invisible"
            : "movies-cards__add-more-movies"
        }`}
        type="button"
        onClick={props.clickOnMoreMovies}
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
