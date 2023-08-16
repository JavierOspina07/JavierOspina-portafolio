import "./style/Contact.css"

const Contact = () => {
  return (
    <div className="form__container">
      <form className="form" >
        <h1 className="heading">Contáctame</h1>
        <div>
          <input
            className="input"
            placeholder="Nombre"
            
            type="text"
            id="firstname"
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="Apellido"
          
            type="text"
            id="lastname"
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="Email"
            
            type="email"
            id="email"
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="Telefono"
            
            type="text"
            id="phone"
          />
        </div>
        <button className="btn">Enviar</button>
      </form>
    </div>
  )
}

export default Contact
