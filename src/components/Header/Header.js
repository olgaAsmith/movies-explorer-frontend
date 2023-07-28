import React from "react";
import "./Header.css";
import { useLocation, Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const location = useLocation();

  return (
    <header
      className={`${
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile" ||
        location.pathname === "/"
          ? `header ${location.pathname === "/" ? "header_main" : ""}`
          : "header_invisible"
      }`}
    >
      <Navigation {...props} />
    </header>
  );
}

export default Header;
