import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <header className={`header__${props.page}`}>
            <Link to="/" ><img src={logo} alt="Логотип" className="header__logo" /></Link>
            
            <Navigation 
            isLoggedIn={props.isLoggedIn}
            onAddPlace={props.onAddPlace}
            color={props.color}
            account={props.account}
            image={props.image}
            />
            
        </header>
    )
}

export default Header;