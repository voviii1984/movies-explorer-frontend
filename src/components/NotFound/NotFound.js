import { useHistory } from 'react-router-dom';
import './NotFound.css'

function NotFound(props){
    const history = useHistory();
    return (
        <>
        <h1 className="notfound__number">404</h1>
        <p className="notfound__text">Страница не найдена</p>
        <button className="notfound__back" onClick={() => history.goBack()}>Назад</button>
        </>
    )
}

export default NotFound;