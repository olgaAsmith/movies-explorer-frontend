import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <div className='techs__container'>
         <h2 className='title title_section'>Технологии</h2>
      <div className='border'></div>
        <div className='techs__block'>
          <h3 className='title techs__title'>7 технологий</h3>
          <p className='text techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__block-list'>
            <li className='techs__block-list-item'>HTML</li>
            <li className='techs__block-list-item'>CSS</li>
            <li className='techs__block-list-item'>JS</li>
            <li className='techs__block-list-item'>React</li>
            <li className='techs__block-list-item'>Git</li>
            <li className='techs__block-list-item'>Express.js</li>
            <li className='techs__block-list-item'>mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
