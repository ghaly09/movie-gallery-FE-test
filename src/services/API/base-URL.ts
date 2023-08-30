import { queryType } from "@/src/utils/types";

const baseURL = (query: queryType) => {
  return `https://api.themoviedb.org/3/${query}`;
};

export default baseURL;
