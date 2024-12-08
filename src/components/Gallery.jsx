import { getPhotos } from "../QueryCustomHooks";
import { useGlobalContext } from "../Context";
import blackSpinner from "../assets/infinite-spinner-black.svg";
import whiteSpinner from "../assets/infinite-spinner-white.svg";
const Gallery = () => {
  const { queryVal } = useGlobalContext();
  const { data, isLoading, isError, error } = getPhotos(queryVal);
  const { darkTheme } = useGlobalContext();
  const photos = data?.data?.results;
  const getSpinner = !darkTheme ? (
    <img id="LoadingIcon" src={blackSpinner} />
  ) : (
    <img id="LoadingIcon" src={whiteSpinner} />
  );
  if (isLoading) return getSpinner;
  if (isError) return <h1 id="ErrorMessage">Error</h1>;

  return (
    <div className="gallery">
      {photos.map((item) => {
        return <img key={item.id} src={item.urls.regular}></img>;
      })}
    </div>
  );
};

export default Gallery;
