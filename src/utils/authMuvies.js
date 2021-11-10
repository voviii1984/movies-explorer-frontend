import { options } from '../components/Constants/Constant';
export const BASE_URL = options.baseUrl;

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

export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers,
    method: 'GET',
    credentials: 'include',
  }).then((res) => {
    
    return checkResponse(res);    
  });
};
