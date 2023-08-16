import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePages from "./pages/HomePages"
import Header from "./components/shared/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"


function App() {



  return (
    <div>
      <Header/>
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
