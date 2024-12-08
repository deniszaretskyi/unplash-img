import { useGlobalContext } from "../Context";

const SearchForm = () => {
  const { setInputVal, inputVal, setQueryVal } = useGlobalContext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setQueryVal(inputVal);
      }}
    >
      <h1>Unplash Images</h1>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
