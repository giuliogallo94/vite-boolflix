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
    // hasFlag() {
    //   return this.store.flagsArray.includes(movie.original_language);
    // },
  },
  props: {
    mediaObj: Object,
  },
};
</script>

<template>
  <li class="p-3 border border-dark">
    <ul class="list-group px-4">
      <div class="info">
        <img
          :src="`http://image.tmdb.org/t/p/w342/${mediaObj.poster_path}`"
          alt=""
          :class="`mediaObj.poster_path ?  : null-img`" />
        <li>Titolo: {{ mediaObj.title || mediaObj.name }}</li>
        <li>
          Titolo Originale:
          {{ mediaObj.original_title || mediaObj.original_name }}
        </li>
        <li>
          <img
            v-if="this.store.flagsArray.includes(mediaObj.original_language)"
            :src="`../src/assets/img/${mediaObj.original_language}.png`"
            alt=""
            class="flag" />
          <p class="m-0" v-else>{{ mediaObj.original_language }}</p>
        </li>
        <li>Voto: {{ Math.ceil(mediaObj.vote_average) }}</li>
      </div>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
.info {
  .null-img {
    width: 342px;
    height: 512px;
  }
  img.flag {
    width: 25px;
  }
}
</style>
