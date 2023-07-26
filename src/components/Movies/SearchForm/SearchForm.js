import React from "react";
import "./SearchForm.css";
import "./SearchForm.css";
import { useState } from "react";

function SearchForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="search">
      <form
        className="search__form"
        name="formSearch"
        action="#"
        onSubmit={handleSubmit}
      >
        <div className="search__block-elements">
          <input
            className="input search__input"
            type="search"
            name="search"
            placeholder="Фильм"
          />
          <button className="button search__button" type="submit"></button>
        </div>
        <div className="search__block-config">
          <label className="search__input-switch-label">
            <input
              className="input search__input-switch"
              type="checkbox"
              checked={isChecked}
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
