# Registro de Desarrollo - Edutec Web

Este archivo documenta las decisiones, cambios y mejoras implementadas en el sitio web de la Escuela Profesional de Educación Tecnológica.

## Resumen de Tareas Completadas

### 1. Estructura y Navegación
- **Restauración de la Barra de Menú:** Se corrigió un problema que hacía desaparecer la barra de menú superior. Se implementó un `AppLayout` para gestionar de forma consistente el encabezado y el pie de página en todas las rutas.
- **Corrección de Desplazamiento (Scroll):** Se solucionó un error que enviaba al usuario al final de la página al recargar. Se creó un componente `ScrollToTop` que asegura que la navegación entre páginas siempre comience en la parte superior.

### 2. Sección de Portada (Hero)
- **Video de Fondo:** Se ajustó la velocidad de reproducción del video de fondo para eliminar la sensación de "lag".
- **Eliminación de Logo Duplicado:** Se quitó un logo redundante que aparecía en la portada.
- **Posicionamiento de Texto y Animación:**
    - Se reestructuró la sección para un diseño de dos columnas.
    - Se integró una animación SVG (Uiverse.io) en la columna derecha.
    - Se posicionó el texto principal a la izquierda, asegurando que el texto de la marca ("Escuela Profesional...") apareciera sobre la animación.
- **Mejoras en el Texto:**
    - Se actualizó el título principal a "Tecnología con propósito. Educación que transforma." y se dividió en dos líneas para mayor impacto visual.
    - Se justificó el texto del subtítulo para una apariencia más ordenada.
    - Se corrigió la ortografía en "Escuela Profesional de Educación Tecnológica", añadiendo las tildes.
- **Rediseño de la Marca:** Se eliminó el contenedor tipo "píldora" del nombre de la escuela, se aumentó el tamaño de la fuente y se le dio un estilo más prominente y limpio.

### 3. Contenido y Secciones
- **Sección "Identidad Institucional":** Se reemplazó el texto de marcador de posición por un texto que define claramente el contexto de la misión y visión de la institución.
- **Sección "Portafolios":** Se actualizaron las imágenes de los portafolios grupales con los nuevos archivos proporcionados.
- **Sección "Trabajos Destacados del VI Ciclo":**
    - Se mejoró el encabezado de la sección para ser más descriptivo.
    - Se eliminó el texto repetitivo "Trabajo destacado" de cada tarjeta de proyecto.
    - Se actualizó la etiqueta "Diccio" a "Diccionario Digital" para mostrar el nombre completo.
- **Sección "Líneas de Valor":** Se actualizó la imagen de la sección, corrigiendo un error en la ruta de importación del archivo.

### 4. Gestión del Repositorio y Despliegue
- **Corrección de Repositorio Git:** Se solucionó un error crítico donde Git estaba inicializado en la raíz del disco `D:\`. Se eliminó la configuración incorrecta y se reinicializó el repositorio correctamente dentro de la carpeta del proyecto `D:\Edutec_Web`.
- **Subida a GitHub:** Se conectó el repositorio local a un nuevo repositorio en GitHub y se subió todo el código fuente. Se resolvieron problemas de permisos de usuario durante el proceso.
- **Despliegue con Vercel:** Se creó una cuenta en Vercel, se conectó al repositorio de GitHub y se desplegó el sitio web, estableciendo un flujo de despliegue continuo.

## ¡Proyecto Desplegado!

El sitio web ahora está en línea y se actualizará automáticamente con cada `push` a la rama `main` en GitHub.

### 5. Refactorización de Datos y Experiencia de Usuario
- **Carga Diferida (Lazy Loading):** Se implementó `React.lazy` y `Suspense` en el enrutador principal (`App.jsx`) para que el código de cada página se cargue solo cuando es necesario, mejorando significativamente el tiempo de carga inicial.
- **Migración a JSON:** Se movieron todos los datos estáticos (ciclos, proyectos, portafolios, galería) desde un archivo JavaScript (`siteContent.js`) a archivos JSON dedicados en la carpeta `public/data`. Esto desacopla el contenido del código y facilita futuras actualizaciones.
- **Carga Dinámica de Datos:** Se refactorizó `HomePage.jsx` para cargar los datos desde los archivos JSON de forma asíncrona usando `fetch`.
- **Mejora de Responsividad:** Se corrigió el diseño de la sección de proyectos (`ProjectsSection.jsx`) para que se visualice correctamente en dispositivos móviles, solucionando un problema de desbordamiento.
- **Estados de Carga (Skeletons):** Se implementó una interfaz de esqueleto en todas las secciones que cargan datos dinámicamente (`CyclesSection`, `GroupPortfoliosSection`, `ProjectsSection`, `GallerySection`). Ahora, en lugar de un espacio en blanco, el usuario ve una animación de carga, mejorando la experiencia de usuario.
- **Corrección de Errores Críticos:**
    - Se solucionó un error de pantalla en blanco causado por `ProjectsSection.jsx` al intentar acceder a propiedades de datos que ya no existían después de la migración a JSON.
    - Se depuraron y corrigieron problemas con las rutas de los archivos JSON en las peticiones `fetch`, asegurando que los datos se carguen correctamente.

## Tareas Pendientes

- **Poblar la carpeta de imágenes:** Las imágenes del proyecto deben ser renombradas y movidas a la carpeta `public/images/stock/` para que coincidan con las rutas especificadas en los archivos JSON. Los nombres de archivo requeridos son:
    - **Proyectos:**
        - `project-01.jpg`
        - `project-02.jpg`
        - `project-03.jpg`
        - `project-04.jpg`
        - `project-05.jpg`
        - `project-06.jpg`
        - `project-07.jpg`
        - `project-08.jpg`
    - **Portafolios:**
        - `team-01.jpg`
        - `team-02.jpg`
        - `team-03.jpg`
    - **Galería:**
        - `gallery-01.jpg`
        - `gallery-02.jpg`
        - `gallery-03.jpg`
        - `gallery-04.jpg`
        - `gallery-05.jpg`
        - `gallery-06.jpg`
        - `gallery-07.jpg`
        - `gallery-08.jpg`

### 6. Actualización de Contenido y Enlaces
- **Sección "Eduteca":** Se actualizó la tarjeta "Recursos Pedagógicos" para convertirla en "Tecnoteca Intercultural", asignándole el enlace `https://grupo5block.my.canva.site/tecnotecaintercultural` y una descripción más específica.
- **Sección "Proyectos que marcan la diferencia":** Se actualizaron los primeros cuatro proyectos con enlaces y descripciones reales proporcionados por el usuario.
- **Limpieza de Código:** Se eliminó código innecesario y comentarios de los componentes `GroupPortfoliosSection.jsx` y `GallerySection.jsx`.