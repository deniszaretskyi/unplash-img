import { getPhotos } from "../QueryCustomHooks";
import { useGlobalContext } from "../Context";
import blackSpinner from "../assets/infinite-spinner-black.svg";
const Gallery = () => {
  const { queryVal } = useGlobalContext();
  const { data, isLoading, isError } = getPhotos(queryVal);
  const { darkTheme } = useGlobalContext();
  const photos = data?.data?.results;

  if (isLoading) return <img id="LoadingIcon" src={blackSpinner} />;
  if (isError) return <h1 id="ErrorMessage">Error...</h1>;

  return (
    <div className="gallery">
      {photos.map((item) => {
        return <img key={item.id} src={item.urls.regular}></img>;
      })}
    </div>
  );
};

export default Gallery;
//TODO:
//add param to getPhotos for query from input
// add theme change funtionality
