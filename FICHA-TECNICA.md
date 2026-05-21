# Ficha Tecnica

- Tipo de proyecto: Sitio institucional academico con rutas internas
- Nivel backend: Frontend listo para integracion futura
- Stack tecnologico: React, Vite, React Router, CSS, Lucide React
- Arquitectura: Landing + paginas internas por ciclo y por proyecto
- Estado del proyecto: Version mejorada lista para seguir creciendo
- Fuente original: `user_files/01-Web.html`
- Objetivo de la migracion: Pasar de HTML monolitico a una base escalable con mejor diseno, mejores rutas y contenido organizado

## Riesgos detectados en el archivo original

- Todo el sitio vive en un solo archivo HTML
- Dependencia de Tailwind CDN y scripts inline
- Contenido, estilos e interacciones mezclados
- Formulario sin logica real
- Uso de `onclick` con `alert`, poco escalable

## Solucion aplicada

- Reorganizacion por capas en `pages`, `router`, `sections`, `layout`, `ui` y `data`
- Incorporacion de rutas por ciclo y detalle de proyecto
- Nuevo sistema visual con tipografia editorial y acento institucional
- Rediseño de trabajos destacados en formato premium horizontal
- Nueva galeria escalable con filtros, carga progresiva y lightbox
- Base lista para conectar API, backend o CMS
