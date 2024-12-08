import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useGlobalContext } from "../Context";
const ThemeToggle = () => {
  const { darkTheme, setDarkTheme } = useGlobalContext();
  document.body.classList.toggle("darkMode", darkTheme);
  return (
    <button className="toggleBtn" onClick={() => setDarkTheme(!darkTheme)}>
      {!darkTheme ? (
        <MdDarkMode />
      ) : (
        <MdLightMode style={{ color: "#f0f0f0" }} />
      )}
    </button>
  );
};

export default ThemeToggle;
