import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const location = useLocation();

  const [isSave, SetIsSave] = React.useState(false);

  //* match id movies
  React.useEffect(() => {
    props.userMovieList.some((movie) => {
      if (movie.movieId === props.id) {
        SetIsSave(true);
      }
    });
  }, [props.userMovieList, props.id]);

  //* source for beatfilms
  const imageSrc = `https://api.nomoreparties.co${props.image.url}`;

  //*movie time
  const movieDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч${minutes}м`;
  };

  const handleSaveClick = () => {
    if (!isSave) {
      const movie = {
        country: props.country,
        director: props.director,
        duration: props.duration.toString(),
        year: props.year,
        description: props.description,
        image: imageSrc,
        trailerLink: props.trailerLink,
        thumbnail: imageSrc,
        movieId: props.id,
        nameRU: props.nameRU,
        nameEN: props.nameEN,
      };
      props.saveMovie(movie);
      SetIsSave(true);
    } else {
      const findMovie = props.userMovieList.find(
        (movie) => movie.movieId === props.id,
      );
      props.deleteMovie(findMovie);
      SetIsSave(false);
    }
  };

  const handleDeleteClick = () => {
    props.deleteMovie(props);
    SetIsSave(false);
  };

  const openTrailer = () => {
    window.location.href = props.trailerLink;
  };

  return (
    <li className="movies-card__item">
      <img
        className="link movies-card__image"
        src={location.pathname === "/saved-movies" ? props.image : imageSrc}
        alt={`Обложка фильма ${props.nameRU}`}
        onClick={openTrailer}
      />
      <div className="movies-card__info">
        <p className="text movies-card__name">{props.nameRU}</p>
        {location.pathname === "/saved-movies" ? (
          <button
            className="button movies-card__delete-button"
            type="button"
            onClick={handleDeleteClick}
          ></button>
        ) : (
          <button
            className={`button movies-card__save-button ${
              isSave ? "movies-card__save-button_green" : ""
            }`}
            type="button"
            onClick={handleSaveClick}
          ></button>
        )}
      </div>
      <p className="text movies-card__time">{movieDuration(props.duration)}</p>
    </li>
  );
}

export default MoviesCard;
