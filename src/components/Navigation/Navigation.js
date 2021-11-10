import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
        <div className="header__menu">
            {props.isLoggedIn ? (
                <>
                    <div className="header__menu-login">
                        <NavLink to="/movies" activeClassName="header__text-login_active" className="header__text-login" >Фильмы</NavLink>
                        <NavLink to="/saved-movies" activeClassName="header__text-login_active" className="header__text-login" >Сохранённые фильмы</NavLink>
                        <Link to="/profile" className="profile__text-login" >
                            Аккаунт
                            <div className="profile__account"></div>
                        </Link>
                    </div>
                    <button className="header__menu-burger" onClick={props.onAddPlace}></button>
                </>
            ) : (
                <>
                    <Link to="/signup" className="header__text" >Регистрация</Link>
                    <Link to="/signin" className="header__text header__text_signin" >Войти</Link>
                </>
            )}

        </div>
    )
}

export default Navigation;