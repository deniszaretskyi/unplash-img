import { customFetch } from "./utlis";
import { useQuery } from "@tanstack/react-query";

export const getPhotos = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["photos"],
    queryFn: () => customFetch.get("/", { params: { query: "afro" } }),
  });
  return { data, isLoading, isError };
};
