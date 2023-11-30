<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  computed: {
    hasFlag() {
      return this.store.flagsArray.includes(movie.original_language);
    },
  },
};
</script>

<template>
  <ul class="list-group">
    <li
      v-for="(movie, index) in store.movieArray"
      :key="index"
      class="p-3 border border-dark">
      <ul class="list-group px-4">
        <div class="info">
          <li>Titolo: {{ movie.title || movie.name }}</li>
          <li>
            Titolo Originale: {{ movie.original_title || movie.original_name }}
          </li>
          <li>
            <img
              v-if="hasFlag"
              :src="`../src/assets/img/${movie.original_language}.png`"
              alt="" />

            <p v-else>{{ movie.original_language }}</p>
          </li>
          <li>Voto: {{ Math.ceil(movie.vote_average) }}</li>
        </div>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
