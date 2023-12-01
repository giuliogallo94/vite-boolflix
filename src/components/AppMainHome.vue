<script>
import axios from "axios";
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppCard,
  },
  mounted() {
    axios
      .get(`${this.store.apiUrlBase}movie/popular`, {
        params: {
          api_key: "ce56ed10841e74923882d40ea5b5f01d",
        },
      })
      .then((resp) => {
        this.store.popularMovieArray = resp.data.results;
        // console.log(resp.data.results);
      }),
      axios
        .get(`${this.store.apiUrlBase}movie/top_rated`, {
          params: {
            api_key: "ce56ed10841e74923882d40ea5b5f01d",
          },
        })
        .then((resp) => {
          this.store.topRatedMovieArray = resp.data.results;
          //   console.log(resp.data.results);
        });
  },
};
</script>

<template>
  <div class="boolflix-list d-flex flex-column mb-3">
    <div class="movies">
      <h2>Popular Movies</h2>
      <div class="movies-list">
        <ul class="list-group list-group-horizontal list-unstyled">
          <AppCard v-for="movie in store.popularMovieArray" :mediaObj="movie" />
        </ul>
      </div>
    </div>
    <div class="tv pt-5">
      <h2>Top Rated Movies</h2>
      <div class="tv-list">
        <ul class="list-group list-group-horizontal list-unstyled">
          <AppCard
            v-for="tvSeries in store.topRatedMovieArray"
            :mediaObj="tvSeries" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.boolflix-list {
  h2 {
    margin-left: 2rem;
  }
  ul {
    overflow-x: scroll;
  }
}
</style>
