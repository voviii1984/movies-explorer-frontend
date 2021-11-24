import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import * as MoviesApi from '../../utils/MoviesApi';
import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as authMovies from '../../utils/authMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import filterMovies from "../../utils/FilterMovies";            
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'; 
import displayingNumberOfCards from '../../utils/displayingNumberOfCards'; 
import GetResize from "../../utils/GetResize"; 
import showErrorMsg from "../../utils/showErrorMsg"; 
import { MESSAGE } from "../../utils/constants"; 

import './App.css';
import { optionsMovies } from '../Constants/Constant';
export const BASE_URL = optionsMovies.baseUrl;


function App() {
  let width = GetResize();
  const [isLoggedIn, setIsLoggedIn] = useState(undefined); // авторизация
  const [isPlacePopupOpen, setIsPlacePopupOpen] = useState(false); // открытие попап меню бургера
  const [currentUser, setCurrentUser] = useState({});

  const [isLoading, setIsLoading] = useState(false);// Загрузка 
  
  const [displayingMovies, setDisplayingMovies] = useState([]);// показать карточки movies
  const [isShortMovies, setIsShortMovies] = useState(false);
  
  const [isNotFound, setIsNotFound] = useState(false);
  const [isNumberOfCards, setIsNumberOfCards] = useState(0);
  const [isNumberOfCardsAdd, setIsNumberOfCardsAdd] = useState(0);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [infoTooltipDone, setInfoTooltipDone] = useState(false);
 
  const [showSavedMovies, setShowSavedMovies] = useState([]);
  const [isAllSavedMovies, setAllSavedMovies] = useState([]);
  const [isShortSavedMovies, setIsShortSavedMovies] = useState(false);
  const [isNotFoundSaved, setIsNotFoundSaved] = useState(false);
  const [isMessageForUser, setMessageForUser] = useState('');

  const history = useHistory();
  
  /*useEffect(() => {
   //setIsLoading(true)
     if (isLoggedIn) {
       apiMovies.getAllMovies()
         .then((res) => {          
           setDisplayingMovies(res)
           console.log(apiMovies.getAllMovies())
         })
         .catch((err) => {
           console.log(`Ошибка: ${err}`);
         });
     }
   }, [isLoggedIn])*/

   function getMessageForUser(err) {
    setInfoTooltipDone(false);
    setIsInfoTooltip(true);
    setMessageForUser(showErrorMsg(err));
  }
  
  function getUserInfo() { //handleUpdateUser
    return MainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        getMessageForUser(err); //
        console.log(`Ошибка: ${err}`);
      });
  }

  useEffect(() => {
    if (isLoggedIn) {
      return MainApi.getNewMovies() // getSavedMovies
        .then((res) => {
          const movies = res.map((movie) => {
            return { ...movie };
          });
          setAllSavedMovies(movies);
          localStorage.setItem("savedMovies", JSON.stringify(movies));
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.loggedIn === "true") {
      return MainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          getMessageForUser(err);
          console.log(`Ошибка: ${err}`);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  function deleteData() {
    setIsLoggedIn(false);
    localStorage.clear();
  }

  useEffect(() => {
    if (localStorage.loggedIn === "true") {
      setIsLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
    } else {
      deleteData();
    }
  }, [isLoggedIn]);
  
  function handleUpdateProfile({ name, email }) { 
    return MainApi.patchProfile({ name, email }) 
      .then((res) => {
        setInfoTooltipDone(true);
        setIsInfoTooltip(true);
        setMessageForUser(MESSAGE.SUCCESSFUL_UPDATE);
        setCurrentUser(res);
      })
      .catch((err) => {
        getMessageForUser(err);
        console.log(`Ошибка: ${err}`);
      });
  }
  
  const onRegister = ({ name, email, password }) => { 
    setIsLoading(true);
    return authMovies.register({ name, email, password })
      .then(() => {
        onLogin({ email, password });
      })
      .catch((err) => {
        getMessageForUser(err);
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  const onLogin = ({ email, password }) => { 
    setIsLoading(true);
    return authMovies.authorize({ email, password })
      .then((data) => {
        localStorage.setItem("loggedIn", "true");
        getUserInfo();
        setIsLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        getMessageForUser(err);
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  const signOut = () => {
    setIsLoading(true);
    return authMovies.signOut()
      .then((data) => {
        setDisplayingMovies([]);
        setShowSavedMovies([]);
        deleteData();
        history.push("/");
      })
      .catch((err) => {
        getMessageForUser(err);
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    if (!localStorage.movies) {
      return MoviesApi.getAllMovies() // getMovies
        .then((res) => {
          const movies = res.map((movie) => {
            return {
              ...movie,
              image: `${BASE_URL}${movie.image.url}`,
              trailer: movie.trailerLink,
              movieId: movie.id,
              thumbnail: `${BASE_URL}${movie.image.formats.thumbnail.url}`,
            };
          });
          localStorage.setItem("movies", JSON.stringify(movies));
        })
        .catch((err) => {
          getMessageForUser(err);
          console.log(`Ошибка: ${err}`);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLoggedIn]);
  
  const getNewMovies = () => { 
    setIsLoading(true);
    return MainApi.getNewMovies() 
      .then((res) => {
        const movies = res.map((movie) => {
          return { ...movie };
        });
        setAllSavedMovies(movies);
        localStorage.setItem("savedMovies", JSON.stringify(movies));
      })
      .catch((err) => {
        getMessageForUser(err);
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function notFoundMovies(filteredMovies) { 
    if (!filteredMovies.length) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }

  function notFoundSavedMovies(filteredMovies) { 
    if (!filteredMovies.length) {
      setIsNotFoundSaved(true);
    } else {
      setIsNotFoundSaved(false);
    }
  }

  function handleSearchForMovies(req, place) {
    if (place === localStorage.movies) {
      const filteredMovies = filterMovies(
        JSON.parse(place),
        req,
        isShortMovies
      );
      notFoundMovies(filteredMovies);
      return setDisplayingMovies(filteredMovies);
    } else {
      const filteredMovies = filterMovies(
        JSON.parse(place),
        req,
        isShortSavedMovies
      );
      notFoundSavedMovies(filteredMovies);
      return setShowSavedMovies(filteredMovies);
    }
  }

  useEffect(() => {
    if (localStorage.movies && localStorage.request) {
      const filteredMovies = filterMovies(
        JSON.parse(localStorage.movies),
        localStorage.request,
        isShortMovies
      );
      notFoundMovies(filteredMovies);
      return setDisplayingMovies(filteredMovies);
    }
    return;
  }, [isShortMovies]);

  useEffect(() => {
    if (localStorage.savedMovies && localStorage.requestSaved) {
      const filteredMovies = filterMovies(
        JSON.parse(localStorage.savedMovies),
        localStorage.requestSaved,
        isShortSavedMovies
      );
      notFoundSavedMovies(filteredMovies);
      return setShowSavedMovies(filteredMovies);
    }
    return;
  }, [isShortSavedMovies]);

  useEffect(() => {
    const { numberOfCards, numberOfCardsAdd } =
    displayingNumberOfCards(width); 
    setIsNumberOfCardsAdd(numberOfCardsAdd);
    setIsNumberOfCards(numberOfCards); 
  }, [width, isShortMovies]);



  function handelChangeCheckboxMovies() {
    setIsShortMovies(!isShortMovies);
  }

  function handelChangeCheckboxSavedMovies() {
    setIsShortSavedMovies(!isShortSavedMovies);
  }

  function handleAddPlaceClick() {
    setIsPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setIsPlacePopupOpen(false);
    setIsInfoTooltip(false);
  };

  const deleteMovie = (movieId) => {
    return MainApi.deleteMovies(movieId)
      .then(() => {
        const movies = showSavedMovies.filter((movie) => movie._id !== movieId);
        setShowSavedMovies(movies);
        getNewMovies();
      })
      .catch((err) => {
        getMessageForUser(err);
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

function postNewMovies(movie) { 
  return MainApi.postNewMovies(movie)
    .then((movie) => {
      getNewMovies();
      setShowSavedMovies([movie, ...showSavedMovies]);
    })
    .catch((err) => {
      getMessageForUser(err);
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => setIsLoading(false));
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <Switch>
        <Route path='/signup'>
            {isLoggedIn ? (
              <Redirect to='/movies' />
            ) : (
              <Register isLoading={isLoading} onRegister={onRegister} />
            )}
          </Route>

          <Route path='/signin'>
            {isLoggedIn ? (
              <Redirect to='/movies' />
            ) : (
              <Login isLoading={isLoading} onLogin={onLogin} />
            )}
          </Route>

          <Route exact path='/'>
            <Main />
          </Route>
          
          <ProtectedRoute 
            path="/movies"
            component={Movies}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            displayingMovies={displayingMovies}
            handelChangeCheckbox={handelChangeCheckboxMovies}            
            getMovies={handleSearchForMovies}
            onAddPlace={handleAddPlaceClick}
            notFound={isNotFound}
            isNumberOfCardsAdd={isNumberOfCardsAdd}
            isNumberOfCards={isNumberOfCards}
            setIsNumberOfCards={setIsNumberOfCards} 
            isShortMovies={isShortMovies}
            createMovie={postNewMovies}
            deleteMovie={deleteMovie}
            isAllSavedMovies={isAllSavedMovies}
          />
          
          <ProtectedRoute             
            path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            onAddPlace={handleAddPlaceClick}
            getMovies={handleSearchForMovies}
            handelChangeCheckbox={handelChangeCheckboxSavedMovies}
            showSavedMovies={showSavedMovies}
            notFound={isNotFoundSaved}
            isShortMovies={isShortSavedMovies}
            deleteMovie={deleteMovie}
          />
          

          <ProtectedRoute 
            path="/profile"
            component={Profile}
            isLoading={isLoading}            
            isLoggedIn={isLoggedIn}
            signOut={signOut}
            onAddPlace={handleAddPlaceClick}
            updateUserInfo={handleUpdateProfile}
            />
          
          <Route path='/'>
            <NotFound history={history}/>
          </Route>

        </Switch>

        <PopupWithForm
          isOpen={isPlacePopupOpen}
          onClose={closeAllPopups}
        />

        <InfoTooltip
          onClose={closeAllPopups}
          isOpen={isInfoTooltip}
          infoTooltipDone={infoTooltipDone}
          message={isMessageForUser}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
