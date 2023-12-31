import React from "react"
import useDarkMode from "./useDarkMode"

const DarkModebutton = () => {
  /* Darkmode */
  const [darkMode, setDarkMode] = useDarkMode()

  /* Manipulacion para Darkmode */
  const handleToggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  
  return (
    <div>
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
    </div>
  )
}

export default DarkModebutton


