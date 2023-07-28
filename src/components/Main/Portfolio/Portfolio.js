import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="title portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <Link
            className="link portfolio__list_item_container"
            to="https://olgaasmith.github.io/how-to-learn/"
            target="_blank"
          >
            <p className="text portfolio__list-item-name">Статичный сайт</p>
            <div className="link portfolio__list-item-link"></div>
          </Link>
          <div className="border border_grey portfolio__border"></div>
        </li>
        <li className="portfolio__list-item">
          <Link
            className="link portfolio__list_item_container"
            to="https://olgaasmith.github.io/russian-travel/"
            target="_blank"
          >
            <p className="text portfolio__list-item-name">Адаптивный сайт</p>
            <div className="link portfolio__list-item-link"></div>
          </Link>
          <div className="border border_grey portfolio__border"></div>
        </li>
        <li className="portfolio__list-item">
          <Link
            className="link portfolio__list_item_container"
            to="https://olgaasmith.github.io/mesto-react/"
            target="_blank"
          >
            <p className="text portfolio__list-item-name">
              Одностраничное приложение
            </p>
            <div className="link portfolio__list-item-link"></div>
          </Link>
          <div className="border border_grey portfolio__border"></div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
