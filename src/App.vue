<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "../src/components/AppHeader.vue";
import AppMain from "../src/components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
.flag {
  width: 25px;
}
</style>
