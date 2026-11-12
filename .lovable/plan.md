# Rediseño Liquid Glass para el sitio público RCW Innovation

## Fase 1 — Auditoría (resultado)
- El sitio ya usa colores centralizados casi en todas partes: solo 5 archivos tienen colores fijos (fondos de modales, panel lateral y chatbot). Esto permite agregar modo claro sin rehacer páginas.
- Hoy existe un solo tema oscuro (fondo #0B0F1A, azul #3B82F6, dorado #E6B450) y la fuente Inter.
- Botones, campos, tarjetas, modales y menús comparten componentes base reutilizables: el cambio se hace en un solo lugar y se refleja en todo el sitio.
- No hay tablas ni dashboards en este sitio, así que esa parte del documento no aplica.

## Fase 2 — Design System
- Tokens nuevos: niveles de superficie de vidrio (base, elevada, flotante), desenfoque, bordes de baja opacidad, sombras ambientales suaves, radios (14–20 px botones, 16–24 px tarjetas), tiempos de animación de 150–250 ms.
- Tipografía estilo Apple: fuente del sistema (SF Pro en dispositivos Apple) con alternativa moderna; jerarquía de 28–36 / 20–24 / 15–18 / 14–16 / 12–13 px.
- Se conserva la identidad: azul como color principal y dorado para la consulta gratuita.

## Fase 3 — Componentes globales
- Botones: principal azul con profundidad suave, secundario translúcido, flotantes en cápsula; estados hover, pulsado, foco y deshabilitado.
- Campos y selectores: fondo translúcido, halo azul al enfocar, error visible.
- Tarjetas, modales, menús desplegables, panel lateral móvil, calendario y chatbot con vidrio y entrada suave.

## Fase 4 — Páginas
- Barra superior flotante con desenfoque; dock móvil en vidrio; inicio, servicios, blog, contacto, acerca de y legales heredan el nuevo estilo sin cambiar contenido ni estructura.

## Fase 5 — Modo claro y oscuro
- Modo oscuro rediseñado (grafito azulado por niveles, brillos discretos).
- Modo claro propio (blanco frío, superficies blancas, texto carbón), no una simple inversión.
- Botón de cambio en la barra superior y en el menú móvil; recuerda la preferencia y respeta la del dispositivo la primera vez.

## Fase 6–7 — Validación
- Revisión en escritorio, tablet y móvil en ambos modos; contraste legible; animaciones desactivadas si el usuario lo pide en su dispositivo.
- Prueba de que siguen funcionando: menú, idioma ES/EN, modal de consulta con calendario, contacto, chatbot, voz, dock móvil, blog y rutas; sin errores en consola.

## Lo que no cambia
- Textos, SEO, datos estructurados, formularios, envíos de correo, Stripe, rutas y la consulta gratuita de 30 minutos.

## Detalles técnicos
- Tokens HSL en `src/index.css` bajo `:root` (claro) y `.dark` (oscuro); `darkMode: "class"` en Tailwind; `next-themes` ya disponible en shadcn para el cambio y persistencia.
- Reemplazar los colores fijos de dialog, sheet, drawer, alert-dialog y Chatbot por tokens.
- Variantes nuevas en `button.tsx` (`glass`, `floating`), clases utilitarias `.glass-surface-*`.
- Actualizar la memoria del tema (ahora claro + oscuro, fuente del sistema).
