import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <main>
      <ToastContainer />
      <SearchForm />
      <ThemeToggle />
      <Gallery />
    </main>
  );
};
export default App;
