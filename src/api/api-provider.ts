import { apiUrl } from "../constant/api";
import { IAuth } from "../types/IAuth";
import { User } from "../types/users";

const localStorageKey = "__auth-token__";

export const getToken = () => localStorage.getItem(localStorageKey);

const hanleUserResponse = ({ user }: { user: User }) => {
  localStorage.setItem(localStorageKey, user.token);
  return user;
};

export const login = (data: IAuth) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return hanleUserResponse(await res.json());
    } else {
      return Promise.reject(await res.json());
    }
  });
};

export const register = (data: IAuth) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return hanleUserResponse(await res.json());
    } else {
      return Promise.reject(await res.json());
    }
  });
};

export const logout = async () => localStorage.removeItem(localStorageKey);
