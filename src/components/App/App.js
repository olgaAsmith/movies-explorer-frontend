import React from "react";
import { useState, useEffect } from "react";
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
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { moviesApi } from "../../utils/MoviesApi";
import { checkToken, logout } from "../../utils/Auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUser";
import { api } from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();
  const [isLogIn, SetIsLogIn] = useState(false);
  //* global api
  const [movies, setMovies] = useState([]);
  //*my api
  const [userMovieList, setUserMovieList] = useState([]);
  const [isBurgerMenuOpen, SetIsBurgerMenuOpen] = useState(false); //* burger
  const [isInfoPopupOpen, SetIsInfoPopupOpen] = useState(false); //*popup
  const [infoPopupText, SetInfoPopupText] = useState("");
  const [isSuccessfullOperation, SetIsSuccessfullOperation] = useState(false); //*err
  const [numberOfMovies, setNumberOfMovies] = useState(0); //*mov number
  const [windowSize, setWindowSize] = useState(0); //* window
  const [currentUser, setCurrentUser] = useState({});
  const [moviesLength, setMoviesLength] = useState("");
  const [serverMovies, setServerMovies] = useState([]);
  const [getError, SetGetError] = useState(false);

  //*sending error to user
  const serverError = () => {
    handleInfoPopup(false);
    SetInfoPopupText("На сервере произошла ошибка");
  };

  //*Login
  const handleSignin = () => {
    SetIsLogIn(true);
  };

  //! EXIT
  const handleSignout = () => {
    logout()
      .then(() => {
        SetIsLogIn(false);
        navigate("/", { replace: true });
        localStorage.clear();
        setMovies([]);
        setCurrentUser({});
      })
      .catch((error) => {
        serverError();
        console.log(error);
      });
  };

  //*check auth
  useEffect(() => {
    checkToken()
      .then((res) => {
        if (res) {
          SetIsLogIn(true);
        }
      })
      .catch((error) => {
        serverError();
        console.log(error);
      });
  }, [isLogIn]);

  //*get user data
  useEffect(() => {
    if (isLogIn) {
      api
        .getUserData()
        .then((dataUser) => {
          setCurrentUser(dataUser);
        })
        .catch((error) => {
          serverError();
          console.log(error);
        });
    }
  }, [isLogIn]);

  //* user edit
  const editUserInfo = (name, email) => {
    console.log(name, email);
    api
      .editUserData(name, email)
      .then((data) => {
        setCurrentUser(data);
        handleInfoPopup(true);
        SetInfoPopupText("Данные пользователя успешно обновлены");
      })
      .catch((error) => {
        handleInfoPopup(false);
        if (error.includes("409")) {
          SetInfoPopupText("Пользователь с таким email уже существует");
        } else {
          SetInfoPopupText("При обновлении профиля произошла ошибка.");
        }
        console.log(error);
      });
  };

  //* movies
  const saveMovie = (movie) => {
    api
      .saveMovie(movie)
      .then((newMovie) => {
        setUserMovieList([...userMovieList, newMovie]);
      })
      .catch((error) => {
        serverError();
        console.log(error);
      });
  };

  const deleteMovie = (movie) => {
    api
      .deleteMovie(movie._id)
      .then(() => {
        setUserMovieList((list) =>
          list.filter((item) => item._id !== movie._id),
        );
      })
      .catch((error) => {
        serverError();
        console.log(error);
      });
  };

  useEffect(() => {
    moviesApi
      .getMoviesData()
      .then((dataMovies) => {
        setServerMovies([...dataMovies]);
      })
      .catch((error) => {
        SetGetError(true);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isLogIn) {
      api
        .getUsersMovies()
        .then((dataMovies) => {
          setUserMovieList([...dataMovies]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLogIn]);

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

  //*WINDOW SIZE -----
  //&set start window size
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  //&set resize
  useEffect(() => {
    const windowSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", windowSize);
    return () => {
      window.removeEventListener("resize", windowSize);
    };
  }, []);

  //&render after resize
  useEffect(() => {
    if (windowSize < 636) {
      setNumberOfMovies(5);
    } else if (windowSize < 990) {
      setNumberOfMovies(8);
    } else if (windowSize < 1280) {
      setNumberOfMovies(15);
    } else {
      setNumberOfMovies(16);
    }
  }, [windowSize]);

  //&click add movies more
  const clickOnMoreMovies = () => {
    if (windowSize > 1279) {
      setNumberOfMovies(numberOfMovies + 4);
    } else if (windowSize > 989) {
      setNumberOfMovies(numberOfMovies + 3);
    } else {
      setNumberOfMovies(numberOfMovies + 2);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
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
              <ProtectedRoute
                element={Movies}
                isLogIn={isLogIn}
                movies={movies}
                numberOfMovies={numberOfMovies}
                clickOnMoreMovies={clickOnMoreMovies}
                saveMovie={(movie) => {
                  saveMovie(movie);
                }}
                deleteMovie={(movie) => {
                  deleteMovie(movie);
                }}
                userMovieList={userMovieList}
                moviesLength={moviesLength}
                handleInfoPopup={handleInfoPopup}
                SetInfoPopupText={SetInfoPopupText}
                setMovies={setMovies}
                setUserMovieList={setUserMovieList}
                serverMovies={serverMovies}
                setMoviesLength={setMoviesLength}
                getError={getError}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLogIn={isLogIn}
                movies={userMovieList}
                clickOnMoreMovies={clickOnMoreMovies}
                deleteMovie={(movie) => {
                  deleteMovie(movie);
                }}
                userMovieList={userMovieList}
                setUserMovieList={setUserMovieList}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                isLogIn={isLogIn}
                handleSignout={handleSignout}
                editUserInfo={editUserInfo}
              />
            }
          />
          <Route
            path="/signup"
            element={
              isLogIn ? (
                <Navigate to="/" />
              ) : (
                <Register
                  SetInfoPopupText={SetInfoPopupText}
                  handleInfoPopup={handleInfoPopup}
                  handleSignin={handleSignin}
                />
              )
            }
          />
          <Route
            path="/signin"
            element={
              isLogIn ? (
                <Navigate to="/" />
              ) : (
                <Login
                  handleSignin={handleSignin}
                  SetInfoPopupText={SetInfoPopupText}
                  handleInfoPopup={handleInfoPopup}
                />
              )
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
        <InfoPopup
          isInfoPopupOpen={isInfoPopupOpen}
          closePopup={closePopup}
          isSuccessfullOperation={isSuccessfullOperation}
          infoPopupText={infoPopupText}
        ></InfoPopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
