import { Link } from "react-router-dom"
import "./style/Header.css"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const header = () => {
  //estado menu oculto
  const [isMobile, setIsMobile] = useState(false)
  // manipulacion del menu
  const handleMobile = () => {
    setIsMobile(!isMobile)
  }

  //traductor
  const [t, i18n] = useTranslation("global")
  //manipulacion del traductor
  const handleLanguaje = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
  }

  return (
    <div className="header-container">
      <header className="header">
        <Link to="/" className="header__logo">
          <div className="header__logo-content">
            <img
              src="/img/iconoprincipal.png"
              alt=""
              className="header__logo-image"
            />
            <h2 className="header__logo-title">Javier Ospina</h2>
          </div>
        </Link>

        <nav className="header__nav">
          <ul
            className={`header__nav-list ${isMobile ? "isMobile" : ""}`}
            onClick={handleMobile}
          >
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link">
                {t("Header.Home")}
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/about" className="header__nav-link">
                {t("Header.About")}
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/skills" className="header__nav-link">
                {t("Header.Skills")}
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/projects" className="header__nav-link">
                {t("Header.Projects")}
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/contact" className="header__nav-link">
                {t("Header.Contact")}
              </Link>
            </li>
          </ul>
          <button className="mobile-menu-icon" onClick={handleMobile}>
            {isMobile ? (
              <i className="bx bx-x"></i>
            ) : (
              <i className="bx bx-grid-alt"></i>
            )}
          </button>
        </nav>
        <button className="header-btn-langage" onClick={handleLanguaje}>
          <i class="bx bx-world"></i>
        </button>
      </header>
    </div>
  )
}

export default header
