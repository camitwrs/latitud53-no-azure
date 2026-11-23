// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Español en la raíz (latitud53.cl) e inglés en /en. Sitio estático, publicado en Azure Static Web Apps.
export default defineConfig({
  // PUBLIC_SITE_URL la define el despliegue (QA o producción); sin ella, el dominio final.
  site: process.env.PUBLIC_SITE_URL || "https://latitud53.cl",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-CL", en: "en" } },
    }),
  ],
});
