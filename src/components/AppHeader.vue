<script>
import axios from "axios";
import { store } from "../store";
import AppSearch from "./AppSearch.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppSearch,
  },
  methods: {
    search() {
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
    <AppSearch @searchInput="search" />
  </header>
</template>

<style lang="scss" scoped></style>
