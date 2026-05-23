# GIDEX — Sitio web (multipágina)

Sitio estático listo para subir a **GitHub** y publicar en **Cloudflare Pages** con dominio `app.gidex.company`.

## Estructura

```
gidex-web/
├── index.html              →  app.gidex.company
├── servicios/index.html    →  app.gidex.company/servicios
├── industrias/index.html   →  app.gidex.company/industrias
├── casos/index.html        →  app.gidex.company/casos
├── proceso/index.html      →  app.gidex.company/proceso
├── cotiza/index.html       →  app.gidex.company/cotiza
├── contacto/index.html     →  app.gidex.company/contacto
├── assets/
│   ├── styles.css           (todo el diseño)
│   ├── app.js               (datos, red de partículas, animaciones)
│   ├── favicon*.png, appletouchicon.png
│   └── ogimage.jpg, ogtwitter.jpg   (imágenes para redes sociales)
├── sitemap.xml
└── robots.txt
```

Las URLs limpias (`/servicios`, etc.) funcionan solas en Cloudflare gracias a la
estructura de carpetas — no hay que configurar nada extra.

---

## Opción 1 — GitHub + Cloudflare Pages (recomendada)

### A. Subir a GitHub
1. Crea un repositorio nuevo en GitHub (ej: `gidex-web`), vacío.
2. Sube **el contenido** de esta carpeta (que `index.html` quede en la raíz del repo).
   Por terminal:
   ```bash
   cd gidex-web
   git init
   git add .
   git commit -m "GIDEX web inicial"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/gidex-web.git
   git push -u origin main
   ```
   (O usa GitHub Desktop / arrastra los archivos en la web de GitHub.)

### B. Publicar en Cloudflare Pages
1. Entra a **Cloudflare → Workers & Pages → Create → Pages → Connect to Git**.
2. Selecciona el repo `gidex-web`.
3. Configuración de build:
   - **Framework preset:** None
   - **Build command:** *(déjalo vacío)*
   - **Build output directory:** `/`  *(la raíz)*
4. **Save and Deploy.** En segundos tendrás una URL `*.pages.dev`.

### C. Dominio `app.gidex.company`
1. En tu proyecto de Pages → **Custom domains → Set up a custom domain**.
2. Escribe `app.gidex.company` y confirma.
3. Si `gidex.company` ya está en Cloudflare, el registro DNS (CNAME) se crea solo.
   Si tu DNS está en otro lado, agrega un **CNAME** `app` apuntando al dominio `*.pages.dev` que te indique Cloudflare.
4. Listo — en pocos minutos queda con HTTPS automático.

---

## Opción 2 — Subida directa (sin GitHub, más rápida para probar)

1. **Cloudflare → Workers & Pages → Create → Pages → Upload assets.**
2. Arrastra **el contenido** de la carpeta `gidex-web` (no la carpeta, sino lo de adentro).
3. Deploy → conecta el dominio igual que en el paso C de arriba.

> Para actualizar el sitio luego, vuelves a subir o haces `git push` (si usaste GitHub, se redepliega solo).

---

## Notas

- **Formulario de contacto:** por ahora solo muestra un mensaje de “recibido” (no envía datos
  a ningún lado todavía). Cuando definas a dónde quieres que lleguen los leads
  (tu correo / WhatsApp / hoja de cálculo), se conecta.
- **WhatsApp:** todos los botones de WhatsApp y el botón flotante apuntan a `+593 97 896 1466`.
  Para cambiarlo, edita la constante `WA` al inicio de `assets/app.js`.
- **Partículas del inicio:** en móvil no reaccionan al scroll ni al toque (solo en escritorio
  siguen al cursor), para evitar el comportamiento raro al desplazar.
- **Editar textos/servicios:** todo el contenido (servicios, industrias, casos, FAQ) está en
  los arreglos al inicio de `assets/app.js`. Cambias el texto ahí y aplica en todas las páginas.
