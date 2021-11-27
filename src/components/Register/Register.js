import './Register.css';
import { useState } from 'react';
import EntryWindowForm from '../EntryWindowForm/EntryWindowForm';
import Preloader from '../Preloader/Preloader';
import { useFormWithValidation } from '../Validation/UseFormWithValidation';
import {MESSAGE} from '../../utils/constants';

function Register({ onRegister, isLoading }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    name: '',
    email: '',
    password: '',
  });

  const [visible, setVisible] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(values);
  };

  function onBlur(evt) {
    const name = evt.target.name;
    setVisible({ ...visible, [name]: true });
  }

  return (
    <>
    {isLoading ? (
        <Preloader />
      ) : (
    <EntryWindowForm 
    handleSubmit={handleSubmit} 
    buttonSign='button-signup' 
    welcome='Добро пожаловать!' 
    nameButton='Зарегистрироваться' 
    signText='Уже зарегистрированы?' 
    signin="/signin" 
    nameLink="Войти" 
    errors={errors}
    isValid={isValid}
    
    >      
        <fieldset className="form-register">
          <p className="register__name">Имя</p>
          <input id="name" className="register__form-text" placeholder='Имя' name="name" type="name" autoComplete="name" required
            onChange={handleChange} onBlur={onBlur}/>
          <span id="inputNameError" className="error">{visible.name && errors.name && `${errors.name} ${MESSAGE.FORM.NAME}`}</span>
          <p className="register__name">E-mail</p>
          <input id="email" className="register__form-text" pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Email' name="email" type="email" autoComplete="email" required
            onChange={handleChange} onBlur={onBlur}/>
          <span id="inputEmailError" className="error">{visible.email && errors.email && `${errors.email} ${MESSAGE.FORM.EMAIL}`}</span>
          <p className="register__name">Пароль</p>
          <input id="password" className={!errors.password ? "register__form-text" : "register__form-text register__form-text_color"} minlength="4" maxlength="20" placeholder='Пароль' name="password" type="password" autoComplete="new-password" 
            required
            onChange={handleChange} onBlur={onBlur}/>
          <span id="inputPasswordError" className="error">{visible.password && errors.password && `${errors.password} ${MESSAGE.FORM.PASSWORD}`}</span>
        </fieldset>        
    </EntryWindowForm>
    )}
    </>
  )
}

export default Register;