import "./style/Projects.css"

const Projects = () => {
  return (
    <div className="card-container">
      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/ecommercevanilla.png" alt="" />
        </div>
        <div className="card_content">
          <span className="card_title">Shop - AJ</span>
          <span className="card_subtitle">ecommerce de ropa</span>
          <p className="card_description">
            "Diseño e-commerce ropa con API
            ('https://ecommercebackend.fundamentos-29.repl.co'). Carrito, modo
            oscuro y detalles de productos para una experiencia de compra
            completa y mejorada. Busca mostrar al usuario de forma clara cada
            producto "
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/apigalleta.png" alt="" />
        </div>
        <div className="card_content">
          <span className="card_title">Galletica</span>
          <span className="card_subtitle">
            juega a la galleta de la fortuna
          </span>
          <p className="card_description">
            "Sitio web 'Galletica de la Fortuna': Simulación virtual de abrir
            galletas de la fortuna con mensajes inspiradores y consejos en
            línea. Experiencia interactiva y entretenida. Usando un JSON que
            proporciona las frases, con cambio de fondo".
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/apiclima.png" alt="" />
        </div>
        <div className="card_content">
          <span className="card_title">Climatic</span>
          <span className="card_subtitle">aplicacion de clima</span>
          <p className="card_description">
            "Aplicación climática con API global ('https://openweathermap.org/')
            que ofrece búsqueda por ubicación, modo oscuro, conversión °C a °F y
            detalles como presión, nubes y viento. Muestra temperatura y estado
            de nubes."
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/apirickandmorthy.png" alt="" />
        </div>
        <div className="card_content">
          <span className="card_title">Rick and Morty App</span>
          <span className="card_subtitle">personajes de rick and morty.</span>
          <p className="card_description">
            "Esta aplicación utiliza la API de
            'https://rickandmortyapi.com/documentation/#get-a-single-location'
            para buscar personajes en diferentes dimensiones. Permite ingresar
            un número de dimensión o buscar aleatoriamente mediante un botón."
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/usercrud.png" alt="" />
        </div>
        <div className="card_content">
          <span className="card_title">User Crud</span>
          <span className="card_subtitle">Pagina creadora de usuarios</span>
          <p className="card_description">
            "Diseño de página web para crear usuarios con la API
            https://users-crud.academlo.tech/swagger/. Emplea el método CRUD,
            presentando formulario de datos y modales informativos en cada
            proceso, la aplicacion tiene el modo oscuro."
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          {" "}
          <img className="card-img" src="/img/pokeapi.png" alt="" />
        </div>
        <div className="card_content">
          <span className="card_title">Pokedex app</span>
          <span className="card_subtitle">
            Aplicacion que muestra los pokemons
          </span>
          <p className="card_description">
            La pagina muestra los pokemones utilizando la API https://pokeapi.co
            con la cual podemos hacer diferentes tipos de filtrado, utilizando
            las rutas que permiten el acceso a informacion detallada de cada
            pokemon contiene un filtro por nombre y por tipo.
          </p>
        </div>
      </article>

      <article className="card">
        <div className="temporary_text">
          <img className="card-img" src="/img/ecommercetecno.png" alt="" />
        </div>
        <div className="card_content">
          <span className="card_title">AJ tecnology</span>
          <span className="card_subtitle">
            ecommerce de productos tecnologia
          </span>
          <p className="card_description">
            "Aplicación de comercio electrónico con integración API
            https://documenter.getpostman.com/view/17877993/2s8ZDczLBj. Muestra
            y filtra productos tecnológicos por precio y tipo. Incluye registro
            de usuarios, carrito de compras y historial de compras."
          </p>
        </div>
      </article>
    </div>
  )
}

export default Projects
