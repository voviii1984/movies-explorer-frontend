import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
    const deleteCard = "movies__delete";
    return (
        <section className="saved__movies">
            <Header
            page="page"
            isLoggedIn={props.isLoggedIn}
            onAddPlace={props.onAddPlace}
            />
            <SearchForm />

            <MoviesCardList
                type="reset"
                name="Delete"
                deleteCard={deleteCard}
            />
            <Footer />
        </section>
    )
}

export default SavedMovies;
