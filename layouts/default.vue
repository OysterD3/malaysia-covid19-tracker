<template>
  <div>
    <div class="p-5 bg-blue-50 min-h-screen">
      <div class="bg-white p-4 shadow rounded-md">
        <Nuxt />
      </div>
      <footer>
        <div class="p-2 text-gray-500">
          Built by
          <a
            class="
              text-blue-300
              hover:text-blue-500
              transition-colors
              duration-150
              ease-in-out
            "
            href="https://oysterlee.dev"
            target="_blank"
          >
            Oyster Lee
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
