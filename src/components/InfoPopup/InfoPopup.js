import React from "react";
import "./InfoPopup.css";

function InfoPopup(props) {
  return (
    <div
      className={`popup
    ${props.isInfoPopupOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <div className="popup__min-container">
          <div
            className={`popup__image
    ${
      props.isSuccessfullOperation
        ? "popup__image_success"
        : "popup__image_error"
    }`}
          ></div>
          <p className="popup__text">{props.infoPopupText}</p>
        </div>
        <button
          className="button popup__close-button "
          type="button"
          onClick={props.closePopup}
        ></button>
      </div>
    </div>
  );
}

export default InfoPopup;
