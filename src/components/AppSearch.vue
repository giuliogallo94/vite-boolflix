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
  <div class="input-group p-5">
    <div class="form-outline" data-mdb-input-init>
      <input
        type="search"
        id="form1"
        class="form-control"
        v-model="store.searchText" />
    </div>
    <button
      type="button"
      class="btn btn-primary"
      data-mdb-ripple-init
      @click="$emit(`searchInput`)">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
