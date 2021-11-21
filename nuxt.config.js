export default {
  ssr: false,
  target: "static",
  head: {
    title: "Mattia Dapino",
    htmlAttrs: {
      lang: "it",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  components: true,
  plugins: [{ src: "@/plugins/vue-plugins.js" }],
  buildModules: ["@nuxtjs/tailwindcss"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};
