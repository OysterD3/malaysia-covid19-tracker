import type { Plugin } from "@nuxt/types";
import createApi from "~/api";
import type { Api } from "~/api";

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $api: Api;
  }

  interface Context {
    $api: Api;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $api: Api;
  }
}

const api: Plugin = (ctx, inject) => {
  inject("api", createApi(ctx.$axios));
};

export default api;
