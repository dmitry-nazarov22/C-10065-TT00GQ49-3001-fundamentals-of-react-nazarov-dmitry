import './App.css'
import { useState } from "react";
import ThemeContext from "./ThemeContext";
import ThemeDisplay from "./ThemeDisplay";

function App() {

  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
      <ThemeDisplay />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
      </ThemeContext.Provider>
    </>
  )
}

export default App
