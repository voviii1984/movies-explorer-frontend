import { NavLink, Link } from 'react-router-dom';

import './PopupWithForm.css';

function PopupWithForm(props) {
    return (
        <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <ul className="popup__form">
                    <li><NavLink to="/" className="popup__text" onClick={props.onClose}>Главная</NavLink></li>
                    <li><NavLink to="/movies" activeClassName="popup__text_active" className="popup__text" onClick={props.onClose}>Фильмы</NavLink></li>
                    <li><NavLink to="/saved-movies" activeClassName="popup__text_active" className="popup__text" onClick={props.onClose}>Сохранённые фильмы</NavLink></li>
                    <li>
                        <Link to="/profile" className="profile__text" onClick={props.onClose}>
                            Аккаунт
                            <div className="profile__account_all-image"></div>
                        </Link>
                    </li>
                </ul>
                <button onClick={props.onClose} type="reset" className="popup__close"></button>
            </div>
        </section>
    )
}

export default PopupWithForm;