import './Techs.css';
import PageName from '../PageName/PageName';

function Techs () {
    return (
        <section className="techs">
                <PageName name="Технологии" />
                <h2 className="techs__title">7 технологий</h2>
                <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

                <div className="techs__about">
                    <p className="techs__about_icon">HTML</p>
                    <p className="techs__about_icon">CSS</p>
                    <p className="techs__about_icon">JS</p>
                    <p className="techs__about_icon">React</p>
                    <p className="techs__about_icon">Git</p>
                    <p className="techs__about_icon">Express.js</p>
                    <p className="techs__about_icon">mongoDB</p>                    
                </div>
            </section>
    )
}

export default Techs;
