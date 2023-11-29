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
    //     this.store.mediaArray = resp.data.results;
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
            media_type: "movie" || "tv",
          },
        })
        .then((resp) => {
          this.store.mediaArray = resp.data.results;
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
        return `Lingua: <img src="${flagInfo.flagUrl}" alt="${flagInfo.name}" class="flag">`;
      } else {
        return `Lingua: ${movieInfo.original_language}`;
      }
    },
  },
};
</script>

<template>
  <AppSearch @searchInput="searchMovie" />
  <ul class="list-group">
    <!-- Single Movie -->

    <li
      v-for="(movie, index) in store.mediaArray"
      :key="index"
      class="p-3 border border-dark">
      <ul class="list-group px-4">
        <li>Titolo: {{ movie.title || movie.name }}</li>
        <li>
          Titolo Originale: {{ movie.original_title || movie.original_name }}
        </li>
        <li
          v-for="(flag, index) in store.flagsArray"
          v-html="showFlag(movie, flag)"></li>

        <!-- <li v-if="showFlag(movie)" :key="index"></li> -->
        <li>Voto: {{ Math.ceil(movie.vote_average) }}</li>
        <li>Tipo: {{ movie.media_type }}</li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss">
@use "./style/general.scss";
.flag {
  width: 25px;
}
</style>
