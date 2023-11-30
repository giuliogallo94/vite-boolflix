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
      <h2>Results...</h2>
      <div class="movies-list">
        <ul class="list-group list-group-horizontal list-unstyled">
          <AppCard v-for="movie in store.genresArraySearch" :mediaObj="movie" />
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
