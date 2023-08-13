import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const [searchInput, SetSearchInput] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [shortMovies, setShortMovies] = useState([]);
  const [isFoundMovies, SetIsFoundMovies] = useState(true);
  const [isLoading, SetIsLoading] = useState(false);
  useEffect(() => {
    if (localStorage.length === 0) {
      return;
    } else {
      const lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
      SetSearchInput(lastSearch.searchInput);
      setIsChecked(lastSearch.isChecked);
      props.setMoviesLength(lastSearch.searchingMovies.length);
      props.setMovies(lastSearch.searchingMovies);
    }
  }, []);

  useEffect(() => {
    if(isChecked) {
      const filtredShortMovies = props.movies.filter((movie) => movie.duration <= 40);
      props.setMoviesLength(filtredShortMovies.length);
      setShortMovies([...filtredShortMovies]);
    } else {
      props.setMoviesLength(props.movies.length);
    }
  }, [isChecked, props.movies, setShortMovies]);

  const movies = isChecked
    ? shortMovies.slice(0, props.numberOfMovies)
    : props.movies.slice(0, props.numberOfMovies);
  const errorText = props.getError
    ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
    : "Ничего не найдено";

  return (
    <section className="movies">
      <SearchForm
        {...props}
        searchInput={searchInput}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        SetSearchInput={SetSearchInput}
        SetIsFoundMovies={SetIsFoundMovies}
        SetIsLoading={SetIsLoading}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList {...props}
        movies={movies}
        />
      )}
      {isFoundMovies ? "" : <p className="error">{errorText}</p>}
    </section>
  );
}

export default Movies;
