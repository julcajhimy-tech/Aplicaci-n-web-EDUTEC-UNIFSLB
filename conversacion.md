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

### 4. Gestión del Repositorio
- Se corrigió un error de inicialización de Git que estaba apuntando a la raíz del disco `D:\` en lugar de la carpeta del proyecto `D:\Edutec_Web`, evitando así la inclusión de archivos personales en el repositorio.

## Próximos Pasos
- Continuar con el proceso de subir los cambios a GitHub.
- Desplegar la aplicación para visualizar los avances en un entorno real.