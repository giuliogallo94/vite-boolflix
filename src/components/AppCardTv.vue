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
  components: {
    mediaObj: Object,
    singleArray: Array,
  },
};
</script>

<template>
  <ul class="list-group">
    <li
      v-for="(mediaObj, index) in store.tvArray"
      :key="index"
      class="p-3 border border-dark">
      <ul class="list-group px-4">
        <div class="info">
          <li>Titolo: {{ mediaObj.title || mediaObj.name }}</li>
          <li>
            Titolo Originale:
            {{ mediaObj.original_title || mediaObj.original_name }}
          </li>
          <li>
            <img
              v-if="this.store.flagsArray.includes(mediaObj.original_language)"
              :src="`../src/assets/img/${mediaObj.original_language}.png`"
              alt="" />
            <p class="m-0" v-else>{{ mediaObj.original_language }}</p>
          </li>
          <li>Voto: {{ Math.ceil(mediaObj.vote_average) }}</li>
        </div>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.info {
  img {
    width: 25px;
  }
}
</style>
