import './AboutMe.css';
import PageName from '../PageName/PageName';
import Portfolio from '../Portfolio/Portfolio';
import foto from '../../images/foto.jpg';

function AboutMe() {
    return (
        <section className="aboutMe">
            <PageName name="Студент" />

            <div className="aboutMe__profile">
                <div className="aboutMe__profile_text">
                    <h2 className="aboutMe__name">Владимир</h2>
                    <h3 className="aboutMe__work">Фронтенд-разработчик, 37 лет</h3>
                    <p className="aboutMe__work_text">
                        Я родился и живу в Новосибирске.
                        Женат, двое детей сын и дочь. Я увлекаюсь горными лыжами.
                        Недавно начал кодить. С 2018 года работаю в компании АО "Тинькофф Банк".
                        Кодинг очень сильно затянул и изменил цели в жизни. Хочется далше развиваться в этом направлении.</p>
                    <div className="aboutMe__link">
                        <a href="https://t.me/voviii1984" target="_blank" rel="noreferrer" className="aboutMe__link_text">Telegram</a>
                        <a href="https://github.com/voviii1984" target="_blank" rel="noreferrer" className="aboutMe__link_text" >Github</a>
                    </div>
                </div>
                <img src={foto} alt="Фото" className="aboutMe__foto" />
            </div>
            <Portfolio />


        </section>
    )
}

export default AboutMe;
