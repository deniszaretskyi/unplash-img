import { toast } from "react-toastify";
import { useGlobalContext } from "../Context";
import { BsSearchHeart } from "react-icons/bs";
const SearchForm = () => {
  const { setInputVal, inputVal, setQueryVal, darkTheme } = useGlobalContext();

  return (
    <form
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
        if (!inputVal) {
          return toast.error("Provide name", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
        setQueryVal(inputVal);
        setInputVal("");
      }}
    >
      <h1 className="pageTitle">Unplash Images</h1>
      <div className="inputContainer">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button className="submitBtn" type="submit">
          <BsSearchHeart className="searchBtnIcon" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
