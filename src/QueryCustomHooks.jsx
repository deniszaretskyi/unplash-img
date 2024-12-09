import { customFetch } from "./utlis";
import { useQuery } from "@tanstack/react-query";

export const getPhotos = (value) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [value],
    queryFn: async () =>
      await customFetch.get("/", { params: { query: value } }),
  });
  return { data, isLoading, isError };
};
