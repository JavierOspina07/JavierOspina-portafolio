import "./style/Projects.css"
import { useTranslation } from "react-i18next"


const Projects = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <div className="card-container">
      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/ecommercevanilla.png" alt="" />
          <a
            href="https://e-commerce-javiospina.netlify.app/"
            target="_blank"
            className="card-btn-page"
          >
            <i className="fa-solid fa-link"></i>
          </a>
          <a
            href="https://github.com/JavierOspina07/javier-Shop"
            target="_blank"
            className="card-btn-github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="card_content">
          <span className="card_title">Shop - AJ</span>
          <span className="card_subtitle">{t("projects.e-commerce-clothing")}</span>
          <p className="card_description">
           {t("projects.description")}
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/apigalleta.png" alt="" />
          <a
            href="https://galletica-javierospina.netlify.app/"
            target="_blank"
            className="card-btn-page"
          >
            <i className="fa-solid fa-link"></i>
          </a>
          <a
            href="https://github.com/JavierOspina07/galleta_de_la_fortuna_JavierOspina"
            target="_blank"
            className="card-btn-github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="card_content">
          <span className="card_title">Galletica</span>
          <span className="card_subtitle">
            {t("galletica.subtitle")}
          </span>
          <p className="card_description">
            {t("galletica.description")}
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/apiclima.png" alt="" />
          <a
            href="https://climatic-javierospina.netlify.app/"
            target="_blank"
            className="card-btn-page"
          >
            <i className="fa-solid fa-link"></i>
          </a>
          <a
            href="https://github.com/JavierOspina07/Climatic"
            target="_blank"
            className="card-btn-github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="card_content">
          <span className="card_title">Climatic</span>
          <span className="card_subtitle">{t("climatic.subtitle")}</span>
          <p className="card_description">
            {t("climatic.description")}
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/apirickandmorthy.png" alt="" />
          <a
            href="https://javier-randm.netlify.app/"
            target="_blank"
            className="card-btn-page"
          >
            <i className="fa-solid fa-link"></i>
          </a>
          <a
            href="https://github.com/JavierOspina07/RickAndMortyJavierOspina"
            target="_blank"
            className="card-btn-github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="card_content">
          <span className="card_title">Rick and Morty App</span>
          <span className="card_subtitle">{t("RandM.subtitle")}</span>
          <p className="card_description">
            {t("RandM.description")}
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/usercrud.png" alt="" />
          <a
            href="https://usercrudjavierospina.netlify.app/"
            target="_blank"
            className="card-btn-page"
          >
            <i className="fa-solid fa-link"></i>
          </a>
          <a
            href="https://github.com/JavierOspina07/userCrudJaviOspina"
            target="_blank"
            className="card-btn-github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="card_content">
          <span className="card_title">User Crud</span>
          <span className="card_subtitle">{t("User.subtitle")}</span>
          <p className="card_description">
            {t("User.description")}
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          {" "}
          <img className="card-img" src="/img/pokeapi.png" alt="" />
          <a
            href="https://poke-javidelpueblopaleta.netlify.app/"
            target="_blank"
            className="card-btn-page"
          >
            <i className="fa-solid fa-link"></i>
          </a>
          <a
            href="https://github.com/JavierOspina07/PokeJavi"
            target="_blank"
            className="card-btn-github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="card_content">
          <span className="card_title">Pokedex app</span>
          <span className="card_subtitle">
            {t("poke.subtitle")}
          </span>
          <p className="card_description">
            {t("poke.description")}
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/ecommercetecno.png" alt="" />
          <a href="https://javier-shop-react.netlify.app/" target="_blank" className="card-btn-page">
            <i className="fa-solid fa-link"></i>
          </a>
          <a
            href="https://github.com/JavierOspina07/e-commerce-React"
            target="_blank"
            className="card-btn-github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="card_content">
          <span className="card_title">AJ tecnology</span>
          <span className="card_subtitle">
            {t("tecn.subtitle")}
          </span>
          <p className="card_description">
          {t("tecn.description")}
          </p>
        </div>
      </article>
    </div>
  )
}

export default Projects
