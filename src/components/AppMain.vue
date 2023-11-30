<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
import AppTest from "./AppTest.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppCard,
    AppTest,
  },
};
</script>

<template>
  <div class="boolflix-list d-flex">
    <div class="movies">
      <AppCard />
    </div>
    <div class="tv">
      <AppCard />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
