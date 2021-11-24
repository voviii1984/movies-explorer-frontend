import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function Movies({
    isAllSavedMovies,
    createMovie,
    notFound,
    handelChangeCheckbox,
    isLoading,
    isLoggedIn,
    getMovies,
    displayingMovies,
    onAddPlace,
    isNumberOfCardsAdd,
    isNumberOfCards,
    setIsNumberOfCards,
    isShortMovies,
    deleteMovie,
}) {
    const like = "movies__like";


    return (
        <section className="movies">
            <Header
                page="page"
                isLoggedIn={isLoggedIn}
                onAddPlace={onAddPlace}
            />
            <SearchForm
                handelChangeCheckbox={handelChangeCheckbox}
                getMovies={getMovies}
                place={localStorage.movies}
                isShortMovies={isShortMovies}
            />

            {isLoading ? ( <Preloader /> ) : (
                <MoviesCardList
                    typeButton="button"
                    nameButton="Like"
                    deleteMovie={deleteMovie}
                    path="movies"
                    isAllSavedMovies={isAllSavedMovies}
                    createMovie={createMovie}
                    movies={true}
                    isNumberOfCardsAdd={isNumberOfCardsAdd}
                    isNumberOfCards={isNumberOfCards}
                    setIsNumberOfCards={setIsNumberOfCards}
                    notFound={notFound}
                    displayingMovies={displayingMovies}
                    cardLikeButtonClassName={like}
                />)}
            <Footer />
        </section>
    )
}

export default Movies;