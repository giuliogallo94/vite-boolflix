import { reactive } from "vue";

export const store = reactive({
  filmsArray: [],
  searchText: "",
  apiUrl: "https://api.themoviedb.org/3/search/movie",
  flagsArray: [
    {
      name: "it",
      flagUrl: "../src/assets/img/it.png",
    },
    {
      name: "en",
      flagUrl: "../src/assets/img/en.png",
    },
    {
      name: "fr",
      flagUrl: "../src/assets/img/fr.png",
    },
    {
      name: "es",
      flagUrl: "../src/assets/img/es.png",
    },
  ],
});
