import React, { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {


    const values = {

    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext