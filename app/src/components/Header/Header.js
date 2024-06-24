import React from 'react';
import './Header.css';
import logo from './logo.png'


export const Header = () => {
  return (
      <header className="header">
          <div className="header-logo">
              <img src={logo} alt="Логотип"/>
          </div>
          <nav>
              <ul className="nav-links">
                  <li><a href="/">Главная</a></li>
                  <li><a href="/login">Вход</a></li>
                  <li><a href="/history">История запросов</a></li>
              </ul>
          </nav>
      </header>
  );
};

export default Header;