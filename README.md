# CASA NOMA | Website concept by 2WEB

Sitio web de demostración para **CASA NOMA**, un restaurante **ficticio** de gastronomía contemporánea. Es el Proyecto 01 del portafolio de 2WEB.

> CASA NOMA es una marca conceptual. No existe como negocio: los platillos, precios, horarios, ubicación y redes son ilustrativos, y los formularios no envían datos a ningún lugar.

Tecnología: HTML, CSS y JavaScript puros. Sin base de datos, sin pagos, sin claves ni secretos, sin paso de compilación. Se publica gratis en Cloudflare Pages.

## Estructura

```
casa-noma/
├─ index.html          Sitio completo (una sola página con secciones)
├─ 404.html            Página de error
├─ favicon.svg         Icono del sitio
├─ robots.txt          Permite a los buscadores indexar el sitio
├─ _headers            Seguridad y caché en Cloudflare Pages
├─ css/styles.css      Estilos
├─ js/main.js          Menú móvil, pestañas del menú, galería y formularios
└─ assets/img/         Fotografías (.webp) y LICENCIAS.md
```

## Publicar desde Android, paso a paso

Necesitas una cuenta gratis en GitHub (github.com) y otra en Cloudflare (dash.cloudflare.com). Los nombres de los botones pueden cambiar un poco, porque ambos sitios actualizan su diseño.

### Parte 1. Subir el proyecto a GitHub

1. En el teléfono, abre el archivo ZIP del proyecto con la app **Archivos** y elige **Extraer**. Se creará la carpeta `casa-noma`.
2. Entra a github.com con Chrome. Toca el **+** (arriba) y elige **New repository**.
3. Nombre: `casa-noma`. Elige **Public** y toca **Create repository**.
4. Toca **uploading an existing file**. Selecciona estos archivos de la carpeta `casa-noma`: `index.html`, `404.html`, `favicon.svg`, `robots.txt`, `_headers` y `README.md`. Toca **Commit changes**.
5. GitHub en el teléfono no sube carpetas completas, así que se crean una por una:
   1. Toca **Add file**, luego **Create new file**.
   2. En el nombre escribe `css/.gitkeep` (al escribir la barra `/` se crea la carpeta). Toca **Commit changes**.
   3. Entra a la carpeta `css`, toca **Add file**, **Upload files**, elige `styles.css` y haz **Commit changes**.
   4. Repite con `js/.gitkeep` y sube `main.js`.
   5. Repite con `assets/img/.gitkeep` y sube las dos fotos `.webp` y `LICENCIAS.md`.
6. Si te cuesta, en Chrome activa el menú de los tres puntos y marca **Sitio para computadora**.

### Parte 2. Publicarlo en Cloudflare Pages

1. Entra a dash.cloudflare.com y crea tu cuenta gratuita.
2. Ve a **Workers & Pages**, toca **Create application**, elige la pestaña **Pages** y **Connect to Git** (Conectar con Git).
3. Autoriza GitHub, elige el repositorio `casa-noma` y toca **Begin setup**.
4. Configura así:
   - **Production branch:** `main`
   - **Framework preset:** None
   - **Build command:** déjalo vacío (si el panel lo exige, escribe `exit 0`)
   - **Build output directory:** `/` (si no lo acepta, escribe `.`)
5. Toca **Save and Deploy** y espera uno o dos minutos.
6. Cloudflare te dará una dirección terminada en `.pages.dev`. Ábrela en tu teléfono.

### Parte 3. Un ajuste después de publicar

Para que al compartir el enlace aparezca la imagen, edita `index.html` en GitHub (icono del lápiz) y cambia esta línea con tu dirección real:

```
<meta property="og:image" content="https://TU-SITIO.pages.dev/assets/img/parrilla-papas.webp">
```

Guarda con **Commit changes**. Cloudflare actualizará el sitio solo.

## Antes de mostrarlo a clientes

- **Fotos:** hoy hay dos imágenes y tres recuadros marcados como "Fotografía pendiente". Sustitúyelos por fotos con licencia libre (Unsplash o Pexels) usando el mismo nombre de archivo, y anota la fuente en `assets/img/LICENCIAS.md`.
- **Licencias:** las dos imágenes actuales figuran como "por confirmar".
- **WhatsApp:** el botón abre un chat con el número de ejemplo de 2WEB. Es visible para cualquier visitante. Si no quieres eso, bórralo de la sección Contacto.

## Pruebas realizadas

Se probaron 100 comprobaciones automáticas en un navegador real (Chromium) con pantallas de 320, 360, 768 y 1280 píxeles:

- Sin scroll horizontal en ningún tamaño.
- Botones y campos de al menos 44 px de alto.
- Menú móvil: abre, cierra con Escape, al tocar fuera y al elegir una sección.
- Enlaces internos: todos llegan a su sección.
- Menú de comida: las cuatro categorías, también con las flechas del teclado.
- Galería: el visor abre y cierra.
- Formularios: rechazan campos vacíos, fechas pasadas y correos inválidos; muestran estado de carga y el mensaje de demostración; se reinician.
- Código: sin errores de JavaScript, sin identificadores duplicados, sin referencias ni archivos rotos, todos los campos con etiqueta.
- Página 404 y archivos de configuración servidos correctamente.
- Rendimiento: unos 200 KB sin contar fuentes, sin saltos de diseño.

Un fallo encontrado y corregido: los mensajes de error movían el botón de enviar y podían hacer fallar el toque.

No se pudo probar en un Android físico ni medir las fuentes de Google ni la velocidad real por red móvil. Revísalo tú en tu teléfono una vez publicado, sobre todo el selector de fecha.

## Mantenimiento

- **Editar textos, precios y horarios:** en GitHub abre `index.html`, toca el lápiz, cambia el texto y guarda con **Commit changes**. El sitio se actualiza solo en uno o dos minutos.
- **Cambiar fotos:** súbelas en formato `.webp`, de unos 1600 px de ancho como máximo y menos de 200 KB, con el mismo nombre. Las imágenes se guardan en caché una semana.
- **Después de cada cambio:** abre el sitio en el teléfono y prueba el menú, la galería y los dos formularios.
- **Cada mes:** confirma que el sitio carga, que las fuentes se ven y que el enlace de WhatsApp sigue funcionando.
- **Dominio propio:** en Cloudflare, dentro del proyecto, usa **Custom domains**. Después actualiza la línea `og:image`.
- **Privacidad:** las fuentes se cargan desde Google Fonts. Si un cliente lo necesita, se pueden alojar dentro del proyecto.
- **Si CASA NOMA se convierte en un negocio real:** hay que quitar los avisos de demostración, poner datos reales y conectar los formularios a un servicio de envío. Hoy no envían nada.

## Créditos

Diseño y desarrollo: 2WEB. Tipografías: Playfair Display e Inter (Google Fonts, licencia SIL Open Font License).
