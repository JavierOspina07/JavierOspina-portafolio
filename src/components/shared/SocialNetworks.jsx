import "./style/SocialNetworks.css"

const SocialNetworks = () => {
  return (
    <div className="social">
      <ul className="social__list">
        <li className="social__item">
          <a
            href="https://www.linkedin.com/in/javier-hernan-ospina-igua-94b653224/"
            target="_blank"
            className="social__link social__link-linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span className="social__tooltip textlinkedin">LinkedIn</span>
          </a>
        </li>

        <li className="social__item">
          <a
            href="https://wa.me/573183769205"
            target="_blank"
            className="social__link social__link-whatsapp"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span className="social__tooltip textwhatsapp">Whatsapp</span>
          </a>
        </li>

        <li className="social__item">
          <a
            href="https://mail.google.com/mail/?view=cm&to=jaheosig10%40gmail.com&su="
            target="_blank"
            className="social__link social__link-email"
          >
            <i className="fa-solid fa-envelope"></i>
            <span className="social__tooltip textemail">Email</span>
          </a>
        </li>

        <li className="social__item">
          <a
            href="https://github.com/JavierOspina07"
            target="_blank"
            className="social__link social__link-github"
          >
            <i className="fa-brands fa-github"></i>
            <span className="social__tooltip textgithub">GitHub</span>
          </a>
        </li>

        <li className="social__item">
          <a
            href="/documents/cvprueba.pdf"
            target="_blank"
            className="social__link social__link-export"
            download={''}
          >
            <i className="fa-solid fa-file-export"></i>
            <span className="social__tooltip textcv">CV</span>
          </a>
        </li>

      </ul>
    </div>
  )
}

export default SocialNetworks
