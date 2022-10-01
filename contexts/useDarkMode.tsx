import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toogleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const html = document.documentElement;

    const prevTheme = isDarkMode ? "light" : "dark";
    html.classList.remove(prevTheme);

    const nextTheme = isDarkMode ? "dark" : "light";
    html.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
  });
  return [isDarkMode, toogleDarkMode];
};
