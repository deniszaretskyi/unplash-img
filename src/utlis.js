import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID HxzFEyJ_7QUXYUyZFMV-W0BJbx_TQQcPvfMrhayXy_8",
  },
  params: { per_page: 20 },
});
