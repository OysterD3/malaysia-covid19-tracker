<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
    <div>
      <div class="text-center mb-2">
        Every {{ data.oneCasePerPeople }} people has 1 confirmed case
      </div>
      <div class="grid grid-cols-12 gap-1">
        <svg
          v-for="v in data.oneCasePerPeople"
          :key="v"
          :class="`w-8 h-8 ${v === 1 ? 'text-red-600' : 'text-gray-300'}`"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
    <div>
      <div class="text-center mb-2">
        Every {{ data.oneDeathPerPeople }} people has 1 death
      </div>
      <div class="grid grid-cols-8 md:grid-cols-12 gap-1">
        <template v-if="data.oneDeathPerPeople < 40">
          <svg
            v-for="v in data.oneDeathPerPeople"
            :key="v"
            :class="`w-8 h-8 ${v === 1 ? 'text-red-600' : 'text-gray-300'}`"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </template>
        <template v-else>
          <svg
            v-for="v in 39"
            :key="v"
            :class="`w-8 h-8 ${v === 1 ? 'text-red-600' : 'text-gray-300'}`"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div class="col-span-4 md:col-span-2 flex items-center">
            <div class="text-gray-600">
              + {{ data.oneDeathPerPeople - 39 }} more
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Country } from "~/@types";

export default Vue.extend({
  props: {
    data: {
      type: Object as PropType<Country>,
      required: true,
    },
  },
});
</script>
