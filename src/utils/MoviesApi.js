import { optionsMovies } from '../components/Constants/Constant';
export const BASE_URL = optionsMovies.baseUrl;

const checkResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));
};

export const getAllMovies = () => {
    return fetch(`${BASE_URL}/beatfilm-movies`, {
      method: 'GET',
    }).then((res) => checkResponse(res));
  };