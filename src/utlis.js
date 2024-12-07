import axios from "axios";
import { key } from "./accesskey";

export const customFetch = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: `Client-ID ${key}`,
  },
  params: { per_page: 20 },
});
