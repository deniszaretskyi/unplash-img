import { useContext, createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [queryVal, setQueryVal] = useState("cat");
  return (
    <AppContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        setInputVal,
        inputVal,
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
