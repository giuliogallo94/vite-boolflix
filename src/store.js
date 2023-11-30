import { reactive } from "vue";

export const store = reactive({
  movieArray: [],
  tvArray: [],
  searchText: "",
  apiUrlBase: "https://api.themoviedb.org/3/",
  flagsArray: ["it", , "en", , "fr", , "es"],
});
