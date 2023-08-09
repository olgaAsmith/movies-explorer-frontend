import React from "react";
import "./SearchForm.css";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";

function SearchForm(props) {
  const location = useLocation();
  const searchInput = props.searchInput;
  const isChecked = props.isChecked;
  
  //& submit user movies
  const handleSubmitSavedMovies = (event) => {
    event.preventDefault();
    props.SetIsLoading(true);
    const searchingMovies = props.userMovieList.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(props.searchInput.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(props.searchInput.toLowerCase()),
    );
    props.setUserMovieList([...searchingMovies]);
    if (searchingMovies.length === 0) {
      props.SetIsFoundMovies(false);
    }
    setTimeout(() => {
      props.SetIsLoading(false);
    }, 2000);
  };

  //& submit beatmovies
  const handleSubmitMovies = (event) => {
    event.preventDefault();
    props.SetIsLoading(true);
    const searchingMovies = props.serverMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(props.searchInput.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(props.searchInput.toLowerCase()),
    );
    if (!props.searchInput) {
      props.handleInfoPopup(false);
      props.SetInfoPopupText("Нужно ввести ключевое слово");
    } else {
      const lastSearch = {
        searchInput,
        isChecked,
        searchingMovies,
      };
      localStorage.setItem("lastSearch", JSON.stringify(lastSearch));
      props.setMovies([...searchingMovies]);
      if (searchingMovies.length === 0) {
        props.SetIsFoundMovies(false);
      }
    }
    props.setMovies([...searchingMovies]);
    setTimeout(() => {
      props.SetIsLoading(false);
    }, 2000);
  };

  //*toogle butt
  const handleCheckboxChecked = (event) => {
    props.setIsChecked(event.target.checked);
  };

  //*input change
  const handleSearchInput = (event) => {
    props.SetSearchInput(event.target.value);
  };

  return (
    <section className="search">
      <form
        className="search__form"
        name="formSearch"
        action="#"
        onSubmit={
          location.pathname === "/movies"
            ? handleSubmitMovies
            : handleSubmitSavedMovies
        }
      >
        <div className="search__block-elements">
          <input
            className="input search__input"
            type="search"
            name="search"
            placeholder="Фильм"
            value={props.searchInput || ""}
            onChange={handleSearchInput}
          />
          <button className="button search__button" type="submit"></button>
        </div>
        <div className="search__block-config">
          <label className="search__input-switch-label">
            <input
              className="input search__input-switch"
              type="checkbox"
              checked={props.isChecked}
              onChange={handleCheckboxChecked}
            ></input>
            <span className="search__input-switch-ball"></span>
          </label>
          <p className="text search__input-text">Короткометражки</p>
        </div>
      </form>
      <div className="border border_grey"></div>
    </section>
  );
}

export default SearchForm;
