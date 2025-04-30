# Guía de Contribución

¡Gracias por tu interés en contribuir a Security Basics! Esta guía te ayudará a comenzar con tu contribución al proyecto.

## 🚀 Cómo contribuir

Hay muchas formas de contribuir al proyecto:

1. Reportar bugs
2. Sugerir nuevas funcionalidades
3. Mejorar la documentación
4. Enviar pull requests con correcciones o nuevas funcionalidades
5. Compartir el proyecto
6. Proporcionar traducciones
7. Contribuir mediante Vibe Coding (desarrollo con IA)

## 📋 Proceso para contribuir

### 1️⃣ Configuración inicial

1. Haz un fork del repositorio
2. Clona tu fork a tu máquina local
   ```bash
   git clone https://github.com/tu-usuario/SecurityBasics.git
   cd SecurityBasics
   ```
3. Añade el repositorio original como upstream
   ```bash
   git remote add upstream https://github.com/proyecto-original/SecurityBasics.git
   ```
4. Instala las dependencias
   ```bash
   pnpm install
   ```

### 2️⃣ Desarrollo

1. Crea una nueva rama para tu contribución
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
2. Haz tus cambios siguiendo las [guías de estilo](#guías-de-estilo)
3. Asegúrate de que los tests pasan (si hay)
   ```bash
   pnpm test
   ```
4. Haz commit de tus cambios con mensajes descriptivos
   ```bash
   git commit -m "feat: añade nueva funcionalidad"
   ```

### 3️⃣ Envío de la contribución

1. Sube tu rama a tu fork
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
2. Crea un Pull Request desde tu fork al repositorio original

### 4️⃣ Revisión

1. Un mantenedor del proyecto revisará tu PR
2. Es posible que se soliciten cambios
3. Una vez aprobado, tu PR será fusionado

## 🔮 Vibe Coding

Security Basics es un proyecto pionero en el enfoque de "Vibe Coding" - desarrollo de aplicaciones completamente mediante inteligencia artificial.

**[Consulta nuestra guía completa de Vibe Coding](./vibe-coding.md)** para aprender cómo contribuir al proyecto usando herramientas de IA como v0.dev.

## 🎨 Guías de estilo

### Código

- Usa TypeScript para todo el código
- Utiliza componentes funcionales de React y hooks
- Sigue el estilo de código existente en el proyecto
- Utiliza nombres descriptivos para variables, funciones y componentes
- Mantén las funciones pequeñas y con una única responsabilidad
- Escribe comentarios para explicar código complejo

### Commit

Seguimos la convención de [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[ámbito opcional]: <descripción>

[cuerpo opcional]

[nota de pie opcional]
```

Tipos comunes:
- `feat`: Nueva característica
- `fix`: Corrección de un bug
- `docs`: Cambios en la documentación
- `style`: Cambios que no afectan al significado del código
- `refactor`: Cambios de código que no arreglan un bug ni añaden una característica
- `test`: Añadir o corregir pruebas
- `chore`: Cambios en el proceso de compilación o herramientas auxiliares

### Pull Requests

- Usa un título claro y descriptivo
- Incluye una descripción detallada de los cambios
- Menciona cualquier issue relacionado
- Incluye capturas de pantalla si es relevante

## 🔍 Áreas donde se necesita ayuda

- Contenido educativo sobre seguridad
- Traducciones a otros idiomas
- Mejoras de accesibilidad
- Optimización de rendimiento
- Nuevas herramientas interactivas
- Mejoras en la documentación
- **Experimentación con Vibe Coding**: Nuevas técnicas para desarrollar con IA

## ⚠️ Comportamiento esperado

Esperamos que todos los contribuyentes:
- Sean respetuosos con los demás
- Acepten críticas constructivas
- Se centren en lo mejor para la comunidad
- Muestren empatía hacia otros miembros de la comunidad

## 🙏 Agradecimientos

Este proyecto no sería posible sin nuestros contribuyentes. ¡Gracias por tu apoyo!

Especial agradecimiento a [v0.dev](https://v0.dev) por proporcionar la base para muchos de los componentes UI utilizados en este proyecto.