import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="not-found">
      <p className="text not-found__number">404</p>
      <p className="text not-found__error">Страница не найдена</p>
      <button
        className="button not-found__button"
        onClick={handleBackButton}
        type="button"
      >
        Назад
      </button>
    </div>
  );
}

export default NotFound;
