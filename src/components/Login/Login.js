import {useState} from 'react';
import './Login.css';
import EntryWindowForm from '../EntryWindowForm/EntryWindowForm';

function Login({ onLogin }) {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (evt) => {
        const { name, value } = evt.target;
        setLoginData({
          ...loginData,
          [name]: value,
        });
      };

      const handleSubmit = (evt) => {
        evt.preventDefault();
        onLogin(loginData);
      };

    return (
      <EntryWindowForm handleSubmit={handleSubmit} buttonSign='button-signin' welcome='Рады видеть!' nameButton='Войти' signText='Ещё не зарегистрированы?' signin="/signup" nameLink="Регистрация">      
      <fieldset className="form-register">
        <p className="register__name">E-mail</p>
        <input id="email" className="register__form-text" placeholder='Email' name="email" type="email" autoComplete="email" value={loginData.email || ""} required
          onChange={handleChange} />
        <p className="register__name">Пароль</p>
        <input id="password" className="register__form-text" placeholder='Пароль' name="password" type="password" autoComplete="new-password" value={loginData.password || ""}
          required
          onChange={handleChange} />
        <span id="inputPasswordError" className="error">Что-то пошло не так...</span>
      </fieldset>        
  </EntryWindowForm>
    )
}

export default Login;