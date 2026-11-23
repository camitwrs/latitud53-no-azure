// Política de privacidad de la web (Ley 19.628, modificada por la Ley 21.719). Sigue el contenido mínimo del
// Art. 14 ter (deber de información y transparencia) y los plazos del ejercicio de derechos del texto oficial.
// Borrador generado con compliance-cl: no constituye asesoría legal; revisar antes de publicar.
// Datos de la empresa según su constitución (Registro de Empresas y Sociedades, 22-oct-2026): domicilio social en la
// comuna de Punta Arenas y gerente general como representante. Agregar dirección postal completa cuando exista.
import type { Locale } from "./ui";

export const COMPANY = {
  legalName: "Latitud53 SpA",
  rut: "78.545.251-8",
  address: "Punta Arenas, Región de Magallanes y de la Antártica Chilena, Chile",
  representative: "Jaime Daniel Álvarez Gerding",
  email: "contacto@latitud53.cl",
};

export const POLICY_VERSION = "1.0";

/** Ruta de la política en cada idioma. */
export const privacyPath = (locale: Locale) => (locale === "es" ? "/privacidad/" : "/en/privacy/");

type Section = { h: string; p: string[] };

// {email} se reemplaza por un enlace al correo de contacto.
export const privacy: Record<Locale, { title: string; description: string; updated: string; sections: Section[] }> = {
  es: {
    title: "Política de privacidad",
    description: "Cómo Latitud53 trata los datos personales que recibe a través de su sitio web.",
    updated: `Versión ${POLICY_VERSION} · Última actualización: 11 de noviembre de 2026`,
    sections: [
      {
        h: "1. Quién es responsable de tus datos",
        p: [
          `${COMPANY.legalName}, RUT ${COMPANY.rut}, con domicilio en ${COMPANY.address}, representada por su gerente general, ${COMPANY.representative}.`,
          "Para temas sobre tus datos personales, revisa el punto 8.",
        ],
      },
      {
        h: "2. Qué datos tratamos",
        p: [
          "Solo los que nos entregas en el formulario de contacto: tu nombre, tu correo electrónico y tu mensaje. Corresponden a personas que nos escriben desde este sitio.",
          "No pedimos datos sensibles, como información de salud. Te pedimos no incluirlos en tu mensaje.",
          "Este sitio no usa cookies de publicidad ni de analítica. Solo guarda en tu navegador si prefieres el modo claro u oscuro, y ese dato no se nos envía. Nuestro proveedor de alojamiento puede registrar datos técnicos de la conexión, como la dirección IP, para la seguridad del servicio.",
        ],
      },
      {
        h: "3. Para qué los usamos y con qué base",
        p: [
          "Usamos tus datos para responder tu consulta y dar seguimiento a la conversación, por ejemplo para coordinar una demo o explorar una alianza.",
          "La base es tu consentimiento, que entregas al marcar la casilla del formulario antes de enviarlo. No usamos tus datos para enviarte publicidad y no los vendemos.",
        ],
      },
      {
        h: "4. Con quién los compartimos",
        p: [
          "Con proveedores que nos prestan servicios y tratan los datos por nuestra cuenta, bajo contrato y sin usarlos para fines propios: el alojamiento del sitio y del formulario (Microsoft Azure) y el servicio de envío de correo electrónico.",
          "No comunicamos tus datos a otros terceros, salvo que una ley o una autoridad competente lo exija.",
        ],
      },
      {
        h: "5. Transferencia fuera de Chile",
        p: [
          "Estos proveedores pueden tratar los datos fuera de Chile, por ejemplo en Estados Unidos. Si el país de destino no ofrece un nivel adecuado de protección, la transferencia se respalda con las cláusulas contractuales tipo aprobadas para ese fin.",
        ],
      },
      {
        h: "6. Cuánto tiempo los guardamos",
        p: [
          "Conservamos los mensajes del formulario por 12 meses desde tu último contacto con nosotros. Después los eliminamos.",
          "Si la conversación da paso a una relación comercial, guardaremos los datos necesarios mientras dure esa relación y por los plazos que exija la ley.",
        ],
      },
      {
        h: "7. Cómo los protegemos",
        p: [
          "El sitio y el formulario funcionan con conexión cifrada (HTTPS). Solo las personas del equipo que responden las consultas acceden a los mensajes, y nuestros proveedores aplican sus propias medidas de seguridad. El formulario tiene protección contra envíos automatizados.",
        ],
      },
      {
        h: "8. Tus derechos",
        p: [
          "Puedes pedir acceso, rectificación, supresión, oposición y portabilidad de tus datos, y retirar tu consentimiento cuando quieras. Retirarlo no afecta lo que ya hicimos con él.",
          "Para hacerlo, escríbenos a {email} indicando qué necesitas. Acusamos recibo y respondemos en un plazo máximo de 30 días corridos, que podemos extender una sola vez por otros 30 días.",
          "La rectificación, la supresión y la oposición son siempre gratuitas. El acceso es gratuito al menos una vez por trimestre.",
        ],
      },
      {
        h: "9. Si no estás de acuerdo con nuestra respuesta",
        p: [
          "Si rechazamos tu solicitud o no respondemos a tiempo, puedes recurrir ante la Agencia de Protección de Datos Personales de Chile.",
        ],
      },
      {
        h: "10. Decisiones automatizadas y origen de los datos",
        p: [
          "No tomamos decisiones automatizadas ni elaboramos perfiles con tus datos. Todos los datos los recibimos directamente de ti.",
        ],
      },
      {
        h: "11. Cambios a esta política",
        p: ["Si cambiamos esta política, publicaremos aquí la nueva versión con su fecha."],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    description: "How Latitud53 handles the personal data it receives through its website.",
    updated: `Version ${POLICY_VERSION} · Last updated: November 11, 2026`,
    sections: [
      {
        h: "1. Who is responsible for your data",
        p: [
          `${COMPANY.legalName}, Chilean tax ID (RUT) ${COMPANY.rut}, based in ${COMPANY.address}, represented by its general manager, ${COMPANY.representative}.`,
          "For anything related to your personal data, see section 8.",
        ],
      },
      {
        h: "2. What data we process",
        p: [
          "Only what you give us in the contact form: your name, your email address and your message. This applies to people who write to us through this site.",
          "We do not ask for sensitive data, such as health information. Please do not include it in your message.",
          "This site does not use advertising or analytics cookies. It only stores in your browser whether you prefer light or dark mode, and that setting is never sent to us. Our hosting provider may log technical connection data, such as your IP address, for security purposes.",
        ],
      },
      {
        h: "3. Why we use it and on what basis",
        p: [
          "We use your data to answer your inquiry and follow up on the conversation, for example to arrange a demo or explore a partnership.",
          "The legal basis is your consent, which you give by ticking the box in the form before sending it. We do not use your data to send you advertising and we do not sell it.",
        ],
      },
      {
        h: "4. Who we share it with",
        p: [
          "With providers that deliver services to us and process the data on our behalf, under contract and without using it for their own purposes: website and form hosting (Microsoft Azure) and our email service provider.",
          "We do not disclose your data to any other third party unless required by law or by a competent authority.",
        ],
      },
      {
        h: "5. Transfers outside Chile",
        p: [
          "These providers may process data outside Chile, for example in the United States. If the destination country does not offer an adequate level of protection, the transfer is backed by the standard contractual clauses approved for that purpose.",
        ],
      },
      {
        h: "6. How long we keep it",
        p: [
          "We keep contact form messages for 12 months after your last contact with us. Then we delete them.",
          "If the conversation leads to a business relationship, we will keep the data needed for as long as that relationship lasts and for the periods required by law.",
        ],
      },
      {
        h: "7. How we protect it",
        p: [
          "The site and the form use an encrypted connection (HTTPS). Only the team members who answer inquiries can access the messages, and our providers apply their own security measures. The form is protected against automated submissions.",
        ],
      },
      {
        h: "8. Your rights",
        p: [
          "You can request access to, rectification, erasure and portability of your data, object to its processing, and withdraw your consent at any time. Withdrawing consent does not affect processing carried out before then.",
          "To do so, email us at {email} and tell us what you need. We will acknowledge your request and reply within 30 calendar days at most. We may extend that period once, by up to 30 more days.",
          "Rectification, erasure and objection are always free of charge. Access is free of charge at least once per quarter.",
        ],
      },
      {
        h: "9. If you disagree with our response",
        p: [
          "If we reject your request or do not reply in time, you can file a complaint with Chile's Personal Data Protection Agency (Agencia de Protección de Datos Personales).",
        ],
      },
      {
        h: "10. Automated decisions and data source",
        p: ["We do not make automated decisions or build profiles with your data. We receive all data directly from you."],
      },
      {
        h: "11. Changes to this policy",
        p: ["If we change this policy, we will publish the new version here with its date."],
      },
    ],
  },
};
