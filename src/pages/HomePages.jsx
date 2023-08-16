import "./style/HomePages.css"

const HomePages = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__tit-des">
        <h1 className="portfolio__title">Javier_Ospina</h1>
        <h3 className="portfolio__subtitle">Desarrollador Full Stack</h3>
        <p className="portfolio__description">
          ¡Bienvenido a mi portafolio creativo! Me complace compartir contigo
          una muestra de mi trabajo, logros y pasiones a lo largo de mi
          trayectoria como programador. En estas páginas encontrarás una
          colección de proyectos que representan mi compromiso con la
          excelencia, la creatividad y la dedicación en cada paso del camino.
        </p>
      </div>
        <img
          className="portfolio__img"
          src="../public/img/iconoprincipal.png"
          alt=""
        />
      
    </div>
  )
}

export default HomePages
