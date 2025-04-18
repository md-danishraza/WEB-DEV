import React, { useEffect } from "react";
import { useAppContext } from "./AppContext";

import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
function ThemeToggle() {
  const { isDarkTheme, setDarkTheme } = useAppContext();
  useEffect(() => {
    // "dark-theme" class based on the current theme
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    // Saving the current theme to localStorage
    localStorage.setItem("darkTheme", String(isDarkTheme));
  }, [isDarkTheme]);
  return (
    <button onClick={() => setDarkTheme(!isDarkTheme)} className="toggle-icon">
      {isDarkTheme ? <BsMoonStars /> : <IoSunnyOutline />}
    </button>
  );
}

export default ThemeToggle;
