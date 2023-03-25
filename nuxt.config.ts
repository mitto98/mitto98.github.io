export default defineNuxtConfig({
  ssr: true,

  // head: {
  //   title: "Mattia Dapino",
  //   htmlAttrs: {
  //     lang: "it",
  //   },
  //   meta: [
  //     { charset: "utf-8" },
  //     { name: "viewport", content: "width=device-width, initial-scale=1" },
  //     { hid: "description", name: "description", content: "" },
  //   ],
  //   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  // },

  modules: ["@nuxtjs/tailwindcss"],

  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/css/tailwind.scss",
  ],
});
