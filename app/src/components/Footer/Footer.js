import React from "react";
import './Footer.css'
import logo from './logo.png'

export const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-logo">
       <img src={logo} alt="Логотип" />
      </div>
      <div className="footer-text">
        © 2024 NoName. Все права защищены.
      </div>
    </footer>
  );


}