import { Link } from "react-router-dom"
import "./style/header.css"

const header = () => {
  return (
    <header className="header">

      <Link to={"/"} className="header__logo">
        <div className="header__logo-content">
          <img
            src="../public/img/iconoprincipal.png"
            alt=""
            className="header__logo-image"
          />
          <h2 className="header__logo-title">Javier Ospina</h2>
        </div>
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">
              Inicio
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about" className="header__nav-link">
              Acerca De
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/skills" className="header__nav-link">
              Habilidades
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/projects" className="header__nav-link">
              Proyectos
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/contact" className="header__nav-link">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default header
