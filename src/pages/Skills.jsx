import React, { useState, useEffect } from 'react';
import './style/Skills.css';
import { useTranslation } from "react-i18next"


const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [t, i18n] = useTranslation("global")


  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="skills-container">
      <h1 className="skills-title">{t("Skills.skills")}</h1>
      <div className="skills">
        <img className={`skills__icon skills__icon-css ${isVisible ? 'appear' : ''}`} src="/img/css-01.svg" alt="" />
        <img className={`skills__icon skills__icon-html ${isVisible ? 'appear' : ''}`} src="/img/html-01.svg" alt="" />
        <img className={`skills__icon skills__icon-javascript ${isVisible ? 'appear' : ''}`} src="/img/js-01.svg" alt="" />
        <img className={`skills__icon skills__icon-react ${isVisible ? 'appear' : ''}`} src="/img/react-01.svg" alt="" />
        <img className={`skills__icon skills__icon-nodejs ${isVisible ? 'appear' : ''}`} src="/img/node-01.svg" alt="" />
      </div>
    </div>
  );
}

export default Skills;
