import React, { createContext, useState } from "react";

// Create the Context
export const ThemeContext = createContext();

// Create the Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle the theme between "light" and "dark"
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
