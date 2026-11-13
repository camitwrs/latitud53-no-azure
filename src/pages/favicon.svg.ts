// Favicon generado con la misma geometría del logo (versión chica, sin continentes).
import { faviconSvg } from "../lib/globe";

export function GET() {
  return new Response(faviconSvg(), { headers: { "Content-Type": "image/svg+xml" } });
}
