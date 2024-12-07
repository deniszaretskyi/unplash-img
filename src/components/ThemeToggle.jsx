import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useGlobalContext } from "../Context";
const ThemeToggle = () => {
  const { darkTheme, setDarkTheme } = useGlobalContext();

  return (
    <button onClick={() => setDarkTheme(!darkTheme)}>
      {!darkTheme ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};

export default ThemeToggle;
