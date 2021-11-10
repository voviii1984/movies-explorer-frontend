import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <h3 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__nav">
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <nav>
                    <ul class="footer__links">
                        <li className="footer__link-li"><a href="https://practicum.yandex.ru" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a></li>
                        <li className="footer__link-li"><a href="https://github.com/voviii1984" target="_blank" rel="noreferrer" className="footer__link">Github</a></li>
                        <li className="footer__link-li"><a href="https://t.me/voviii1984" target="_blank" rel="noreferrer" className="footer__link">Telegram</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Footer;