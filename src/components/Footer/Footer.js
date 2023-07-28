import React from "react";
import "./Footer.css";
import { useLocation, Link } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer
      className={`${
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/"
          ? "footer"
          : "footer_invisible"
      }`}
    >
      <h2 className="title footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="border border_grey"></div>
      <div className="footer__underline">
        <p className="text footer__copyright">© 2020</p>
        <ul className="footer__underline-list-links">
          <li className="footer__underline-list-item">
            <Link
              to="https://practicum.yandex.ru/"
              className="link footer__list-link-item"
              target="_blank"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__underline-list-item">
            <Link
              to="https://github.com/"
              className="link footer__list-link-item"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
