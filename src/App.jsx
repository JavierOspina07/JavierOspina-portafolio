import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePages from "./pages/HomePages"
import Header from "./components/shared/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import SocialNetworks from "./components/shared/SocialNetworks"
import useDarkMode from "./components/useDarkMode"

function App() {
  /* Darkmode */
  const [darkMode, setDarkMode] = useDarkMode()

  /* Manipulacion para Darkmode */
  const handleToggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <input
          type="checkbox"
          id="hide-checkbox"
          defaultChecked={!darkMode}
          onChange={handleToggleDarkMode}
        />
        <label htmlFor="hide-checkbox" className="toggle">
          <span className="toggle-button">
            <span className="crater crater-1"></span>
            <span className="crater crater-2"></span>
            <span className="crater crater-3"></span>
            <span className="crater crater-4"></span>
            <span className="crater crater-5"></span>
            <span className="crater crater-6"></span>
            <span className="crater crater-7"></span>
          </span>
          <span className="star star-1"></span>
          <span className="star star-2"></span>
          <span className="star star-3"></span>
          <span className="star star-4"></span>
          <span className="star star-5"></span>
          <span className="star star-6"></span>
          <span className="star star-7"></span>
          <span className="star star-8"></span>
        </label>
      </div>
      <SocialNetworks />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  )
}

export default App
