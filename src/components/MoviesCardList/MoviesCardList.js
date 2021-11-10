import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movie1 from '../../images/movie1.png'
import movie2 from '../../images/movie2.png'
import movie3 from '../../images/movie3.png'
import movie4 from '../../images/movie4.png'

function MoviesCardList(props) {
    return (
        <section className="movies__card-list">
            <MoviesCard
                type={props.type}
                name={props.name}
                like={props.like}
                deleteCard={props.deleteCard}
                foto={movie1}
            />

            <MoviesCard
                type={props.type}
                name={props.name}
                like={props.like}
                deleteCard={props.deleteCard}
                foto={movie2}
            />

            <MoviesCard
                type={props.type}
                name={props.name}
                like={props.like}
                deleteCard={props.deleteCard}
                foto={movie3}
            />

            <MoviesCard
                type={props.type}
                name={props.name}
                like={props.like}
                deleteCard={props.deleteCard}
                foto={movie4}
            />
            <button tape="submit" className="search__more">Ещё</button>
        </section>
    )
}

export default MoviesCardList;
