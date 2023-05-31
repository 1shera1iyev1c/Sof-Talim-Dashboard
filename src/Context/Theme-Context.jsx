import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const localThemeData = localStorage.getItem('theme') || 'light'
    const [theme, setTheme] = useState(localThemeData) 

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}