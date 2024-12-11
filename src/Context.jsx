import { useContext, createContext, useState } from "react";

export const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  return prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(getInitialDarkMode());

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
