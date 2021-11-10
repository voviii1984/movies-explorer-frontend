import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Movies(props) {
    const like = "movies__like_active";
    return (
        <section className="movies">
            <Header
            page="page"
            isLoggedIn={props.isLoggedIn}
            onAddPlace={props.onAddPlace}
            />
            <SearchForm />

            <MoviesCardList
                type="button"
                name="Like"
                like={like}
            />
            <Footer />
        </section>
    )
}

export default Movies;