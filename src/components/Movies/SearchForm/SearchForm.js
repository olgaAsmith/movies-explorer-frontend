import React from "react";
import "./SearchForm.css";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";

function SearchForm(props) {
  const location = useLocation();

  //& submit user movies
  const handleSubmitSavedMovies = async (event) => {
    event.preventDefault();
    props.SetIsFoundMovies(true);
    props.SetIsLoading(true);
    try {
      const searchingMovies = props.userMovieList.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(props.searchInput.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(props.searchInput.toLowerCase())
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));
      props.setSearchedMovies([...searchingMovies]);
      props.setIsSearchFilter(true);
      props.SetIsLoading(false);

      if (searchingMovies.length === 0) {
        props.SetIsFoundMovies(false);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  //& submit beatmovies
  const handleSubmitMovies = async (event) => {
    event.preventDefault();
    props.SetIsFoundMovies(true);
    props.SetIsLoading(true);
    try {
      const searchingMovies = props.serverMovies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(props.searchInput.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(props.searchInput.toLowerCase())
      );
      if (!props.searchInput) {
        props.handleInfoPopup(true);
        props.SetInfoPopupText("Нужно ввести ключевое слово");
      } else {
        const lastSearch = {
          searchInput: props.searchInput,
          isChecked: props.isChecked,
          searchingMovies,
        };
        localStorage.setItem("lastSearch", JSON.stringify(lastSearch));
        props.setMovies([...searchingMovies]);
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      props.SetIsLoading(false);
      if (searchingMovies.length === 0) {
        props.SetIsFoundMovies(false);
      }
    } catch (error) {
      console.error("error", error);
    }
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
