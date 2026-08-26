# GaliControl Brigantia — web

Web corporativa de **GALICONTROL BRIGANTIA SL** (A Coruña) orientada a captar
contactos y solicitudes de presupuesto.

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Vercel Web Analytics ·
Resend para el envío del formulario. Sin CMS y sin base de datos.

---

## 1. Cómo ejecutar

```bash
npm install
cp .env.example .env.local   # y rellena los valores
npm run dev                  # http://localhost:3000
```

Otros comandos:

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript
npm run build       # build de producción
npm start           # sirve el build
```

---

## 2. ⚠️ Datos pendientes antes de publicar

Ya configurados: teléfono y WhatsApp (**+34 626 58 81 72**), logotipo, colores
corporativos y dirección.

Siguen pendientes:

| Dato | Dónde | Estado |
| --- | --- | --- |
| Email de contacto | `NEXT_PUBLIC_EMAIL` | `PENDIENTE_EMAIL` |
| Buzón que recibe los formularios | `LEADS_EMAIL` | sin definir |
| Claves de Resend | `RESEND_API_KEY`, `FROM_EMAIL` | sin definir |
| Dominio definitivo | `NEXT_PUBLIC_SITE_URL` | `galicontrolbrigantia.es` (provisional) |
| CIF | `NEXT_PUBLIC_TAX_ID` | `PENDIENTE_CIF` |
| Redes sociales | `NEXT_PUBLIC_INSTAGRAM`, etc. | sin definir |
| Verificación de Search Console | `NEXT_PUBLIC_GSC_VERIFICATION` | sin definir |
| Fotografías reales | `public/` + componente `<Photo />` | huecos con marcador |

Mientras un dato siga en `PENDIENTE_*`, la web **no lo publica en los datos
estructurados (JSON-LD)** ni en el aviso legal, para no dar información falsa.
El email es el único dato de contacto que hoy aparece vacío en el footer.

## 3. Dónde cambiar cada cosa

### Teléfono, WhatsApp, email, dirección, redes
Todo está centralizado en **`src/config/site.ts`**. Los datos de contacto se
leen de variables de entorno (`NEXT_PUBLIC_*`) para poder cambiarlos desde
Vercel sin tocar el código. Ningún componente repite estos datos.

### Mensajes de WhatsApp por página
En `src/config/site.ts` → `whatsappMessages`. Cada página envía un mensaje
distinto para saber de dónde viene el contacto. Si añades una página nueva,
añade también su mensaje aquí.

### Menú y footer
En `src/config/site.ts` → `mainNav` y `footerNav`.

### Textos de las páginas
Cada página es un archivo en `src/app/<ruta>/page.tsx`. El texto está
directamente en el JSX, en español y sin capas intermedias.

- Portada: `src/app/page.tsx`
- Control de accesos: `src/app/control-de-accesos/page.tsx`
- Eventos: `src/app/personal-eventos/page.tsx`
- Locales: `src/app/control-accesos-locales/page.tsx`
- Empresas: `src/app/personal-auxiliar-empresas/page.tsx`
- FAQs: `src/app/preguntas-frecuentes/page.tsx`
- Controlador vs vigilante: `src/app/control-accesos-vs-vigilante-seguridad/page.tsx`
- Presupuesto: `src/app/presupuesto/page.tsx`
- Legales: `src/app/aviso-legal/`, `src/app/privacidad/`, `src/app/cookies/`

### Preguntas frecuentes
En **`src/content/faqs.ts`**. Es la fuente única: alimenta la página de FAQs,
el bloque resumido de la portada y el JSON-LD `FAQPage`. Para que una pregunta
salga también en la portada, añade su texto exacto a `homeFaqQuestions`.

### Logotipo
`src/components/Logo.tsx`. La rosa de los vientos de la marca está redibujada
como SVG en línea: se ve nítida a cualquier tamaño, funciona sobre fondo claro
y oscuro y no genera ninguna petición extra. También está suelta en
`public/logo-marca.svg` y como favicon en `src/app/icon.svg`.

El logotipo (la palabra «GALICONTROL») está compuesto con la tipografía de la
web, no con la tipografía celta del logo original. Si consigues el lockup
horizontal en SVG o PNG con fondo transparente, déjalo en `public/logo.svg` y
sustituye el contenido de `<LogoMark />` por un `<Image src="/logo.svg" … />`:
las instrucciones exactas están comentadas en el propio archivo.

### Colores corporativos
`src/app/globals.css`, bloque `@theme`. La escala `--color-brand-*` sale del
azul del logotipo (`#3F62BE`). El `--color-accent-*` (ámbar) **no pertenece al
logo**: es un acento funcional que se usa solo en el botón de envío del
formulario y en el CTA del menú móvil. Para eliminarlo, iguala esos tokens a
los de `brand`.

### Fotografías
El componente `<Photo />` (`src/components/Photo.tsx`) muestra un marcador con
la proporción correcta mientras no hay foto. Cuando tengas las imágenes,
guárdalas en `public/` y pásale `src` y `alt`:

```tsx
<Photo src="/fotos/acceso-sala.jpg" alt="Personal de GaliControl en el acceso de una sala" ratio="4/3" />
```

El diseño no se rompe: el hueco ya está reservado.

### Imagen para compartir (WhatsApp, redes)
`public/og.png` (1200×630). Sustitúyela por otra del mismo tamaño si quieres.

### Aviso para buscadores IA
`public/llms.txt`. Si cambia el dominio, actualiza también las URLs de ese
archivo (es estático y no lee la configuración).

### Google Search Console
Da de alta el dominio en Search Console, elige la verificación por etiqueta
HTML y copia **solo el valor** del atributo `content` en la variable
`NEXT_PUBLIC_GSC_VERIFICATION`. Tras el redeploy, pulsa «Verificar» y envía
`https://tudominio/sitemap.xml`.

### Año del aviso de copyright
`src/components/Footer.tsx` → constante `year`.

---

## 4. Formulario de presupuesto (Resend)

El formulario se envía **desde el servidor** con una Server Action
(`src/app/presupuesto/actions.ts`). El usuario no abre Gmail ni su cliente de
correo.

Incluye validación en servidor, mensajes de error por campo, pantalla de éxito,
honeypot antispam y límite de 3 envíos cada 10 minutos por IP.

### Configurar las claves

1. Crea una cuenta en [resend.com](https://resend.com) y verifica el dominio
   desde el que se enviarán los correos.
2. Genera una API key.
3. Define estas variables (en `.env.local` y en Vercel):

```
RESEND_API_KEY=re_xxxxxxxxxxxx      # clave de Resend (nunca en GitHub)
LEADS_EMAIL=dani@…                  # buzón que recibe las solicitudes
FROM_EMAIL=web@tudominio.es         # remitente verificado en Resend
NEXT_PUBLIC_SITE_URL=https://…      # dominio final
```

Si faltan, el formulario no se rompe: muestra un aviso pidiendo llamar o
escribir por WhatsApp y deja constancia del problema en los logs del servidor.

### Correo que recibe Dani

- **Asunto:** `[WEB GALICONTROL] Solicitud desde Eventos – 12/09/2026`
- **Cuerpo:** nombre, empresa, teléfono, fecha del servicio, comentario, página
  de origen, CTA pulsado y fecha/hora de envío.

El origen se detecta automáticamente por query string y, como respaldo, por la
cabecera `Referer`.

---

## 5. Analítica

Vercel Web Analytics (sin cookies). Se registran estos eventos con `pathname`,
`cta` y `origin`:

| Evento | Cuándo |
| --- | --- |
| `phone_click` | clic en cualquier botón de llamar |
| `whatsapp_click` | clic en cualquier botón de WhatsApp |
| `budget_open` | clic en «Pedir presupuesto» |
| `budget_submit` | envío del formulario |
| `budget_success` | solicitud enviada correctamente |

Una llamada `tel:` no puede indicar al teléfono desde qué página se ha marcado;
por eso se registra el clic con su `pathname`. Con estos eventos se puede ver
qué páginas generan contactos.

**Hay que activar Web Analytics** en el proyecto de Vercel (pestaña *Analytics*)
para que el script se cargue. En local siempre da un 404, es normal.

---

## 6. Desplegar en Vercel

1. Sube el repositorio a GitHub.
2. En Vercel: *Add New… → Project* → importa el repositorio.
3. Framework: Next.js (se detecta solo). No hace falta tocar los comandos.
4. *Settings → Environment Variables*: añade las variables del apartado 4.
   **No crees variables con el valor vacío**: o les pones valor o no las crees.
   Una variable vacía no equivale a «no definida». El código ya lo tolera —
   ignora los valores vacíos y usa los valores por defecto — pero deja la web
   apuntando al dominio provisional sin que se note.
5. *Settings → Domains*: añade el dominio definitivo.
6. *Analytics*: activa Web Analytics.
7. Redeploy después de cambiar variables de entorno: Next.js incrusta las
   `NEXT_PUBLIC_*` durante el build, así que cambiarlas no tiene efecto hasta
   que se vuelve a desplegar.

Cada push a la rama principal despliega automáticamente.

---

## 7. Notas de contenido

La web **no presenta a GaliControl como empresa de seguridad privada** ni
atribuye a su personal funciones legalmente reservadas a los vigilantes de
seguridad. Hay una página específica (`/control-accesos-vs-vigilante-seguridad/`)
explicando las diferencias.

No se han inventado datos: no hay reseñas, valoraciones, precios, años de
experiencia, número de empleados, clientes ni certificaciones. Si añades
contenido nuevo, mantén ese criterio.
