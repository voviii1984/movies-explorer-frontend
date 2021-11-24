import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
    isAllSavedMovies,
    createMovie,
    path,
    deleteMovie,
    movies,
    notFound,
    displayingMovies,
    showSavedMovies,
    cardLikeButtonClassName,
    isNumberOfCardsAdd,
    isNumberOfCards,
    setIsNumberOfCards,
    typeButton,
    nameButton,
  }) {
    
  let moviesRender = [...displayingMovies];
  moviesRender.length = isNumberOfCards;
  const moreButtonVisible = moviesRender.length < displayingMovies.length;

  function handleMore() {
    return setIsNumberOfCards(isNumberOfCardsAdd + isNumberOfCards);
  }

    return (
        <section className="movies__card-list">
            {!notFound && (
        <>
          {moviesRender.map((card) => (
            <MoviesCard
              isAllSavedMovies={isAllSavedMovies}
              showSavedMovies={showSavedMovies}
              createMovie={createMovie}
              card={card}
              path={path}
              deleteMovie={deleteMovie}
              key={card.id || card._id}
              cardLikeButtonClassName={cardLikeButtonClassName}
              typeButton={typeButton}
              nameButton={nameButton}
            />
          ))}
        </>
      )}
            {notFound && <p className="movies__card_not-found">Ничего не найдено</p>}
      {movies && moreButtonVisible && (
            <button tape="submit" className="search__more" onClick={handleMore}>Ещё</button>
            )}
        </section>
    )
}

export default MoviesCardList;
