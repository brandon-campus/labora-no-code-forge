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

### 8. Rediseño Total del Checkout (`/post-aplicacion`)
- Se eliminó el "Modal de Pago" introducido anteriormente y se transformó la página en un flujo de **Checkout Single Page** optimizado para móviles, similar a un e-commerce real.
- Se integró un formulario de datos obligatorios para captar Nombre, Email y WhatsApp del prospecto antes del pago.
- Se implementaron elementos visuales de urgencia y escasez (precio original tachado y banner fijo de "Últimos 3 cupos").
- **Horarios Dinámicos:** El resumen de la compra adapta automáticamente la hora de las clases según el país que seleccione el usuario en el checkout.
- **Flujo de Confirmación Pendiente:** Al pagar mediante enlaces externos (Mercado Pago o PayPal), estos se abren en una pestaña nueva. La pestaña original muta instantáneamente a una vista inmersiva de "Confirmación Pendiente" (con animación, diseño premium y un gran CTA de WhatsApp verde) para asegurar que el usuario siempre envíe su comprobante como paso final.

### 9. Páginas Nativas de Pago Manual / Transferencias
- Se construyó un ecosistema de páginas dedicadas para mostrar paso a paso las instrucciones de transferencias, usando una interfaz estética y consistente, con el objetivo de retener al usuario en la web:
  - **`/pago-global66`**: Optimizada para cobros en USD desde el exterior, explicando de manera sencilla cómo usar la plataforma de Global66.
  - **`/pago-transferencia-arg`**: Configurada con los datos de Naranja X (CBU, Alias, CUIL) calculando los montos en Pesos Argentinos (ARS).
  - **`/pago-transferencia-peru`**: Configurada con la cuenta BCP en Soles y CCI calculando los montos en PEN.
- Todas incluyen botones para copiar la información bancaria con 1 clic (lanzando notificaciones de *Toast*) y un botón final enlazado a WhatsApp con un mensaje pre-armado indicando el método usado.
