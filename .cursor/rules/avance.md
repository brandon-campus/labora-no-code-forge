# Avances - Configuración de Embudos (Orgánico vs Ads)

## Resumen de cambios realizados:

### 1. Analíticas
- Se instaló y configuró **Vercel Analytics** (`@vercel/analytics/react`) en `App.tsx` para empezar a traquear automáticamente las visitas del proyecto (en formato Vite/React).

### 2. Separación de Embudos (ADS vs Orgánico)
- **Rutas de Aplicación:** Se duplicó la página de aplicación. Ahora `/bootcamp/aplicar` se mantiene para anuncios y se creó **`/aplicar`** exclusiva para tráfico orgánico con su propio formulario de Tally.
- **Rutas Post-Aplicación:** Se duplicó `/post-aplicacion` creando **`/post-aplicacion-organico`** para que las aplicaciones orgánicas aterricen allí, permitiendo identificar de dónde viene el lead.
- **Limpieza:** Se eliminaron versiones antiguas del Bootcamp que ya no se utilizaban (`BootcampV3`, `BootcampLanding`, `BootcampIA`).

### 3. Página Bootcamp Orgánica (`/bootcamp-2`)
- Se creó la ruta **`/bootcamp-2`** como copia de la landing principal, destinada al link in bio.
- Se actualizaron los botones dentro de `/bootcamp-2` para que todos redirijan a `/aplicar` en lugar de `/bootcamp/aplicar`. Para esto, se refactorizaron componentes globales (`Navbar`, `HeroSectionV3`, `DatesSection`, `ContactSection`) para que acepten la URL destino como parámetro sin afectar la página original.

### 4. Link in Bio (`/links`)
- Se modificó la tarjeta del Bootcamp: Ahora dice **"Próxima edición: 05 de Septiembre"** y apunta correctamente a la nueva página `/bootcamp-2`.

### 5. Trazabilidad de Leads por WhatsApp
- Se refactorizaron `WhatsAppButton` y `DatesSection` para aceptar mensajes personalizados.
- En las páginas orgánicas (`/bootcamp-2` y `/post-aplicacion-organico`) se agregó al final del mensaje de WhatsApp la frase **"(Vengo de tu Link en Bio/Orgánico)"** o **"(desde el Link en Bio)"**. Esto permite saber al instante si un prospecto viene de tráfico pago o de redes sociales.

### 6. Rediseño de Home Page (`Index.tsx`)
- Se implementó un nuevo diseño estético oscuro/neón siguiendo el estándar de la página del Bootcamp.
- Se integró un Hero interactivo con mapa de LATAM y se reutilizaron componentes de la Metodología Labora.
- Se personalizó la cabecera (Navbar inline) específicamente para la página principal con los enlaces solicitados (Programas, Clases gratis, Empresas, y el botón destacado Campus).

### 7. Nueva Sección de Precios (`PricingSection.tsx`)
- Se creó la sección de planes de pago (Flexibilidad, Intermedio y Pago Único) integrada a `/bootcamp` y `/bootcamp-2`.
- Es totalmente dinámica (usando `useActiveCohorte`) y responsiva, ajustando automáticamente la tipografía para que monedas de muchas cifras (ARS, COP, etc.) no rompan el diseño de las tarjetas.
- Clonación exacta de estilos y layout de la grilla de `/post-aplicacion` para consistencia en la plataforma.

### 8. Pasarela de Pago Directa en `/post-aplicacion`
- Se transformó la página post-formulario en un verdadero checkout dinámico para aumentar la conversión inmediata.
- En lugar de enviar los leads directamente a WhatsApp al hacer clic en un plan, se abre un **Modal de Pago**.
- El modal muestra los medios de pago configurados específicamente según el país seleccionado (Ej: Mercado Pago y Transferencia en Argentina; BCP e Interbancaria en Perú; Global 66 y PayPal para otros países).
