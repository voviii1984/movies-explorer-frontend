import './NotFound.css'

function NotFound(props){
    
    return (
        <>
        <h1 className="notfound__number">404</h1>
        <p className="notfound__text">Страница не найдена</p>
        <button className="notfound__back" onClick={() => props.history.goBack()}>Назад</button>
        </>
    )
}

export default NotFound;