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
    voteInStars() {
      return `<i
            v-for="i in Math.ceil(mediaObj.vote_average / 2)"
            class="fa-solid fa-star"></i>
            <i
            v-for="i in (5 - Math.ceil(mediaObj.vote_average / 2))"
            class="fa-regular fa-star"></i>`;
    },
  },
  props: {
    mediaObj: Object,
  },
};
</script>

<template>
  <li class="p-3">
    <div
      class="media-poster"
      :style="{
        'background-image': `url(http://image.tmdb.org/t/p/w342/${mediaObj.poster_path})`,
      }">
      <div class="info h-100 p-4 text-center lh-lg">
        <ul class="list-group list-unstyled">
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
          <li>
            Voto:
            <i
              v-for="i in Math.ceil(mediaObj.vote_average / 2)"
              class="fa-solid fa-star"></i>
            <i
              v-for="i in 5 - Math.ceil(mediaObj.vote_average / 2)"
              class="fa-regular fa-star"></i>
          </li>
          <li>
            <span class="main-red">Overview:</span>
            {{ mediaObj.overview }}
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@import "@fortawesome/fontawesome-free/css/all.css";
.media-poster {
  background-image: url(http://image.tmdb.org/t/p/w342/{this.mediaObj.poster_path});
  width: 342px;
  height: 512px;

  .info {
    display: none;
    background-color: #141414dd;
    overflow-y: scroll;

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
}
.media-poster:hover .info {
  display: block;
}
</style>
