import './AboutProject.css'
import PageName from '../PageName/PageName'

function AboutProject(props) {
    return (
        <section className="about__project" ref={props.myRef}>
            <PageName name="О проекте" />
            
            <div className="about__project_table">
                <div className="about__project_table_section">
                    <h3 className="about__project_title">Дипломный проект включал 5 этапов</h3>
                    <p className="about__project_subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__project_table_section">
                    <h3 className="about__project_title">Дипломный проект включал 5 этапов</h3>
                    <p className="about__project_subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
            </div>

            <div className="about__project_period">
                <p className="about__project_period_time-backend">1 неделя</p>
                <p className="about__project_period_time-frontend">4 недели</p>
                <p className="about__project_period_backend-forntend">Back-end</p>
                <p className="about__project_period_backend-forntend">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;
