import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const [searchInput, SetSearchInput] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [withoutShortMovies, setWithoutShortMovies] = useState([]);
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
    const filteredMovies = props.movies.filter((movie) => movie.duration > 40);
    props.setMoviesLength(filteredMovies.length);
    setWithoutShortMovies([...filteredMovies]);
  }, [isChecked, props.movies, setWithoutShortMovies]);

  const movies = isChecked
    ? props.movies.slice(0, props.numberOfMovies)
    : withoutShortMovies.slice(0, props.numberOfMovies);
  const errorText = props.getError
    ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
    : "Ничего не найдено";
  return (
    <section className="movies">
      <SearchForm
        {...props}
        searchInput={searchInput}
        isChecked={isChecked}
        withoutShortMovies={withoutShortMovies}
        setIsChecked={setIsChecked}
        SetSearchInput={SetSearchInput}
        SetIsFoundMovies={SetIsFoundMovies}
        SetIsLoading={SetIsLoading}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList {...props} movies={movies} />
      )}
      {isFoundMovies ? "" : <p className="error">{errorText}</p>}
    </section>
  );
}

export default Movies;
