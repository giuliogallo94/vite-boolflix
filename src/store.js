import { reactive } from "vue";

export const store = reactive({
  movieArray: [],
  tvArray: [],
  popularMovieArray: [],
  topRatedMovieArray: [],
  genresArraySearch: [],
  mediaGenres: [],
  genresMovieArray: [],
  genresTvArray: [],
  resultTitle: "",
  searchText: "",
  genresChoosen: "",
  apiUrlBase: "https://api.themoviedb.org/3/",
  apiKey: "ce56ed10841e74923882d40ea5b5f01d",
  imageUrlBase: "https://image.tmdb.org/t/p/",
  flagsArray: ["it", , "en", , "fr", , "es"],
});
