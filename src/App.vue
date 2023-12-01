<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "../src/components/AppHeader.vue";
import AppMain from "../src/components/AppMain.vue";
import AppMainHome from "./components/AppMainHome.vue";
import ShowGenres from "./components/ShowGenres.vue";
import AppNoResults from "./components/AppNoResults.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppMainHome,
    ShowGenres,
    AppNoResults,
  },
  mounted() {
    axios
      .get(`${this.store.apiUrlBase}genre/movie/list`, {
        params: {
          api_key: "ce56ed10841e74923882d40ea5b5f01d",
        },
      })
      .then((resp) => {
        this.store.mediaGenres = resp.data.genres;
        // console.log(resp.data.genres);
      });
  },
};
</script>

<template>
  <AppHeader />
  <AppNoResults
    v-if="
      (this.store.genresMovieArray.length == 0 ||
        this.store.genresTvArray.length == 0) &
        (this.store.genresChoosen != ``) ||
      (this.store.searchText != ``) &
        (this.store.movieArray.length == 0 || this.store.tvArray.length == 0)
    " />
  <AppMainHome
    v-if="
      (this.store.movieArray.length == 0 || this.store.tvArray.length == 0) &
      (this.store.genresMovieArray.length == 0 ||
        this.store.genresTvArray.length == 0) &
      (this.store.searchText == ``) &
      (this.store.genresChoosen == ``)
    " />

  <ShowGenres
    v-if="
      this.store.genresMovieArray.length > 0 ||
      this.store.genresMovieArray.length > 0
    " />

  <AppMain
    v-if="this.store.movieArray.length > 0 || this.store.tvArray.length > 0" />
</template>

<style lang="scss">
@use "./style/partials/variables" as *;
@use "./style/general.scss";
</style>
