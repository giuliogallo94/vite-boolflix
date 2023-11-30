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
  <div class="boolflix-list d-flex flex-column">
    <div class="movies">
      <h2>Movies</h2>
      <div class="movies-list">
        <ul class="list-group list-group-horizontal list-unstyled">
          <AppCard v-for="movie in store.movieArray" :mediaObj="movie" />
        </ul>
      </div>
    </div>
    <div class="tv pt-5">
      <h2>TV Series</h2>
      <div class="tv-list">
        <ul class="list-group list-group-horizontal list-unstyled">
          <AppCard v-for="tvSeries in store.tvArray" :mediaObj="tvSeries" />
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
