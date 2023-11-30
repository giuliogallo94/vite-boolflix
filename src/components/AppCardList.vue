<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    mediaType: String,
  },
  components: {
    AppCard,
  },
};
</script>

<template>
  <div class="{{mediaType}}">
    <h2>{{ mediaType }}</h2>
    <div class="media-list">
      <ul class="list-group list-group-horizontal list-unstyled">
        <AppCard v-for="movie in store.movieArray" :mediaObj="movie" />
      </ul>
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
