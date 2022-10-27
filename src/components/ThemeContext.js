import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return <ThemeContext.Provider
        value={{
            theme,
            changeTheme
        }}>
        {children}
    </ThemeContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(ThemeContext);
}

export { ThemeContext, ThemeProvider };