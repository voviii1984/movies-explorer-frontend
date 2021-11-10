import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile(props) {

    return (
        <>
            <Header 
            page="page"
            isLoggedIn={props.isLoggedIn}
            onAddPlace={props.onAddPlace}
            />

            <h2 className="profile__name">Привет, Владимир!</h2>
            <div className="profile__aboute">
                <form className="profile__aboute_user">
                    <p className="profile__aboute_user-use">Имя</p>
                    <input type="text" id="inputName" minLength="2" maxLength="40" required placeholder="Имя" className="profile__aboute_user-change" />
                    <span id="inputNameError" className="error"></span>
                    
                </form>
                <form className="profile__aboute_user">
                    <p className="profile__aboute_user-use">E-mail</p>
                    
                    <input id="inputEmail" className="profile__aboute_user-change" placeholder='E-mail' type="email" autoComplete="email" required />
                    <span id="inputEmailError" className="error"></span>
                </form>
            </div>
            <div className="profile__aboute_button">
                <button type="button" name="Edit" className="profile__aboute_edit">Редактировать</button>
                <Link to="/" className="profile__aboute_out" onClick={props.onLogOut}>Выйти из аккаунта</Link>
            </div>
        </>
    )
}

export default Profile;
