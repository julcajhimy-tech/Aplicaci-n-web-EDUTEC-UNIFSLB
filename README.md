# UNIFSLB React + Vite Mejorado

Version mejorada de la pagina institucional basada en la migracion de `01-Web.html`, ahora con una arquitectura mas completa, mejor jerarquia visual y rutas listas para escalar contenido academico.

## Tecnologias

- React 19
- Vite 6
- React Router
- CSS modular por capas con variables de tema
- Lucide React para iconografia
- LocalStorage para persistencia basica del formulario

## Instalacion

```bash
npm install
```

## Ejecucion

```bash
npm run dev
```

La app quedara disponible en la URL local que entregue Vite, normalmente `http://localhost:5173`.

## Build de produccion

```bash
npm run build
npm run preview
```

## Actualización del Despliegue

Para actualizar la versión desplegada en Vercel, simplemente sigue el flujo estándar de Git para subir tus cambios a la rama `main`. Vercel detectará automáticamente el `push` y iniciará un nuevo despliegue.

1.  **Añadir cambios al área de preparación:**

    ```bash
    git add .
    ```

2.  **Crear un commit con un mensaje descriptivo:**

    ```bash
    git commit -m "Describe aquí los cambios realizados"
    ```

3.  **Subir los cambios a GitHub:**

    ```bash
    git push origin main
    ```

## Estructura del proyecto

```text
src/
  pages/
  router/
  components/
    layout/
    sections/
    ui/
  data/
  hooks/
  styles/
  utils/
  App.jsx
  main.jsx
```

## Funcionalidades incluidas

- Navegacion responsive y estructura de paginas internas
- Rutas para ciclos y detalle de proyectos con React Router
- Nuevo sistema tipografico mas profesional: Playfair Display + Inter
- Tarjetas editoriales para trabajos destacados inspiradas en la referencia entregada
- Galeria filtrable, escalable y con lightbox para mas de 10 imagenes
- Formulario de contacto con validacion y persistencia local
- Configuracion `vercel.json` para despliegue SPA

## Mejoras futuras sugeridas

- Integrar backend real para envio del formulario
- Conectar proyectos y galeria a un CMS o panel administrativo
- Reemplazar imagenes remotas por un banco visual institucional propio
- Agregar autenticacion para administracion interna