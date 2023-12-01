<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="genres-select">
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="store.genresChoosen"
      @change="$emit(`searchGenres`)">
      <option value=""></option>
      <option
        v-for="genres in store.mediaGenres"
        :key="genres.name"
        :value="genres.id">
        {{ genres.name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss">
@use "../style/partials/variables" as *;
@use "../style/general.scss";
</style>
