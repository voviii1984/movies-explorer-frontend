// import { optionsMain } from '../components/Constants/Constant';
// export const BASE_URL = optionsMain.baseUrl;
export const BASE_URL = 'https://api.voviii1984.diplom.nomoredomains.work';

const checkResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));
};

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => checkResponse(res));
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    headers,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  })
    .then((res) => checkResponse(res));
};

export const signOut = () => {
  return fetch(`${BASE_URL}/users/signout`, {
    method: 'POST',
    credentials: 'include',
  })
    .then((res) => checkResponse(res));
};
