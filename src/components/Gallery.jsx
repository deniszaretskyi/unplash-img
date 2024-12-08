import { getPhotos } from "../QueryCustomHooks";
import { useGlobalContext } from "../Context";

const Gallery = () => {
  const { queryVal } = useGlobalContext();
  const { data, isLoading, isError } = getPhotos(queryVal);
  const photos = data?.data?.results;
  console.log(photos);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  return (
    <div className="gallery">
      {photos.map((item) => {
        return <img key={item.id} src={item.urls.small}></img>;
      })}
    </div>
  );
};

export default Gallery;
//TODO:
//add param to getPhotos for query from input
// add theme change funtionality
