import "./style/Contact.css"
import { useTranslation } from "react-i18next"


const Contact = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <div className="form__container">
      <form className="form" >
        <h1 className="heading">{t("contact.title")}</h1>
        <div>
          <input
            className="input"
            placeholder={t("contact.name")}
            
            type="text"
            id="firstname"
          />
        </div>
        <div>
          <input
            className="input"
            placeholder={t("contact.lastname")}
          
            type="text"
            id="lastname"
          />
        </div>
        <div>
          <input
            className="input"
            placeholder={t("contact.email")}
            
            type="email"
            id="email"
          />
        </div>
        <div>
          <input
            className="input"
            placeholder={t("contact.phone")}
            
            type="text"
            id="phone"
          />
        </div>
        <div>
          <input
            className="input"
            placeholder={t("contact.message")}
            
            type="text"
            id="message"
          />
        </div>
        <button className="btn">{t("contact.sendto")}</button>
      </form>
    </div>
  )
}

export default Contact
