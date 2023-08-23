import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/index.js"
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import global_es from "../src/lang/es/global.json"
import global_en from "../src/lang/en/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
)
