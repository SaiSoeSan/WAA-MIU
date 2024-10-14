import { createContext, ReactNode, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

interface ThemeProviderType {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//provide context provider
export const ContextProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
      </ThemeContext.Provider>
  )
};

export default ThemeContext;
