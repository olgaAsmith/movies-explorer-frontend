import { hostURL } from "./config";

export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _check(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  //*user
  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      credentials: "include",
    }).then(this._check);
  }

  getMoviesData() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
      credentials: "include",
    }).then(this._check);
  }

  getUsersMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
      credentials: "include",
    }).then(this._check);
  }

  editUserData(newName, newEmail) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name: newName,
        email: newEmail,
      }),
    }).then(this._check);
  }

  //*movie
  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(movie),
    }).then(this._check);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
    }).then(this._check);
  }
}

export const api = new Api({
  baseUrl: hostURL,
  headers: {
    "Content-Type": "application/json",
  },
});
