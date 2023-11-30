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
  <div class="boolflix-list d-flex">
    <div class="movies">
      <h2>Movies</h2>
      <ul class="list-group">
        <AppCard v-for="movie in store.movieArray" :mediaObj="movie" />
      </ul>
    </div>
    <div class="tv">
      <h2>TV Series</h2>
      <ul class="list-group">
        <AppCard v-for="tvSeries in store.tvArray" :mediaObj="tvSeries" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
