import "./style/About.css"
import { useTranslation } from "react-i18next"


const About = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <div class="about">
      <h1 class="about__title">{t("About.about-me")}</h1>

      <p class="about__description">
        {t("About.about1")}
      </p>
      <p class="about__description">
        {t("About.about2")}
      </p>
    </div>
  )
}

export default About
