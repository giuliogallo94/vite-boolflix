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
      this.store.genresMovieArray.length = 0;
      this.store.genresTvArray.length = 0;
      this.store.searchText = "";
      this.store.movieArray.length = 0;
      this.store.tvArray.length = 0;
      const params = {
        api_key: this.store.apiKey,
        with_genres: this.store.genresChoosen,
      };
      axios
        .get(`${this.store.apiUrlBase}discover/movie`, {
          params,
        })
        .then((resp) => {
          this.store.genresMovieArray = resp.data.results;
        });
      axios
        .get(`${this.store.apiUrlBase}discover/tv`, {
          params,
        })
        .then((resp) => {
          this.store.genresTvArray = resp.data.results;
        });
    },
    search() {
      this.store.genresMovieArray.length = 0;
      this.store.genresTvArray.length = 0;
      this.store.genresChoosen = "";
      const params = {
        api_key: this.store.apiKey,
        query: this.store.searchText,
      };
      axios
        .get(`${this.store.apiUrlBase}search/movie`, {
          params,
        })
        .then((resp) => {
          this.store.movieArray = resp.data.results;
        });
      axios
        .get(`${this.store.apiUrlBase}search/tv`, {
          params,
        })
        .then((resp) => {
          this.store.tvArray = resp.data.results;
        });
    },
  },
};
</script>

<template>
  <header class="d-flex justify-content-between align-items-center p-4">
    <div class="logo px-2">
      <a href="index.html">
        <img src="../assets/img/logo.png" alt="" />
      </a>
    </div>
    <AppGenresSearch @searchGenres="showGenres" />
    <AppSearch @searchInput="search" />
  </header>
</template>

<style lang="scss" scoped></style>
