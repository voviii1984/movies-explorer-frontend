import { useState } from 'react';
import './Login.css';
import Preloader from '../Preloader/Preloader';
import EntryWindowForm from '../EntryWindowForm/EntryWindowForm';
import { useFormWithValidation } from '../Validation/UseFormWithValidation';
import {MESSAGE} from '../../utils/constants';

function Login({ onLogin, isLoading }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation({
    email: "",
    password: "",
  });

  const [visible, setVisible] = useState({
    email: false,
    password: false,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values);
  };

  function onBlur(evt) {
    const name = evt.target.name;
    setVisible({ ...visible, [name]: true });
  }

  return (
    <>
      {isLoading ? ( <Preloader /> ) :
        (
          <EntryWindowForm 
          handleSubmit={handleSubmit} 
          buttonSign='button-signin' 
          welcome='Рады видеть!' 
          nameButton='Войти' 
          signText='Ещё не зарегистрированы?' 
          signin="/signup" 
          nameLink="Регистрация"
          errors={errors}
          isValid={isValid}
          >
            <fieldset className="form-register">
              <p className="register__name">E-mail</p>
              <input id="email" className="register__form-text" pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Email' name="email" type="email" autoComplete="email" required
                onChange={handleChange} onBlur={onBlur}/>
                <span id="inputPasswordError" className="error">{visible.email && errors.email && `${errors.email} ${MESSAGE.FORM.EMAIL}`}</span>
              <p className="register__name">Пароль</p>
              <input id="password" className={!errors.password ? "register__form-text" : "register__form-text register__form-text_color"} minlength="4" maxlength="20" placeholder='Пароль' name="password" type="password" autoComplete="new-password" 
                required onChange={handleChange} onBlur={onBlur}/>
              <span id="inputPasswordError" className="error">{visible.password && errors.password && `${errors.password} ${MESSAGE.FORM.PASSWORD}`}</span>
            </fieldset>
          </EntryWindowForm>
        )}
    </>
  )
}

export default Login;