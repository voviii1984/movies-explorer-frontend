import { optionsMain } from '../components/Constants/Constant';
export const BASE_URL = optionsMain.baseUrl

const checkResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));
};

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
      headers,
      method: 'GET',
      credentials: 'include',      
    })
      .then((res) => checkResponse(res));
};

export const patchProfile = ({ name, email }) => {
    return fetch(`${BASE_URL}/users/me`, {
      headers,
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({ name, email })     
    })
      .then((res) => checkResponse(res));
};   

export const getNewMovies = () => {
    return fetch(`${BASE_URL}/movies/`, {
      headers,
      method: 'GET',
      credentials: 'include',           
    })
      .then((res) => checkResponse(res));
};    

export const postNewMovies = (movie) => {
    return fetch(`${BASE_URL}/movies`, {
      headers,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ 
        country: movie.country || "Нет данных",
        director: movie.director || "Нет данных",
        duration: movie.duration || 0,
        year: movie.year || "Нет данных",
        description: movie.description || "Нет данных",
        image: movie.image,
        trailer: movie.trailer || "Нет данных",
        thumbnail: movie.thumbnail || "Нет данных",
        movieId: movie.movieId,
        nameRU: movie.nameRU || "Нет данных",
        nameEN: movie.nameEN || "Нет данных",
       })     
    })
      .then((res) => checkResponse(res));
};     

export const deleteMovies = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
      headers,
      method: 'DELETE',
      credentials: 'include',           
    })
      .then((res) => checkResponse(res));
};    
