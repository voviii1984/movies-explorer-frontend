import './MoviesCard.css';
import { useState } from 'react';

//import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function MoviesCard({
    isAllSavedMovies,
    card,
    createMovie,
    path,
    deleteMovie,
    cardLikeButtonClassName,
    typeButton,
    nameButton,
  }) {
    const [isLoading, setIsLoading] = useState(false);
  const movie =
    path === "movies"
      ? isAllSavedMovies.find((movie) => movie.movieId === card.movieId)
      : false;

  function handelClick() {
    setIsLoading(true);
    if (path === "savedMovies") {
      return deleteMovie(card._id).finally(() => setIsLoading(false));
    } else if (movie) {
      return deleteMovie(movie._id).finally(() => setIsLoading(false));
    } else {
      return createMovie(card).finally(() => setIsLoading(false));
    }
  }

    function getFormattedDuration(duration) {
        const hour = Math.floor(duration / 60); // целое количество часов
        const minutes = duration % 60; // остаток от деления на 60
        return `${hour}ч ${minutes}м`
    }

    

    return (
        <div className="movies__card">
            <div className="movies__card_about">
                <div className="movies__card_about_info">
                <h2 className="movies__card_about_name">{card.nameRU}</h2>
                <p className="movies__card_about_time">{getFormattedDuration(card.duration)}</p>
                </div>
                <button 
                type={typeButton} 
                name={nameButton} 
                className={`link ${cardLikeButtonClassName} ${
                (movie && "movies__like_active") || ""
              } ${isLoading && `movies__like`}`} 
              onClick={handelClick}
              >
              </button>
            </div>
            <a href={card.trailer} rel="noopener noreferrer" target="_blank">
            <img src={card.image} alt={card.nameRU} className="movies__image" />
            </a>
        </div>
    )
}

export default MoviesCard;
