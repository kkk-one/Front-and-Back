import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onLogin, onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        onLogin(data);
      } else {
        setErrorMessage('Неверное имя пользователя или пароль');
      }
    } catch (error) {
      setErrorMessage('Ошибка при авторизации');
      console.error('Ошибка при авторизации:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        onRegister(data);
      } else {
        setErrorMessage('Ошибка при регистрации');
      }
    } catch (error) {
      setErrorMessage('Ошибка при регистрации');
      console.error('Ошибка при регистрации:', error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegistering) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Регистрация' : 'Авторизация'}</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
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
