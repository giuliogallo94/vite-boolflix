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
  <div class="input-group w-auto">
    <div class="form-outline" data-mdb-input-init>
      <input
        type="search"
        id="form1"
        class="form-control"
        v-model="store.searchText" />
    </div>
    <button
      type="button"
      class="btn"
      data-mdb-ripple-init
      @click="$emit(`searchInput`)">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/css/all.css";

button {
  background-color: #dc1a28;

  i {
    color: black;
  }
}
</style>
