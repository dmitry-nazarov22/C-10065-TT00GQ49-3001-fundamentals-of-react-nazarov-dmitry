import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeDisplay() {
    const theme = useContext(ThemeContext);

    return <h2>Current theme: {theme}</h2>;
}

export default ThemeDisplay;