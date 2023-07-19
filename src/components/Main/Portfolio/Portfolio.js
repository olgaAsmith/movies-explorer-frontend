import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='title portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <div className='portfolio__list_item_container'>
            <p className='text portfolio__list-item-name'>Статичный сайт</p>
            <a href='#!' className='portfolio__list-item-link'> </a>
          </div>
          <div className='border border_grey'></div>
        </li>
        <li className='portfolio__list-item'>
          <div className='portfolio__list_item_container'>
            <p className='text portfolio__list-item-name'>Адаптивный сайт</p>
            <a href='#!' className='portfolio__list-item-link'> </a>
          </div>
          <div className='border border_grey'></div>
        </li>
        <li className='portfolio__list-item'>
          <div className='portfolio__list_item_container'>
            <p className='text portfolio__list-item-name'>Одностраничное приложение</p>
            <a href='#!' className='portfolio__list-item-link'> </a>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
