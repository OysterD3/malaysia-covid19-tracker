<template>
  <div class="space-y-4">
    <h1 class="text-center text-2xl md:text-4xl font-bold">
      Malaysia Covid-19 Tracker
    </h1>
    <div class="text-center p-2 text-gray-700">
      Built by
      <a
        class="
          text-blue-600
          hover:text-blue-800
          transition-colors
          duration-150
          ease-in-out
        "
        rel="noreferrer"
        href="https://oysterlee.dev"
        target="_blank"
      >
        Oyster Lee
      </a>
    </div>
    <ChartTotal :data="data" />
    <ChartOne :data="data" />
    <ChartTest />
    <ChartCasesPerDay />
    <ChartVaccination />
    <ChartCheckin />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { COUNTRY_INITIAL_DATA } from "~/config";

export default Vue.extend({
  data: () => ({
    data: COUNTRY_INITIAL_DATA,
  }),
  beforeCreate() {
    this.$api.external.getCountry("MY").then((v) => (this.data = v));
  },
});
</script>
