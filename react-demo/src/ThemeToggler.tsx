import {useContext} from "react";
import ThemeContext from "./ThemeContext";
import {useThemeContext} from "./useThemeContext";

export default function ThemeToggler() {
    const context = useThemeContext();
    const {theme,toggleTheme} = context;
    return (
       <>
        <p>Current Theme : {theme}</p>
           <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
           </button>
       </>
    )
}