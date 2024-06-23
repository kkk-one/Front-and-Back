import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onLogin, onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegistering) {
      console.log('Регистрация нового пользователя:', username);
      setIsRegistering(false);
      if (onRegister) {
        onRegister(username, password);
      }
    } else {
      if (onLogin) {
        onLogin(username, password);
      }
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Регистрация' : 'Авторизация'}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Имя пользователя:
          </label>
          <input
            className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            Пароль:
          </label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">
          {isRegistering ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </form>
      <button className="toggle-button" onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Уже есть аккаунт? Войти' : 'Создать аккаунт'}
      </button>
    </div>
  );
}

export default LoginPage;
