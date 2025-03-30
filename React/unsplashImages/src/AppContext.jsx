import React, { useState, useEffect } from "react";
import { useContext, createContext } from "react";

const globalContext = createContext();

export const useAppContext = () => {
  return useContext(globalContext);
};

function AppContextProvider({ children }) {
  const initialDarkMode = () => {
    // this fn returns a boolean
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const storedDarkMode = localStorage.getItem("darkTheme");
    // if not saved in local storage than use preferTheme
    if (storedDarkMode === null) {
      return prefersDarkMode;
    }
    // if saved in local storage and check whether true(dark) and false(light)
    return storedDarkMode === "true";
  };

  const [isDarkTheme, setDarkTheme] = useState(initialDarkMode);

  const [searchValue, setSearchValue] = useState("cat");
  return (
    <globalContext.Provider
      value={{ isDarkTheme, setDarkTheme, searchValue, setSearchValue }}
    >
      {children}
    </globalContext.Provider>
  );
}

export default AppContextProvider;
