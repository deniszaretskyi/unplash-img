import { useContext, createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <AppContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
