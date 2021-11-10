import { useState } from 'react';
import './Register.css';
import EntryWindowForm from '../EntryWindowForm/EntryWindowForm';

function Register({ onRegister }) {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(registerData);
  };



  return (
    <EntryWindowForm handleSubmit={handleSubmit} buttonSign='button-signup' welcome='Добро пожаловать!' nameButton='Зарегистрироваться' signText='Уже зарегистрированы?' signin="/signin" nameLink="Войти">      
        <fieldset className="form-register">
          <p className="register__name">Имя</p>
          <input id="name" className="register__form-text" placeholder='Имя' name="name" type="name" autoComplete="name" value={registerData.name || ""} required
            onChange={handleChange} />
          <p className="register__name">E-mail</p>
          <input id="email" className="register__form-text" placeholder='Email' name="email" type="email" autoComplete="email" value={registerData.email || ""} required
            onChange={handleChange} />
          <p className="register__name">Пароль</p>
          <input id="password" className="register__form-text register__form-text_color" placeholder='Пароль' name="password" type="password" autoComplete="new-password" value={registerData.password || ""}
            required
            onChange={handleChange} />
          <span id="inputPasswordError" className="error">Что-то пошло не так...</span>
        </fieldset>        
    </EntryWindowForm>
  )
}

export default Register;