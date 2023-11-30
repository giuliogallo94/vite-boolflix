<script>
import axios from "axios";
import { store } from "../store";
import AppSearch from "./AppSearch.vue";
import AppGenresSearch from "./AppGenresSearch.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppSearch,
    AppGenresSearch,
  },
  methods: {
    showGenres() {
      console.log("ciao");
      this.store.genresArraySearch.length = 0;
      this.store.searchText = "";
      this.store.movieArray.length = 0;
      this.store.tvArray.length = 0;
      for (let i = 0; i < this.store.popularMovieArray.length; i++) {
        if (
          this.store.popularMovieArray[i].genre_ids.includes(
            this.store.genresChoosen
          )
        ) {
          this.store.genresArraySearch.push(this.store.popularMovieArray[i]);
        }
      }
      console.log(this.store.genresArraySearch);
    },
    search() {
      this.store.genresArraySearch.length = 0;
      this.store.genresChoosen = "";
      const params = {
        api_key: "ce56ed10841e74923882d40ea5b5f01d",
        query: this.store.searchText,
      };
      axios
        .get(`${this.store.apiUrlBase}search/movie`, {
          params,
        })
        .then((resp) => {
          this.store.movieArray = resp.data.results;
          console.log(resp.data.results);
        });
      axios
        .get(`${this.store.apiUrlBase}search/tv`, {
          params,
        })
        .then((resp) => {
          this.store.tvArray = resp.data.results;
          console.log(resp.data.results);
        });
    },
  },
};
</script>

<template>
  <header class="d-flex justify-content-between align-items-center p-4">
    <div class="logo px-2"><img src="../assets/img/logo.png" alt="" /></div>
    <AppGenresSearch @searchGenres="showGenres" />
    <AppSearch @searchInput="search" />
  </header>
</template>

<style lang="scss" scoped></style>
