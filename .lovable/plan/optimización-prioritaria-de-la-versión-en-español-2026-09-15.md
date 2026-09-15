# Optimización prioritaria de la versión en español

## Objetivo
Asegurar que `/es/` y todas sus páginas sean coherentes en español para usuarios y buscadores, manteniendo intactos el diseño, los servicios existentes y la versión inglesa.

## Cambios
1. **Metadatos en español**
   - Establecer el idioma base como `es` y mantener `og:locale` como `es_CA`.
   - Corregir título, descripción, Open Graph y Twitter para que el HTML inicial sea completamente español.
   - Traducir al español los datos estructurados globales que describen la empresa, servicios, fundador y preguntas frecuentes.

2. **Rutas bilingües y hreflang**
   - Mantener rutas limpias `/es/` y `/en/`.
   - Revisar enlaces alternativos `es-CA`, `en-CA` y `x-default`, además de canonicales autorreferentes donde ya existe soporte por página.
   - Evitar que una etiqueta inglesa sustituya los metadatos de una ruta española.

3. **Contenido visible de `/es/`**
   - Corregir cualquier texto inglés en menú, botones, llamadas a la acción, pie de página, horarios, formularios, modales, blog, páginas legales, servicios y “Sobre nosotros”.
   - Conservar nombres propios y marcas tecnológicas cuando no deben traducirse.

4. **Validación**
   - Comprobar `/es/` y rutas españolas representativas en escritorio y móvil.
   - Validar idioma del documento, título, descripción, Open Graph, enlaces alternativos, encabezado principal y ausencia de errores visibles.
   - Revisar el resultado de compilación antes de cerrar.

## Nota técnica
El proyecto actual es una aplicación React de una sola página. Los metadatos específicos por ruta se actualizan en el navegador; el HTML inicial tendrá una base española correcta, mientras se preserva la relación con `/en/`. No se cambiará el diseño ni se hará una reconstrucción general del sitio.
