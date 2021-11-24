import { Link } from 'react-router-dom';
import './EntryWindowForm.css'
import logo from '../../images/logo.png'

function EntryWindowForm(props) {
    
    return (
        <section className="form__window">
            <Link to="/" ><img src={logo} alt="Логотип" className="header__logo header__logo_sign" /></Link>
            
            <p className="form__window_welcome">{props.welcome}</p>
            <form onSubmit={props.handleSubmit} className="form">
                {props.children}
                <button className={props.isValid ? `form__window_button form__window_${props.buttonSign}` : `form__window_button form__window_${props.buttonSign} form__window_button-novalid`} disabled={!props.isValid}>{props.nameButton}</button>
            </form>

            <div className="register__signin">
                <p className="register__signin-text">{props.signText}</p>
                <Link to={props.signin} className="register__login-link">{props.nameLink}</Link>
            </div>
        </section>
    )
}

export default EntryWindowForm;