<template>
  <div>
    <div class="p-5 bg-blue-50 min-h-screen">
      <div class="bg-white p-4 shadow rounded-md">
        <Nuxt />
      </div>
      <footer>
        <div class="p-2 text-gray-700">
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
        <div class="p-2 text-gray-700">
          DISCLAIMER: All the data came from
          <a
            class="
              text-blue-600
              hover:text-blue-800
              transition-colors
              duration-150
              ease-in-out
            "
            rel="noreferrer"
            href="https://github.com/MoH-Malaysia/covid19-public"
            target="_blank"
          >
            MoH Malaysia
          </a>
          and
          <a
            class="
              text-blue-600
              hover:text-blue-800
              transition-colors
              duration-150
              ease-in-out
            "
            rel="noreferrer"
            href="https://disease.sh/"
            target="_blank"
          >
            disease.sh
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DefaultLayout",
});
</script>
