import './Promo.css'
import promoLogo from '../../images/promoLogo.png'
import NavTab from '../NavTab/NavTab'

function Promo({sectionRef}) {
    return (
        <section className="promo">
            <div className="promo-lead">
                <div className="lead">
                    <h1 className="lead__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className="lead__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <img src={promoLogo} alt="Глобус" className="promo__logo" />
            </div>
            <NavTab scrollRef={sectionRef} />

        </section>
    )
}

export default Promo;
