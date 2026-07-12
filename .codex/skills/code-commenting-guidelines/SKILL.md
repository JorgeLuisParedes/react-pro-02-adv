---
name: code-commenting-guidelines
description: Aplicar y revisar la convención de comentarios del proyecto en código TypeScript/React cuando se creen o modifiquen comentarios inline, JSDoc, encabezados de archivo, estructuras de datos o notas TODO/FIXME, para asegurar claridad, no redundancia, coherencia en español y utilidad técnica real; no usar para proponer commits/PR ni para revisar cambios sin diff.
metadata:
  version: "1.1.0"
---
# Code Commenting Guidelines

## Flujo de trabajo

1. Inspeccionar siempre el diff actual del repositorio antes de proponer o editar comentarios.
2. Leer [references/commenting_guidelines.md](references/commenting_guidelines.md) antes de redactar o editar comentarios.
3. Priorizar nombres claros y diseño legible antes de añadir comentarios.
4. Escribir comentarios solo si agregan intención, contexto, restricciones o decisiones no obvias.
5. Usar JSDoc solo cuando exista valor real para contratos, reglas de negocio, efectos secundarios o contexto reutilizable.
6. Escribir TODO/FIXME en español, con etiqueta en mayúsculas al inicio (`TODO:`, `FIXME:`), contenido accionable en redacción normal y con motivo.
7. Manejo de bloques de código comentado:
   - Intentar inferir contexto desde el código activo cercano y el diff.
   - Si el bloque es una alternativa técnica válida, conservarlo con:
     - `Decisión:` (qué se eligió y por qué)
     - `Alternativa:` (cuándo reevaluar o eliminar)
   - Si no se puede inferir con confianza, hacer solo una pregunta cerrada al usuario:
     - “¿Conservo este bloque como Alternativa o lo elimino?”
   - Si no hay respuesta, aplicar regla por defecto: eliminar bloque sin contexto claro.
8. Eliminar comentarios redundantes, ambiguos, obsoletos o de “código apagado”.

## Regla obligatoria de contexto

- Nunca asumir cambios sin revisar `git diff` o `git diff --staged` cuando corresponda.
- Si no hay diff, indicar explícitamente que no se detectaron cambios.
- Si no hay diff, no proponer comentarios nuevos ni reescrituras de comentarios existentes.

## Regla de consistencia con referencia

- Todas las recomendaciones deben alinearse con [references/commenting_guidelines.md](references/commenting_guidelines.md).
- Si existe conflicto entre esta skill y la referencia, prevalece la referencia.

## Formato de salida obligatorio

- Antes de proponer cambios, mostrar una sección `Diff analizado:`.
- En `Diff analizado:`, listar archivos modificados relevantes y el tipo de cambio detectado.
- Luego mostrar `Comentarios propuestos:` con acciones concretas por archivo.
- Si no se requieren comentarios nuevos, indicar `Sin cambios de comentarios` y justificarlo con base en el diff.
- Evitar recomendaciones genéricas sin ubicar archivo y motivo técnico.

## Checklist de salida

- Comentarios en español de forma consistente.
- Sin narrar comportamiento obvio del código.
- JSDoc solo donde aporte valor no evidente por tipos/nombres.
- TODO/FIXME con etiquetas en mayúsculas al inicio, claros, accionables y con impacto.
- Ante bloque comentado: inferencia primero, una sola pregunta cerrada solo si es necesario, y eliminación por defecto si no hay contexto/respuesta.
- Comentarios preparados para envejecer bien ante refactors.
- Evidencia del diff incluida antes de proponer comentarios.
