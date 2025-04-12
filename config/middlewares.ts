export default [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: ["https://localhost:3000", "https://booky-gr1h.vercel.app"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: "*",
      credentials: true,
    },
  },
  "strapi::logger",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
