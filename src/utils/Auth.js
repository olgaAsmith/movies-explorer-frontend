import { hostURL } from "./config";

export const registration = (name, email, password) => {
  return fetch(`${hostURL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const authorize = (email, password) => {
  return fetch(`${hostURL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Ошибка авторизации"); // Ошибка в случае неправильного логина/пароля
      }
    })
    .catch((err) => {
      throw err;
    });
};

export const checkToken = () => {
  return fetch(`${hostURL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .catch(err => console.log(err))
}

export const logout = () => {
  return fetch(`${hostURL}/signout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => console.log(err));
};
