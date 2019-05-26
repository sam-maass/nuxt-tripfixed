import NuxtConfiguration from "@nuxt/config";

const config: NuxtConfiguration = {
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: "description", name: "description", content: "Meta description" }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Comfortaa:400,700|Open+Sans"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ]
  },
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-93772101-1"
      }
    ]
  ]
  // Type or Press `Ctrl + Space` for autocompletion
};

export default config;
