<script>
import axios from "axios";
import { store } from "./store";
import AppSearch from "../src/components/AppSearch.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppSearch,
  },
  created() {
    // axios
    //   .get(this.store.apiUrl, {
    //     params: {
    //       api_key: "ce56ed10841e74923882d40ea5b5f01d",
    //       query: this.store.searchText,
    //     },
    //   })
    //   .then((resp) => {
    //     this.store.filmsArray = resp.data.results;
    //     console.log(resp.data.results);
    //   });
  },
  methods: {
    searchMovie() {
      axios
        .get(this.store.apiUrl, {
          params: {
            api_key: "ce56ed10841e74923882d40ea5b5f01d",
            query: this.store.searchText,
          },
        })
        .then((resp) => {
          this.store.filmsArray = resp.data.results;
          console.log(resp.data.results);
        });
    },
    // showFlag(movieInfo) {
    //   console.log(this.store.flagsArray);
    //   for (let i = 0; i < this.store.flagsArray; i++) {
    //     if (movieInfo.original_language == this.store.flagsArray[i].name) {
    //       return `<img src="${this.store.flagsArray[i].flagUrl}" alt="${this.store.flagsArray[i].name}">`;
    //     } else {
    //       return `${movieInfo.original_language}`;
    //     }
    //   }
    // },
    showFlag(movieInfo, flagInfo) {
      if (movieInfo.original_language == flagInfo.name) {
        return `<img src="${flagInfo.flagUrl}" alt="${flagInfo.name}">`;
      } else {
        return `${movieInfo.original_language}`;
      }
    },
  },
};
</script>

<template>
  <AppSearch @searchInput="searchMovie" />
  <ul class="list-group">
    <!-- <img src="../src/assets/img/fr.png" alt="" /> -->

    <!-- Single Movie -->

    <li
      v-for="(movie, index) in store.filmsArray"
      :key="index"
      class="p-3 border border-dark">
      <ul class="list-group px-4">
        <li>Titolo: {{ movie.title }}</li>
        <li>Titolo Originale: {{ movie.original_title }}</li>
        <li
          v-for="(flag, index) in store.flagsArray"
          v-html="showFlag(movie, flag)"></li>

        <!-- <li v-if="showFlag(movie)" :key="index"></li> -->
        <li>Voto: {{ movie.vote_average }}</li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
