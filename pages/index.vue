<template>
  <div class="space-y-4">
    <ChartTotal :data="data" />
    <One :data="data" />
    <ChartTest />
    <ChartCasesPerDay />
    <ChartVaccination />
    <ChartCheckin />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import One from "~/components/Chart/One.vue";
import { COUNTRY_INITIAL_DATA } from "~/config";

export default Vue.extend({
  components: { One },
  data: () => ({
    data: COUNTRY_INITIAL_DATA,
  }),
  beforeCreate() {
    this.$api.external.getCountry("MY").then((v) => (this.data = v));
  },
});
</script>
