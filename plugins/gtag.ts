import { NuxtConfig, Plugin } from "@nuxt/types";
import { NuxtApp } from "@nuxt/types/app";
import Vue from "vue";
import VueGtag from "vue-gtag";

const gtag: Plugin = (ctx) => {
  console.log("env =>", ctx.env);
  if (ctx.env.GA_ID) {
    Vue.use(VueGtag, {
      config: { id: "G-WKTQVDJ2T7" },
    });
  }
};

export default gtag;
