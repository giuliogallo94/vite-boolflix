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
  },
};
</script>

<template>
  <AppSearch @searchInput="searchMovie" />
  <ul>
    <!-- Single Movie -->
    <li
      v-for="(info, index) in store.filmsArray"
      :key="index"
      class="p-3 border border-dark">
      <ul>
        <li>Titolo: {{ info.title }}</li>
        <li>Titolo Originale: {{ info.original_title }}</li>
        <li>Lingua: {{ info.original_language }}</li>
        <li>Voto: {{ info.vote_average }}</li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
