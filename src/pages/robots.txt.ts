import type { APIRoute } from "astro";

// robots.txt con el dominio del despliegue (PUBLIC_SITE_URL en QA y producción).
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://latitud53.cl");
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap-index.xml", base).href}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
