import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about">
      <h2 className="title title_section about__title">О проекте</h2>
      <div className="border"></div>
      <div className="about__facts-container">
        <div className="about__fact-block">
          <h3 className="title title_section about__fact-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="text about__fact-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__fact-block">
          <h3 className="title about__fact-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="text about__fact-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__scale-container">
        <div className="about__scale-block about__scale-block_green">
          1 неделя
        </div>
        <div className="about__scale-block about__scale-block_grey">
          4 недели
        </div>
        <div className="about__scale-block about__scale-block_transparent">
          Back-end
        </div>
        <div className="about__scale-block about__scale-block_transparent">
          Front-end
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
