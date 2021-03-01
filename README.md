# Simetrik React App
este proyecto ha sido creado para consumir una api y mostrar valores en modulos, los cuales seran discriminados por valores ingresados por el usuario al realizar una busqueda.

### Herramientas
- npx create-react-app para crear aplicativo con la libreria reactJS
- react Redux para manejo de estado en la app (solo mostrar manejo de la herramienta)
- redux-thunk como middleare para  asincronismo en consumo de apis con Axios
- JSonServer para darle funcionalidad de API a la data brindada y hacer el consumo de esta mediante el protocolo http

## Clonar y Start
para probar este proyecto basta con hacer lso siguientes pasos:
- clonar el repositorio en tu maquina
- dentro del achivo raiz escribir este comando " npm install " para instalar dependencias y luego " npm start " para correr el aplicativo web
- en una consola aparte ejecutar este comando para exponer el servicio con la data que se encuentra en el archivo information.js  " json-server information.json --port 4000 ", cabe aclarar que por defecto el host buscara el puerto 3000 pero este ya lo ocupa la app de react en tonces con la bandera port le asignamos el 4000, si tu cambias el puerto asegurate de ir al proyecto de react y en src/config/axios  y cambiar la url base la cual apunta a nuestra API
- si quieres seguir el comportamiento de la app te recomiendo instalar  REDUX DEVTOOL y usarlo inspeccionando el codigo  de tu browser  
que lo disfrutes mcuhas gracias!!!

### Mejoras
- hacer CRUD completo para alguno de lso modulos
- crear componentes de alertas o notificaciones de estado
- crear componente para msotrar informacion completa del item seleccionado


### 1. ¿Por qué no debería usar la librería JQuery, si estoy usando ReactJS?
Porque ReactJS posee comportamientos integrados o nativos en su libreria, los cuales eran integradosa nuestra app con el uso de Jquery,
estos comportamientos o habilidades son:
- acceso unico a lementos del DOM
- interactuar con APIS
- escribir css y crear animaciones bajo JSX

### 2. ¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component?
a mi parecer lo Uso por tendencia, comodidad (evitar .this y bind) ,tambien es lo que sugieren los creadores de la herramienta,
pero hasta el momento podemos hacer features utilizando las dos formas aunque el soporte o background de classcomponent es fuerte 

### 3. ¿Que es un archivo JSX?
es una extension de Javascript para presentar Elementos al DOM usado en ReactJS para evitar separar la logica del renderizado

### 4. ¿Que diferencia hay entre una function y una arrow function de Javascript?
partiendo de que una es declarativa y la otra es expresiva, lo cual varia en como afecta el contexto (hoisting)
tambien la funcion flecha no posee .this, arguments, super.., lo que quiere decir que son anonimas y tampoco se usan como contructores

### 5. ¿Qué es Redux y cómo nos ayuda en los proyectos?
es una herramienta que nos aporta un manejo de estado en nuestras app, "Adopta el comportamiento de Flux".
realmente es una heramienta que esta pensada para proyectos de mediana a gran escala en manejo de datos y acciones que modifican la forma de presentar los datos (estado), al tener esto claro podemos decir que nos brinda
- comprension de la evolucion del estado en todo momento
- herramientas para debugging(REDUX DEVTOOLS time traveling)
- podemos producir bug o notificaciones de Error/succes
- menejode data con asincronismo al hacer consumo de apis (usando middlewares como thunk o saga) 

### 6. ¿Por qué usuarios pruebas unitarias en tu código?
digamos que en este punto depende muicho del tema horas de desarrollos que nos brinden, en caso dado el tiempo de desarrollo tenga en cuentas las pruebas es la manera de certificar la feature, funcion y/o accion que desarrollamos para luego ser integrada en el resto de la app 
