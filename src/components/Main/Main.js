import './Main.css';
import Header from '../Header/Header'
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import { useRef } from 'react';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';


function Main(props) {
    const sectionRef = useRef(null);
    
    return (
        <main className="content">
            <Header 
            page="main"
            isLoggedIn={props.isLoggedIn}
            color="burger-color"          
            onAddPlace={props.onAddPlace}
            image="main-image"
            />
            <Promo sectionRef={sectionRef} />

            <AboutProject myRef={sectionRef} />

            <Techs />

            <AboutMe />

            <Footer />
        </main>
    )
}
export default Main;
