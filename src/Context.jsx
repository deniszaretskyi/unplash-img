import { useContext, createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme");

  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === "true";
};

export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(getInitialDarkMode());

  useEffect(() => {
    localStorage.setItem("darkTheme", darkTheme);
  }, [darkTheme]);
  const [queryVal, setQueryVal] = useState("cat");
  return (
    <AppContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        queryVal,
        setQueryVal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
