import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='title footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='border border_grey'></div>
      <div className='footer__underline'>
        <p className="text footer__copyright">2020 ©</p>
        <ul className='footer__underline-list-links'>
          <li className='footer__underline-list-item'>
            <a href='#!' className='link footer__list-link-item'>Яндекс.Практикум</a>
          </li>
          <li className='footer__underline-list-item'>
            <a href='#!' className='link footer__list-link-item'>Github</a>
          </li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
