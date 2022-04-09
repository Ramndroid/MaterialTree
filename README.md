# BABCN32

Paso 1: Instalación de Material con el comando
                ng add @angular/material

La configuración material (según las preguntas del instalador) queda así
Would you like to proceed? Y
Choose a prebuilt theme name, or "custom" for a custom theme: indigo/pink
Set up global Angular Material typography styles? Y
Set up browser animations for Angular Material? Y

UPDATE package.json (1136 bytes) [añade la dependencia cdk 13.3.2 y material 13.3.2]
✔ Packages installed successfully.
UPDATE src/app/app.module.ts (423 bytes) [añade el módulo BrowserAnimationsModule]
UPDATE angular.json (3377 bytes) [añade hoja de estilos css de material indigo-pink.css]
UPDATE src/index.html (575 bytes) [añade las fuentes roboto y material icons]
UPDATE src/styles.scss (181 bytes) [añade estilo a html y body -height 100%, margin: 0, font: Roboto]
