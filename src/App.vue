<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "../src/components/AppHeader.vue";
import AppMain from "../src/components/AppMain.vue";
import AppMainHome from "./components/AppMainHome.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppMainHome,
  },
};
</script>

<template>
  <AppHeader />
  <AppMainHome v-if="this.store.searchText == ``" />
  <AppMain v-if="this.store.searchText" />
</template>

<style lang="scss">
@use "./style/partials/variables" as *;
@use "./style/general.scss";
</style>
