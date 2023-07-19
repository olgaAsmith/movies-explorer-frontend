import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header header_main">
      <div className="header__container">
        <a className="logo link header__logo" href='#!'> </a>
      <div className="header__block-auth">
        <a className='link header__signup' href='#!'>Регистрация</a>
        <a className='button button_green header__button-signin' href='#!'>Войти</a>
      </div>
      </div>
    </header>
  );
}

export default Header;