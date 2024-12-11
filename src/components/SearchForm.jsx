import { toast } from "react-toastify";
import { useGlobalContext } from "../Context";
import { BsSearchHeart } from "react-icons/bs";
const SearchForm = () => {
  const { setQueryVal } = useGlobalContext();

  return (
    <form
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
        let searchValue = e.target.elements.search.value;
        if (!searchValue) {
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
        setQueryVal(searchValue);

        e.target.elements.search.value = "";
      }}
    >
      <h1 className="pageTitle">Unplash Images</h1>
      <div className="inputContainer">
        <input name="search" type="text" />
        <button className="submitBtn" type="submit">
          <BsSearchHeart className="searchBtnIcon" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
