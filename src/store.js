import { reactive } from "vue";

export const store = reactive({
  movieArray: [],
  tvArray: [],
  searchText: "",
  apiUrlBase: "https://api.themoviedb.org/3/",
  imageUrlBase: "https://image.tmdb.org/t/p/",
  flagsArray: ["it", , "en", , "fr", , "es"],
});
