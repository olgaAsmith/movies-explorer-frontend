import React from "react";
import "./SavedMovies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const [isChecked, setIsChecked] = useState(true);
  const [withoutShortMovies, setWithoutShortMovies] = useState([]);
  const [searchInput, SetSearchInput] = useState("");
  const [isFoundMovies, SetIsFoundMovies] = useState(true);
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(() => {
    const filteredMovies = props.movies.filter((movie) => movie.duration > 40);
    setWithoutShortMovies([...filteredMovies]);
  }, [isChecked, props.movies, setWithoutShortMovies]);

  const movies = isChecked ? props.movies : withoutShortMovies;
  const errorText = props.getError
    ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
    : "Ничего не найдено";
  return (
    <section className="saved-movies">
      <SearchForm
        {...props}
        setIsChecked={setIsChecked}
        isChecked={isChecked}
        searchInput={searchInput}
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

export default SavedMovies;
