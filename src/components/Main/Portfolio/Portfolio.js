import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="title portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <div className="portfolio__list_item_container">
            <p className="text portfolio__list-item-name">Статичный сайт</p>
            <Link
              to="https://olgaasmith.github.io/how-to-learn/"
              className="link portfolio__list-item-link"
              target="_blank"
            >
              {" "}
            </Link>
          </div>
          <div className="border border_grey portfolio__border"></div>
        </li>
        <li className="portfolio__list-item">
          <div className="portfolio__list_item_container">
            <p className="text portfolio__list-item-name">Адаптивный сайт</p>
            <Link
              to="https://olgaasmith.github.io/russian-travel/"
              className="link portfolio__list-item-link"
              target="_blank"
            >
              {" "}
            </Link>
          </div>
          <div className="border border_grey portfolio__border"></div>
        </li>
        <li className="portfolio__list-item">
          <div className="portfolio__list_item_container">
            <p className="text portfolio__list-item-name">
              Одностраничное приложение
            </p>
            <Link
              to="https://olgaasmith.github.io/mesto-react/"
              className="link portfolio__list-item-link"
              target="_blank"
            >
              {" "}
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
