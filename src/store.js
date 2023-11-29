import { reactive } from "vue";

export const store = reactive({
  filmsArray: [],
  searchText: "",
  apiUrl: "https://api.themoviedb.org/3/search/movie",
});
