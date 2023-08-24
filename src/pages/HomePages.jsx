import { useEffect, useState } from "react"
import "./style/HomePages.css"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { useTranslation } from "react-i18next"

const HomePages = () => {
  const [t, i18n] = useTranslation("global")

  const [text] = useTypewriter({
    words: [
      t("Portfolio.description"),
    ],
    loop: false,
    typeSpeed: 10,
    delaySpeed: 10000,
    deleteSpeed:0.001,
  })

  return (
    <div className="portfolio">
      <div className="portfolio__tit-des">
        <h1 className="portfolio__title">Javier_Ospina</h1>
        <h3 className="portfolio__subtitle">{t("Portfolio.subtitle")}</h3>

        <div className="portfolio__description">
          {text}
          <span style={{ color: "red" }}>
            <Cursor cursorStyle="/" />
          </span>
        </div>
      </div>
      <img className="portfolio__img" src="/img/iconoprincipal.png" alt="" />
    </div>
  )
}

export default HomePages
