<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      finalVote: "",
    };
  },
  methods: {
    // voteInStars() {
    //   if (mediaObj.vote_avarage < 1) {
    //     this.finalVote = `<i v-for="i in 5" class="fa-regular fa-star"></i>`;
    //   } else {
    //     this.finalVote = `<i
    //         v-for="i in Math.ceil(mediaObj.vote_average / 2)"
    //         class="fa-solid fa-star"></i>
    //         <i
    //         v-for="i in (5 - Math.ceil(mediaObj.vote_average / 2))"
    //         class="fa-regular fa-star"></i>`;
    //   }
    // },
  },
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
  <li class="p-3">
    <ul class="list-group px-4 list-unstyled">
      <div class="info">
        <img
          :src="`http://image.tmdb.org/t/p/w342/${mediaObj.poster_path}`"
          alt=""
          :class="`mediaObj.poster_path ?  : null-img`" />
        <li>
          <span class="main-red">Titolo:</span>
          {{ mediaObj.title || mediaObj.name }}
        </li>
        <li>
          <span class="main-red">Titolo Originale:</span>
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
        <li v-if="mediaObj.vote_average > 0">
          Voto:
          <i
            v-for="i in Math.ceil(mediaObj.vote_average / 2)"
            class="fa-solid fa-star"></i>
        </li>
        <li v-else>
          <span class="main-red">Voto:</span>
          <i v-for="i in 5" class="fa-solid fa-star"></i>
        </li>
        <!-- <li v-html="voteInStars()"></li> -->
      </div>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@import "@fortawesome/fontawesome-free/css/all.css";
.info {
  .null-img {
    width: 342px;
    height: 512px;
  }
  .main-red {
    color: $mainRed;
  }
  img.flag {
    width: 25px;
  }
}
</style>
