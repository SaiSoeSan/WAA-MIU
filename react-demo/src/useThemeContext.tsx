import {useContext} from "react";
import ThemeContext from "./ThemeContext";

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("Component must be inside the Provider");
    }
    return context;
}