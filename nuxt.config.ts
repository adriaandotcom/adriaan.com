// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: "https://www.adriaan.com",
    name: "adriaan.com",
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-og-image", "nuxt-schema-org"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
      meta: [
        { name: "msapplication-TileColor", content: "#5686f7" },
        { name: "theme-color", content: "#ffffff" },
      ],
      script:
        process.env.NODE_ENV === "production"
          ? [
              { src: "/data.js", async: true, "data-collect-dnt": "true" },
              { src: "/auto-events.js", async: true }
            ]
          : [],
    },
  },
  ogImage: {
    fonts: [
      {
        name: "Georgia",
        weight: 500,
        path: "/fonts/Georgia.ttf",
      },
    ],
  },
  routeRules: {
    "/": { prerender: true },
    "/**": { prerender: true },
    "/yassassin-ouwe-pullen.ics": {
      redirect: { to: "/yassassin.ics", statusCode: 301 },
    },
  },
});
