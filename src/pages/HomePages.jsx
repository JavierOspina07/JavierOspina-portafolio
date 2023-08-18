import { useEffect, useState } from "react";
import "./style/HomePages.css"
import { Cursor, useTypewriter } from "react-simple-typewriter"

const HomePages = () => {
  const [text] = useTypewriter({
    words: [
      "Me complace compartir contigo una muestra de mi trabajo, logros y pasiones a lo largo de mi trayectoria como programador. En estas páginas encontrarás una colección de proyectos que representan mi compromiso con laexcelencia, la creatividad y la dedicación en cada paso del camino.",
    ],
    loop: 1,
    typeSpeed: 10,
  })

  const [fullText, setFullText] = useState(""); // Estado para almacenar el texto completo

  useEffect(() => {
    setFullText(text); // Actualiza el estado con el texto completo
  }, [text]);

  return (
    <div className="portfolio">
      <div className="portfolio__tit-des">
        <h1 className="portfolio__title">Javier_Ospina</h1>
        <h3 className="portfolio__subtitle">Desarrollador Full Stack</h3>

        <div className="portfolio__description">
          ¡Bienvenido a mi portafolio creativo! {' '}
          <span>
          {fullText} {/* Mostrar el texto completo */}
          </span>
          <span style={{color: 'red'}}>
            <Cursor cursorStyle='/'/>
          </span>
        </div>
      </div>
      <img className="portfolio__img" src="/img/iconoprincipal.png" alt="" />
    </div>
  )
}

export default HomePages
