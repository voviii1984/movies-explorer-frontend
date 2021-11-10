import './Portfolio.css';

function Portfolio() {
    return (
        <>
            <h3 className="aboutMe__portfolio">Портфолио</h3>
            
            <div className="aboutMe__portfolio_link">
                <a href="https://voviii1984.github.io/how-to-learn/index.html" target="_blank" rel="noreferrer"  className="aboutMe__portfolio_link_text">Статичный сайт</a>
                <a href="https://voviii1984.github.io/how-to-learn/index.html" target="_blank" rel="noreferrer" className="aboutMe__portfolio_linkgit">                    
                </a>
            </div>
            
            <div className="aboutMe__portfolio_link">
                <a href="https://voviii1984.github.io/russian-travel/index.html" target="_blank" rel="noreferrer"  className="aboutMe__portfolio_link_text">Адаптивный сайт</a>
                <a href="https://voviii1984.github.io/russian-travel/index.html" target="_blank" rel="noreferrer" className="aboutMe__portfolio_linkgit">                    
                </a>
            </div>

            <div className="aboutMe__portfolio_link">
                <a href="https://voviii1984.student.nomoredomains.club" target="_blank" rel="noreferrer"  className="aboutMe__portfolio_link_text">Одностраничное приложение</a>
                <a href="https://voviii1984.student.nomoredomains.club" target="_blank" rel="noreferrer" className="aboutMe__portfolio_linkgit">                    
                </a>
            </div>
            
        </>
    )
}

export default Portfolio;
