"use client"
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null); // Default theme is light

  useEffect(()=>{
    setTheme(localStorage?.getItem("theme") ?? "light");
  }, []);

  useEffect(()=>{
    if(theme){
        localStorage?.setItem("theme", theme);
    }
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
