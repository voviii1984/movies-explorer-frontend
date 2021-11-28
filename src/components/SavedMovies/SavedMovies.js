import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({
    deleteMovie,
    handelChangeCheckbox,
    isShortMovies,
    getMovies,
    notFound,
    isLoading,
    isLoggedIn,
    onAddPlace,
    showSavedMovies,
}) {
    const deleteCard = "movies__delete";
    return (
        <section className="saved__movies">
            <Header
                page="page"
                isLoggedIn={isLoggedIn}
                onAddPlace={onAddPlace}
                account="Аккаунт"
                image="all-image"
            />
            <SearchForm
                handelChangeCheckbox={handelChangeCheckbox}
                isShortMovies={isShortMovies}
                savedMovies={true}
                place={localStorage.savedMovies}
                getMovies={getMovies}
            />
            {!notFound && isLoading ? (
                <Preloader />
            ) : (
                <MoviesCardList
                    typeButton="reset"
                    nameButton="Delete"
                    path="savedMovies"
                    cardLikeButtonClassName={deleteCard}
                    deleteMovie={deleteMovie}
                    notFound={notFound}
                    isNumberOfCards={showSavedMovies.length}
                    displayingMovies={showSavedMovies}
                />
            )}
            <Footer />
        </section>
    )
}

export default SavedMovies;
