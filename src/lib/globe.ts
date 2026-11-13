// Geometría del logo y del globo del hero (dirección Austral, logo opción punto).
// Proyección ortográfica real: el punto marca Punta Arenas (53° S, 71° O). Portado del plugin de Figma.
// Los colores salen de variables CSS (--logo-fg, --logo-accent, --accent), así el SVG cambia con el modo claro/oscuro.
import { LAND } from "./land";

const rad = (d: number) => (d * Math.PI) / 180;
const f = (n: number) => n.toFixed(2);

type Pt = { x: number; y: number; visible: boolean };

/** Globo de radio R con centro (cx, cy), visto sobre (lat0, lon0). */
function ortho(R: number, cx: number, cy: number, lat0: number, lon0: number) {
  const p0 = rad(lat0);
  const pt = (lon: number, lat: number): Pt => {
    const p = rad(lat), l = rad(lon - lon0);
    return {
      x: R * Math.cos(p) * Math.sin(l),
      y: R * (Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(l)),
      visible: Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(l) >= 0,
    };
  };
  const xy = (q: { x: number; y: number }) => f(cx + q.x) + " " + f(cy - q.y);
  // Recorre [lon, lat] densificando cada tramo para seguir la curvatura del globo.
  const walk = (coords: [number, number][], loop: boolean) => {
    const out: Pt[] = [], n = coords.length;
    for (let i = 0; i < (loop ? n : n - 1); i++) {
      const u = coords[i], v = coords[(i + 1) % n];
      const k = Math.max(1, Math.ceil(Math.max(Math.abs(v[0] - u[0]), Math.abs(v[1] - u[1])) / 2));
      for (let j = 0; j < k; j++) out.push(pt(u[0] + ((v[0] - u[0]) * j) / k, u[1] + ((v[1] - u[1]) * j) / k));
    }
    if (!loop) out.push(pt(coords[n - 1][0], coords[n - 1][1]));
    return out;
  };
  return {
    pt,
    xy,
    /** Figura cerrada: lo que queda detrás se pega al borde del globo. */
    area(coords: [number, number][]) {
      return "M" + walk(coords, true).map((q) => {
        if (q.visible) return xy(q);
        const k = R / (Math.hypot(q.x, q.y) || 1);
        return xy({ x: q.x * k, y: q.y * k });
      }).join(" L") + "Z ";
    },
    /** Línea abierta: solo los tramos visibles. */
    line(coords: [number, number][]) {
      let d = "", pen = false;
      for (const q of walk(coords, false)) {
        if (q.visible) { d += (pen ? "L" : "M") + xy(q) + " "; pen = true; } else pen = false;
      }
      return d;
    },
  };
}

const landPath = (o: ReturnType<typeof ortho>) => LAND.map((poly) => o.area(poly)).join("");

// El logo se ve desde el ecuador, centrado en el Atlántico Sur (40° O): la elipse es el meridiano de Punta Arenas
// (31° al oeste del centro) y el punto va donde cruza los 53° Sur.
const LAT = rad(53), DLON = rad(31);

/** Isotipo de Austral, viewBox 0 0 100 100. `small` = versión compacta para 48 px o menos (menú, footer, favicon):
 *  trazos más gruesos y el punto más grande, con un contorno del color del fondo (--logo-gap)
 *  que lo separa del borde del globo. */
export function logoSvg({ small = false, land = true, title }: { small?: boolean; land?: boolean; title?: string } = {}) {
  const R = 40;
  const dot = { x: 50 - R * Math.cos(LAT) * Math.sin(DLON), y: 50 + R * Math.sin(LAT) };
  const fg = "stroke:var(--logo-fg)";
  const body =
    // Continentes: más marcados en la versión compacta para que se noten a 32 px; el favicon los omite (land: false).
    (land ? `<path d="${landPath(ortho(R, 50, 50, 0, -40))}" style="fill:var(--logo-fg)" fill-opacity="${small ? 0.3 : 0.18}"/>` : "") +
    `<circle cx="50" cy="50" r="${R}" style="${fg}" stroke-width="${small ? 6 : 3.5}"/>` +
    `<ellipse cx="50" cy="50" rx="${f(R * Math.sin(DLON))}" ry="${R}" style="${fg}" stroke-width="${small ? 4.5 : 2.5}" opacity="${small ? 0.75 : 0.45}"/>` +
    `<circle cx="${f(dot.x)}" cy="${f(dot.y)}" r="${small ? 10 : 4}" style="fill:var(--logo-accent);stroke:var(--logo-gap, transparent)" stroke-width="${small ? 4 : 0}"/>`;
  const a11y = title ? `role="img" aria-label="${title}"` : `aria-hidden="true"`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" ${a11y}>${body}</svg>`;
}

/** Favicon autónomo: colores fijos, con su propia regla para pestañas en modo oscuro. */
export function faviconSvg() {
  return logoSvg({ small: true, land: false }).replace(
    ">",
    `><style>svg{--logo-fg:#0b1f33;--logo-accent:#0f8db3}` +
      `@media (prefers-color-scheme: dark){svg{--logo-fg:#f3f8fb;--logo-accent:#35c2e8}}</style>`,
  );
}

// Globo ilustrativo del hero: misma vista del logo, inclinada 25° al sur, con retícula y el paralelo 53° resaltado.
// HERO_LON es la longitud central final (Atlántico Sur): el script del hero anima el giro hasta ahí.
export const HERO_LON = -40;
const MERIDIANS = Array.from({ length: 18 }, (_, k) => -71 + 20 * (k - 9)); // incluye el de Punta Arenas (71° O)

/** Trazados del globo del hero visto sobre la longitud lon0 (para el SVG inicial y para la animación). */
export function heroGlobeData(lon0 = HERO_LON) {
  const o = ortho(46, 50, 50, -25, lon0);
  const grid =
    MERIDIANS.map((lon) => o.line([[lon, -90], [lon, 90]])).join("") +
    [60, 30, 0, -30, -60].map((lat) => o.line([[-180, lat], [180, lat]])).join("");
  const pin = o.pt(-71, -53.16);
  return {
    land: landPath(o),
    grid,
    parallel: o.line([[-180, -53], [180, -53]]),
    pin: { x: f(50 + pin.x), y: f(50 - pin.y), visible: pin.visible },
  };
}

/** Posición de la etiqueta "53° S": a la izquierda del punto, sin tocarlo. */
export const latLabel = (pin: { x: string; y: string }) => ({ x: (+pin.x - 6.5).toFixed(2), y: (+pin.y + 1.8).toFixed(2) });

export function heroGlobeSvg() {
  const d = heroGlobeData();
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" aria-hidden="true">` +
    `<path class="land" d="${d.land}" style="fill:var(--logo-fg)" fill-opacity="0.14"/>` +
    `<circle cx="50" cy="50" r="46" style="stroke:var(--logo-fg)" stroke-width="1.6"/>` +
    `<path class="grid" d="${d.grid}" style="stroke:var(--logo-fg)" stroke-width="0.5" opacity="0.4" stroke-linecap="round"/>` +
    `<path class="parallel" d="${d.parallel}" pathLength="1" style="stroke:var(--accent)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>` +
    `<circle class="halo" cx="${d.pin.x}" cy="${d.pin.y}" r="3.4" style="fill:var(--accent)" opacity="0"/>` +
    `<circle class="pin" cx="${d.pin.x}" cy="${d.pin.y}" r="3.4" style="fill:var(--accent)"/>` +
    // Etiqueta de la latitud, a la izquierda del punto. El borde del color de fondo la separa de la retícula.
    `<text class="lat" x="${latLabel(d.pin).x}" y="${latLabel(d.pin).y}" text-anchor="end" paint-order="stroke" stroke-width="1.6" stroke-linejoin="round" style="fill:var(--accent);stroke:var(--hero-bg);font:700 5.5px var(--font-display)">53° S</text>` +
    `</svg>`
  );
}
