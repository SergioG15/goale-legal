# Páginas legales de GOALÉ

Política de privacidad y página de eliminación de datos de **GOALÉ**, publicadas
con GitHub Pages.

- Política de privacidad: `privacidad.html` (y `index.html`, que es la misma)
- Eliminar mis datos: `eliminar-datos.html`

Los textos viven en `legal-i18n.js` y se pintan con `legal-render.js` en el
idioma del lector (`?lang=xx`, el último elegido, o el del navegador).

**El español es la versión de referencia.** Al cambiar un texto legal se
actualiza primero el español y luego se propaga a los demás idiomas.

**Y lo que aquí se afirma tiene que ser verdad en el código del juego.** Cada
punto de las secciones 1 a 7 está comprobado contra el repositorio de GOALÉ:
qué columnas existen en `AccountStore`, qué recibe y qué guarda `GameServer`,
qué queda en el aparato según `TeamStore`, y qué permisos pide
`export_presets.cfg`. Si algún día se añade analítica, anuncios o una columna
nueva, este repositorio se actualiza en el mismo commit.
