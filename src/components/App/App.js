import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Auth/Profile/Profile";
import Register from "../Auth/Register/Register";
import Login from "../Auth/Login/Login";
import NotFound from "../NotFound/NotFound";
import InfoPopup from "../InfoPopup/InfoPopup";

import { Routes, Route } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isLogIn, SetIsLogIn] = useState(false);
  const [isMovieSaved, SetIsMovieSaved] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isBurgerMenuOpen, SetIsBurgerMenuOpen] = useState(false);
  const [isInfoPopupOpen, SetIsInfoPopupOpen] = useState(false); //*popup
  const [isSuccessfullOperation, SetIsSuccessfullOperation] = useState(false); //*err

  //*popup
  const handleInfoPopup = (isSuccessfullOperation) => {
    SetIsInfoPopupOpen(true);
    SetIsSuccessfullOperation(isSuccessfullOperation);
  };
  const closePopup = () => {
    SetIsInfoPopupOpen(false);
  };

  //*burger-menu
  const clickOnBurgerMenu = () => {
    SetIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  const closeBurgerMenu = () => {
    SetIsBurgerMenuOpen(false);
  };

  //*forms

  return (
    <div className="App">
      <Preloader />
      <Header
        isLogIn={isLogIn}
        isBurgerMenuOpen={isBurgerMenuOpen}
        clickOnBurgerMenu={clickOnBurgerMenu}
        closeBurgerMenu={closeBurgerMenu}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <Movies
              isSaved={isMovieSaved}
              movies={movies}
              isBurgerMenuOpen={isBurgerMenuOpen}
            />
          }
        />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      <InfoPopup
        isInfoPopupOpen={isInfoPopupOpen}
        closePopup={closePopup}
        isSuccessfullOperation={isSuccessfullOperation}
      ></InfoPopup>
    </div>
  );
}

export default App;
