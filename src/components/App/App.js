
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as authMuvies from '../../utils/authMuvies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isPlacePopupOpen, setIsPlacePopupOpen] = useState(false);
  const history = useHistory();
  
  function handleAddPlaceClick() {
    setIsPlacePopupOpen(true);
  };
  
  function closeAllPopups() {
    setIsPlacePopupOpen(false);
    
  };

  const tokenCheck = () => {

    authMuvies
      .getContent()
      .then(({ email }) => {
       
        
        setIsLoggedIn(true);

      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/movies');
    }
  }, [isLoggedIn]);

  const onRegister = (data) => {
    return authMuvies
      .register(data)
      .then(() => {
        
        
        setIsLoggedIn(false);
        history.push('/');
      })
      .catch((err) => {
        
        console.log(`Ошибка: ${err}`);
      })
  };

  const onLogin = ({ email, password }) => {
    return authMuvies
      .authorize({ email, password })
      .then((data) => {
        
        
        setIsLoggedIn(true);
        
        history.push("/movies");
      })
      .catch((err) => {
        
        console.log(`Ошибка: ${err}`);
      })
  };

  

  return (
    <div className="page">
      
      <Switch>
        <Route path='/signup'>
          <Register onRegister={onRegister} />
        </Route>

        <Route path="/signin">
          <Login onLogin={onLogin} />
        </Route>

        <Route exact path='/'>
          <Main />
        </Route>

        <Route path='/movies'>
          <Movies
            isLoggedIn={isLoggedIn}
            onAddPlace={handleAddPlaceClick}
          />
        </Route>

        <Route path='/saved-movies'>
          <SavedMovies
            isLoggedIn={isLoggedIn}
            onAddPlace={handleAddPlaceClick}
          />
        </Route>

        <Route path='/profile'>
          <Profile
            isLoggedIn={isLoggedIn}
            onAddPlace={handleAddPlaceClick}
          />
        </Route>

        <Route path='/404'>
          <NotFound />
        </Route>
        
      </Switch>

      <PopupWithForm 
      isOpen={isPlacePopupOpen}
      onClose={closeAllPopups}
      />
      

    </div>
  );
}

export default App;
