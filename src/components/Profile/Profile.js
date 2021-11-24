import './Profile.css';
import { useEffect, useContext } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../Validation/UseFormWithValidation';
import { MESSAGE } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';


function Profile({
  updateUserInfo,
  isLoading,
  isLoggedIn,
  signOut,
  onAddPlace,
}) {

  const currentUser = useContext(CurrentUserContext);
  const { setValues, values, handleChange, errors, isValid } =
    useFormWithValidation({ name: currentUser.name, email: currentUser.email });

  const defaultName = currentUser.name === values.name ? false : true;
  const defaultEmail = currentUser.email === values.email ? false : true;

  useEffect(() => {
    const { name, email } = currentUser;
    setValues({ name, email });
  }, [currentUser, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();
    updateUserInfo({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <>
      <Header
        page="page"
        isLoggedIn={isLoggedIn}
        onAddPlace={onAddPlace}
      />
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
          <h2 className="profile__name">{`Привет, ${currentUser.name}!`}</h2>
          <form onSubmit={handleSubmit} className="profile__aboute">

            <p className="profile__aboute_user profile__aboute_user-use">Имя
              <input type="text" name="name" id="inputname" pattern="[a-zA-ZА-Яа-яёЁ\s_-]+$" placeholder="Имя" value={values.name || ""} minLength={2} maxLength={30} className="profile__aboute_user-change" onChange={handleChange} required />
            </p>
            <span id="inputNameError" className="error">{errors.name && `${errors.name} ${MESSAGE.FORM.NAME}`}</span>

            <p className="profile__aboute_user profile__aboute_user-use">E-mail
              <input type="email" name="email" id="inputemail" pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" value={values.email || ""} className="profile__aboute_user-change" onChange={handleChange} required />
            </p>
            <span id="inputEmailError" className="error">{errors.email && `${errors.email} ${MESSAGE.FORM.EMAIL}`}</span>

            <div className="profile__aboute_button">
              <button type="submit" name="Edit" className={!isValid ? "profile__aboute_edid-valid" : "profile__aboute_edit"} disabled={!isValid || (!defaultName && !defaultEmail)}>Редактировать</button>
              <Link to="/" className="profile__aboute_out" onClick={signOut}>Выйти из аккаунта</Link>
            </div>
          </form>
        </>
      )}
    </>
  )
}

export default Profile;
