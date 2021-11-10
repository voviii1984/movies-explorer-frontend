import './MoviesCard.css';

function MoviesCard(props) {
    return (
        <div className="movies__card">
            <div className="movies__card_about">
                <div className="movies__card_about_info">
                <h2 className="movies__card_about_name">Кино</h2>
                <p className="movies__card_about_time">1h44m</p>
                </div>
                <button type={props.type} name={props.name} className={props.like || props.deleteCard}></button>
            </div>
            <img src={props.foto} alt="Фильм" className="movies__image" />
        </div>
    )
}

export default MoviesCard;
