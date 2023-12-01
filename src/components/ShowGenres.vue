<script>
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
};
</script>

<template>
  <h2 class="results-title my-3">Research Results...</h2>
  <div class="boolflix-list d-flex flex-column">
    <div class="movies">
      <h2>Movies</h2>
      <div class="movies-list">
        <ul class="list-group list-group-horizontal list-unstyled">
          <AppCard v-for="movie in store.genresMovieArray" :mediaObj="movie" />
        </ul>
      </div>
    </div>
    <div class="tv pt-5">
      <h2>TV Series</h2>
      <div class="tv-list">
        <ul class="list-group list-group-horizontal list-unstyled">
          <AppCard
            v-for="tvSeries in store.genresTvArray"
            :mediaObj="tvSeries" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.results-title {
  margin-left: 1.5rem;
  color: $mainRed;
}
.boolflix-list {
  h2 {
    margin-left: 2rem;
  }
  ul {
    overflow-x: scroll;
  }
}
</style>
