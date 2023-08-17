import "./style/SocialNetworks.css"

const SocialNetworks = () => {
  return (
    <div className="social">
      <ul className="social__list">
        <li className="social__item">
          <a href="#" className="social__link social__link-linkedin">
            <i className="fa-brands fa-linkedin"></i>
            <span className="social__tooltip textlinkedin">LinkedIn</span>
          </a>
        </li>
        <li className="social__item">
          <a href="#" className="social__link social__link-whatsapp">
            <i className="fa-brands fa-whatsapp"></i>
            <span className="social__tooltip textwhatsapp">Whatsapp</span>
          </a>
        </li>
        <li className="social__item">
          <a href="#" className="social__link social__link-github">
            <i className="fa-brands fa-github"></i>
            <span className="social__tooltip textgithub" >GitHub</span>
          </a>
        </li>
        <li className="social__item">
          <a href="#" className="social__link social__link-export">
            <i className="fa-solid fa-file-export"></i>
            <span className="social__tooltip textcv">CV</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialNetworks
