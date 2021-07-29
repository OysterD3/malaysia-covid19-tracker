<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="v-stack">
      <div class="text-lg md:text-3xl text-red-600 font-medium">
        {{ formatNumber(data.cases) }}
      </div>
      <div class="text-gray-500 text-sm md:text-base">Confirmed</div>
      <div v-if="data.todayCases" class="text-red-600 text-sm">
        +{{ formatNumber(data.todayCases) }}
      </div>
      <div v-else class="text-yellow-500 text-sm">Pending...</div>
    </div>
    <div class="v-stack">
      <div class="text-lg md:text-3xl text-green-700 font-medium">
        {{ formatNumber(data.recovered) }}
      </div>
      <div class="text-gray-500 text-sm md:text-base">Recovered</div>
      <div v-if="data.todayRecovered" class="text-green-700 text-sm">
        +{{ formatNumber(data.todayRecovered) }}
      </div>
      <div v-else class="text-yellow-500 text-sm">Pending...</div>
    </div>
    <div class="v-stack">
      <div class="text-lg md:text-3xl text-gray-700 font-medium">
        {{ formatNumber(data.deaths) }}
      </div>
      <div class="text-gray-500 text-sm md:text-base">Deaths</div>
      <div v-if="data.todayDeaths" class="text-gray-700 text-sm">
        +{{ formatNumber(data.todayDeaths) }}
      </div>
      <div v-else class="text-yellow-500 text-sm">Pending...</div>
    </div>
    <div class="v-stack">
      <div class="text-lg md:text-3xl text-red-500 font-medium">
        {{ formatNumber(data.active) }}
      </div>
      <div class="text-gray-500 text-sm md:text-base">In Treatment</div>
      <div
        :class="`text-sm ${
          todayInTreatment.charAt(0) === '+' ? 'text-red-600' : 'text-green-700'
        }`"
      >
        {{ todayInTreatment }}
      </div>
    </div>
    <div class="v-stack">
      <div class="text-lg md:text-3xl text-red-800 font-medium">
        {{ formatNumber(data.critical) }}
      </div>
      <div class="text-gray-500 text-sm md:text-base">Critical</div>
      <div
        :class="`text-sm ${
          todayCritical.charAt(0) === '+' ? 'text-red-600' : 'text-green-700'
        }`"
      >
        {{ todayCritical }}
      </div>
    </div>
    <div class="v-stack">
      <div class="text-lg md:text-3xl text-gray-700 font-medium">
        {{ formatNumber(data.tests) }}
      </div>
      <div class="text-gray-500 text-sm md:text-base">Tests</div>
      <div
        :class="`text-sm ${
          todayTest.charAt(0) === '+' ? 'text-red-600' : 'text-green-700'
        }`"
      >
        {{ todayTest }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import type { PropType } from "vue";
import type { Country } from "~/@types";
import { COUNTRY_INITIAL_DATA } from "~/config";
import { formatNumber } from "~/utils";

export default Vue.extend({
  name: "ChartTotal",
  props: {
    data: {
      type: Object as PropType<Country>,
      required: true,
    },
  },
  data: () => ({
    yesterdayData: COUNTRY_INITIAL_DATA,
  }),
  computed: {
    todayInTreatment(): string {
      const v = this.data.todayCases - this.data.todayRecovered;
      if (v > 0) {
        return `+${this.formatNumber(v)}`;
      }
      if (v < 0) {
        return `-${this.formatNumber(Math.abs(v))}`;
      }
      return "";
    },
    todayCritical() {
      const v = this.yesterdayData.critical - this.data.critical;
      if (v > 0) {
        return `+${this.formatNumber(v)}`;
      }
      if (v < 0) {
        return `-${this.formatNumber(Math.abs(v))}`;
      }
      return "";
    },
    todayTest() {
      const v = this.yesterdayData.tests - this.data.tests;
      if (v > 0) {
        return `+${this.formatNumber(v)}`;
      }
      if (v < 0) {
        return `-${this.formatNumber(Math.abs(v))}`;
      }
      return "";
    },
  },
  beforeCreate() {
    this.$api.external
      .getCountry("MY", 1)
      .then((v) => (this.yesterdayData = v));
  },
  methods: {
    formatNumber(v) {
      return formatNumber(v);
    },
  },
});
</script>
