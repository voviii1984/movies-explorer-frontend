import unionDone from '../../images/uniondone.png';
import unionWrong from '../../images/unionwrong.png';
import './InfoTooltip.css';

function InfoTooltip(props) {
    return (

        <section className={`popup__tooltip ${props.isOpen ? 'popup__tooltip_opened' : ''}`}>
            <div className="popup__tooltip-container">
                <img alt="Info" className="popup__tooltip-image" src={props.infoTooltipDone ? unionDone : unionWrong} />
                <h2 className="popup__tooltip-text popup__tooltip-text_title">{props.message}</h2>

                <button onClick={props.onClose} type="reset" className="popup__tooltip-close"></button>
            </div>
        </section>
    )
}

export default InfoTooltip;