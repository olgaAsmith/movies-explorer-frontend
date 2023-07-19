import React from 'react';
import './AboutMe.css';
import photo from '../../../images/vital.jpg'
function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='title title_section'>Студент</h2>
      <div className='border'></div>
      <div className='about-me__block'>
        <div className='about-me__describe'>
          <p className='text about-me__title-name'>Виталий</p>
          <p className='text about-me__title-info'>Фронтенд-разработчик, 30 лет</p>
          <p className='text about-me__title-essey'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href='#!' className='link about-me__link'>Github</a>
        </div>
        <img className='about-me__photo' alt='Фотография студента' src={require('../../../images/vital.jpg')} />
      </div>

    </section>
  );
}

export default AboutMe;
