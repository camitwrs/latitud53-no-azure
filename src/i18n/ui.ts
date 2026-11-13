// Textos de la landing en español (por defecto, en la raíz) e inglés (/en). Vienen del diseño aprobado
// (dirección Austral). Provisorios hasta que los socios confirmen nombres, datos de contacto y casos.

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const ui = {
  es: {
    htmlLang: "es-CL",
    seo: {
      title: "Latitud53 | Software con coordenadas claras",
      description: "Latitud53 crea soluciones digitales que ordenan operaciones complejas. Hoy, en logística y comercio exterior.",
      ogLocale: "es_CL",
    },
    skip: "Saltar al contenido",
    nav: [
      { id: "productos", label: "Productos" },
      { id: "como-trabajamos", label: "Cómo trabajamos" },
      { id: "nosotros", label: "Nosotros" },
      { id: "contacto", label: "Contacto" },
    ],
    navLabel: "Navegación principal",
    langLabel: "Idioma",
    theme: { label: "Modo de color", light: "Modo claro", dark: "Modo oscuro" },
    hero: {
      eyebrow: "Soluciones digitales · 53° S",
      title: "Software con coordenadas claras.",
      sub: "Inspirados en el paralelo 53° Sur, creamos soluciones digitales que ordenan operaciones complejas.",
      cta: "Conversemos",
      cta2: "Ver productos",
    },
    stats: [
      ["53° S", "El paralelo que inspira nuestro nombre"],
      ["3", "Productos propios"],
      ["B2B", "Software para empresas"],
    ],
    cases: {
      eyebrow: "Productos y casos",
      title: "Tres productos propios. Dos ya en operación.",
      items: [
        {
          id: "suplio",
          tag: "Seashipping · Zona franca",
          title: "Suplio",
          desc: "Plataforma digital multi-portal de Seashipping para la compra y venta de productos en zona franca, Chile. Gestiona todo el proceso, desde la solicitud de pedido hasta la entrega.",
          chips: ["Multi-portal", "Zona franca", "Del pedido a la entrega"],
        },
        {
          id: "patagoniatrack",
          tag: "Swisslog · Logística austral",
          title: "PatagoniaTrack",
          desc: "Plataforma digital de Swisslog para la gestión integral de la cadena de suministro. Integra proveedores, operadores y destinatarios en un mismo entorno.",
          chips: ["Cadena de suministro", "Visibilidad", "Control por etapa"],
        },
        {
          id: "mercado-patagonico",
          tag: "Abastecimiento · Hotelería",
          title: "Mercado Patagónico",
          status: "En desarrollo",
          desc: "Abastecimiento de alimentos para la hotelería de Magallanes.",
          chips: ["Alimentos", "Hotelería", "Magallanes"],
        },
      ],
      next: { title: "Más productos en camino.", desc: "Seguimos trazando nuevas coordenadas.", cta: "Escríbenos" },
    },
    steps: {
      eyebrow: "Cómo trabajamos",
      title: "De la idea al producto en cuatro pasos.",
      items: [
        ["01", "Idea", "Entendemos el negocio y definimos qué construir."],
        ["02", "Diseño", "Prototipamos la experiencia antes de escribir código."],
        ["03", "Desarrollo", "Construimos por etapas, con entregas visibles."],
        ["04", "Lanzamiento", "Publicamos, medimos y seguimos mejorando."],
      ],
    },
    about: {
      eyebrow: "Nosotros",
      title: "Un nombre inspirado en el sur.",
      text: "Latitud53 crea soluciones digitales. Su nombre se inspira en el paralelo 53° Sur, que cruza Magallanes. Nuestro equipo trabaja desde Viña del Mar y Santiago, con experiencia en logística y comercio exterior en la zona sur de Chile.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Fijemos el punto de encuentro.",
      text: "Escríbenos para una demo, una alianza o cualquier consulta.",
      info: { place: "Viña del Mar y Santiago, Chile", email: "contacto@latitud53.cl", whatsapp: "+56 9 XXXX XXXX" },
      fields: {
        name: ["Nombre", "Tu nombre"],
        email: ["Correo", "tu@empresa.cl"],
        message: ["Mensaje", "¿En qué te podemos ayudar?"],
      },
      consent: ["Acepto que Latitud53 trate mis datos para responder mi consulta, según su ", "Política de privacidad", "."],
      send: "Enviar mensaje",
      sending: "Enviando…",
      sent: "Mensaje enviado. ¡Gracias! Te responderemos pronto.",
      error: "No pudimos enviar el mensaje. Escríbenos directo a contacto@latitud53.cl.",
      required: "Campo obligatorio",
    },
    footer: { copyright: "© 2026 Latitud53", navLabel: "Navegación del pie de página" },
    statsLabel: "Latitud53 en cifras",
  },
  en: {
    htmlLang: "en",
    seo: {
      title: "Latitud53 | Software with clear coordinates",
      description: "Latitud53 builds digital solutions that bring order to complex operations. Today, in logistics and foreign trade.",
      ogLocale: "en_US",
    },
    skip: "Skip to content",
    nav: [
      { id: "productos", label: "Products" },
      { id: "como-trabajamos", label: "How we work" },
      { id: "nosotros", label: "About" },
      { id: "contacto", label: "Contact" },
    ],
    navLabel: "Main navigation",
    langLabel: "Language",
    theme: { label: "Color mode", light: "Light mode", dark: "Dark mode" },
    hero: {
      eyebrow: "Digital solutions · 53° S",
      title: "Software with clear coordinates.",
      sub: "Inspired by the 53rd parallel south, we build digital solutions that bring order to complex operations.",
      cta: "Let's talk",
      cta2: "See products",
    },
    stats: [
      ["53° S", "The parallel behind our name"],
      ["3", "Products of our own"],
      ["B2B", "Software for businesses"],
    ],
    cases: {
      eyebrow: "Products & cases",
      title: "Three products of our own. Two already in operation.",
      items: [
        {
          id: "suplio",
          tag: "Seashipping · Free trade zone",
          title: "Suplio",
          desc: "Seashipping's multi-portal digital platform for buying and selling products in a free trade zone in Chile. It manages the whole process, from order request to delivery.",
          chips: ["Multi-portal", "Free trade zone", "Order to delivery"],
        },
        {
          id: "patagoniatrack",
          tag: "Swisslog · Southern logistics",
          title: "PatagoniaTrack",
          desc: "Swisslog's digital platform for end-to-end supply chain management. It brings suppliers, operators and recipients into a single environment.",
          chips: ["Supply chain", "Visibility", "Stage-by-stage control"],
        },
        {
          id: "mercado-patagonico",
          tag: "Supply · Hotels",
          title: "Mercado Patagónico",
          status: "In development",
          desc: "Food supply for the hotel industry in Magallanes.",
          chips: ["Food", "Hotels", "Magallanes"],
        },
      ],
      next: { title: "More products on the way.", desc: "We keep charting new coordinates.", cta: "Write to us" },
    },
    steps: {
      eyebrow: "How we work",
      title: "From idea to product in four steps.",
      items: [
        ["01", "Idea", "We understand the business and define what to build."],
        ["02", "Design", "We prototype the experience before writing code."],
        ["03", "Development", "We build in stages, with visible deliveries."],
        ["04", "Launch", "We publish, measure and keep improving."],
      ],
    },
    about: {
      eyebrow: "About",
      title: "A name inspired by the south.",
      text: "Latitud53 builds digital solutions. Its name is inspired by the 53rd parallel south, which crosses Magallanes. Our team works from Viña del Mar and Santiago, with experience in logistics and foreign trade in southern Chile.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's set a meeting point.",
      text: "Write to us for a demo, a partnership or any question.",
      info: { place: "Viña del Mar and Santiago, Chile", email: "contacto@latitud53.cl", whatsapp: "+56 9 XXXX XXXX" },
      fields: {
        name: ["Name", "Your name"],
        email: ["Email", "you@company.com"],
        message: ["Message", "How can we help?"],
      },
      consent: ["I agree that Latitud53 may process my data to answer my inquiry, as described in its ", "Privacy policy", "."],
      send: "Send message",
      sending: "Sending…",
      sent: "Message sent. Thank you! We'll get back to you soon.",
      error: "We couldn't send your message. Write to us at contacto@latitud53.cl.",
      required: "Required field",
    },
    footer: { copyright: "© 2026 Latitud53", navLabel: "Footer navigation" },
    statsLabel: "Latitud53 in numbers",
  },
} as const;

/** Ruta de la página en cada idioma: español en la raíz, inglés en /en. */
export const homePath = (locale: Locale) => (locale === "es" ? "/" : "/en/");
