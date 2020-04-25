# ReactJS-Concepts-Project
 Project Focused on how to use ReactJS (ESPAÑOL)

Create-react-app
Create-react-app es una aplicación moderna que se usa desde una línea de comando. Antes de ella se configuraba todo el entorno manualmente lo cual tomaba mucho tiempo.

Pasos para obtenerlo: Se debe instalar desde la línea de comando usando npm install -g create-react-app
Una vez instalado se crea la carpeta del proyecto con create-react-app -nombre del proyecto-
En este punto se estará instalando React y otras herramientas, también se configurará el entorno usando Webpack.
Una vez se instala todo entra a la carpeta src donde estará todo el código fuente de la aplicación, siendo el más importante index.js que es el punto de entrada a la aplicación.
Finalmente para correr la aplicación se usa el comando npm run start

Otras herramientas:
Babel: Traduce Javascript moderno (JSX) a un Javascript que todos los navegadores puedan interpretar.
Eslint: Lee el código y avisa de errores.



#Clonar el código de GitHub

En esta clase vamos a comenzar clonando el código del proyecto del repositorio en GitHub.
Es importante que tú y yo tengamos un punto de partida en común. Así vamos a poder asegurarnos que cada cambio que yo haga en el código, tú también lo recibas.

Para hacer esto, en la terminal ve a una carpeta donde quieras que exista el proyecto. Entonces escribes lo siguiente:
$ git clone https://github.com/..../......git
Eso va a clonar el repositorio del curso a una carpeta llamada platzi-badges.

Ahora es necesario que te muevas a esa carpeta.
$ cd .....
Ahora necesitamos instalar todas las dependencias necesarias para poder correr el proyecto. Lo haremos utilizando npm.

$ npm install
Este proceso puede tardar un poco. Lo que esta haciendo es descargando todas las bibliotecas de código que el proyecto necesita.

Una vez haya concluido, estamos listos para echar a correr el servidor. Lo hacemos con el comando
$ npm run start
Cuando el servidor comience, automáticamente va a abrir una pantalla en el navegador con la aplicación.
Si todo salió bien, vas a ver una pantalla que dice “Hello, Platzi Badges”.
En la próxima clase vas a aprender como fue que “Hello, Platzi Badges” llegó desde el código hasta la pantalla de tu navegador.
*Aquí encuentras el repositorio.

#Los pasos a seguir son:
git clone https://github.com/.../.....git
cd platzi-badges
git checkout ba74f3a
Git Clone te dará una copia de todo el repositorio del projecto, pero en un commit muy adelante, casi terminado. Para ver el código como el que muestra el profesor es que debes hacer checkout a ése commit específico.
(Opcional: Aquí se recomienda hacer una rama adicional para que puedas modificar el código sin afectar la rama del código terminado del profesor:
git checkout -b <nombre_de_tu_rama>
Ahora ejecuta:
npm install
npm run start

ReactDOM.render
React y ReactDOM trabajarán en conjunto.
React como análogo a createElement
ReactDOM a appendChild
ReactDOM.render() toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar. 
Siempre que escribas JSX es requisito importar React.

#JSX

JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.
JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.
React.createElement recibe 3 argumentos:

El tipo de elemento que estamos creando sus atributos o props y el children que es el contenido.

Ejemplo:         React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.
Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#¿Qué es un componente?
Los componentes en React son bloques de construcción. Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras. Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.
”Componente” vs “elemento Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.
Identificación de componentes Para identificarlos debes hacerte las siguientes preguntas:
¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.
Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#Cómo aplicar estilos
Para los estilos crearemos una carpeta llamada Styles y allí vivirán todos los archivos de estilos que tienen que ver con los componentes.
Para usar los estilos es necesario importarlos con import
React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino className
Es posible utilizar Bootstrap con React, sólo debe ser instalado con npm install bootstrap y debe ser importado en el index.js
Existen estilos que son usados de manera global o en varios componentes, así que deben ser importados en el index.js

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#Props
Los props que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.
Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#Enlazando eventos
React dispone de eventos. Cada vez que se recibe información en un input se obtiene un evento onChange y se maneja con un método de la clase this.handleChange
Los elementos button también tienen un evento que es onClick.
Cuando hay un botón dentro de un formulario, este automáticamente será de tipo submit. Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo button o manejándolo desde el formulario cuando ocurre el evento onSubmit.


#Manejo de estado
Hasta esta clase todos los componentes han obtenido su información a través de props que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del state a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.
Para guardar la información en el estado se usa una función de la clase component llamada setState a la cual se le debe pasar un objeto con la información que se quiere guardar.
Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en setState, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.


#Levantamiento del estado
Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.
Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.


#Introducción a React Router
Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source.
Multi Page Apps: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.
Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.
React Router (v4): Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:
BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
Route: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.
Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
Link: Toma el lugar del elemento <a>, evita que se recargue la página completamente y actualiza la URL.
