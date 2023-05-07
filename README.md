# PruebasE2E
Pruebas E2E Kraken Cypress Grupo 28

## Descripción

Se realizan pruebas E2E sobre la aplicación Ghost con dos tipos de herramientas, Kraken y Cypress. Se detallan las incidencias obtenidas, el resultado de las pruebas, código fuente con el que se ejecutaron las pruebas,  ventajas y desventajas de cada una de las herramientas. 

## Funcionalidades y Escenarios de Prueba

1. **Funcionalidad Iniciar Sesión**
  - Campo vacío
  - Ingresar mal los datos
  - Login Exitoso
2. **Funcionalidad Crear Post**
  - Post vacio
  - Post solo con título
  - Posto solo con body y sin título
  - Post solo con body y título etiquetas
3. **Funcionalidad Creación de páginas**
  - Página vacía
  - Post solo con título
  - Post solo con body y sin título
  - Post solo con body y título etiquetas
4. **Funcionalidad Creación de tags**
  - Tag vacío
  - Tag con solo título
  - Tag con solo título, color y descripción
  - Tag con solo titulo y descripción
5. **Funcionalidad Cambiar información de perfil**
  - Campos vacíos
  - Cambiar solo nombre
  - Cambiar nombre y correo
  - Cambiar nombre y slug
  - Cambiar facebook profile
  
## Instrucciones de ejecución Kraken

Prerrequisitos:
 1. Ghost-CLI version: 1.24.0
 2. NodeJS version: v14.21.1
 3. Kraken: última versión
 
 En la carpeta Escenarios se encuentran los archivos .feature donde cada archivo corresponde a una de las funcionalidades probadas.
 
 Para ejecutar cada uno de los escenarios es necesario copiar el contenido .feature a probar y pegarlo en el archivo my_first.feature. Luego en el archivo properties.json modificar las propiedades de USERNAME1 y PASSWORD1 con un usuario y password válidos de la aplicación ghost. Finalmente ir por consola a la carpeta raíz, ejecutar el comando npm install y una vez se instalen los módulos, ejecutar npx kraken-node run o ./node_modules/kraken-node/bin/kraken-node run.
 
 


