import { moviesURL } from "./config";

export default class MoviesApi {
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

  getMoviesData() {
    return fetch(this._url, {
      headers: this._headers,
    }).then(this._check);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: moviesURL,
  headers: {
    "Content-Type": "application/json",
  },
});
