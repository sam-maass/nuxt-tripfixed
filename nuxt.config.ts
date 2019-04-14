import NuxtConfiguration from "@nuxt/config";

const config: NuxtConfiguration = {
  head: {
    titleTemplate: "%s - Nuxt.js",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: "description", name: "description", content: "Meta description" }
    ]
  }
  // Type or Press `Ctrl + Space` for autocompletion
};

export default config;
