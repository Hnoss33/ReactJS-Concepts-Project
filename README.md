# ReactJS-Concepts-Project-CYBERPUNK2077 Conf
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



# Clonar el código de GitHub

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

# Los pasos a seguir son:
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

# JSX

JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.
JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.
React.createElement recibe 3 argumentos:

El tipo de elemento que estamos creando sus atributos o props y el children que es el contenido.

Ejemplo:         React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.
Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# ¿Qué es un componente?
Los componentes en React son bloques de construcción.
Las aplicaciones hechas con React son como figuras de Lego. 
Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.
”Componente” vs “elemento Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

Identificación de componentes Para identificarlos debes hacerte las siguientes preguntas:

¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.

Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Cómo aplicar estilos
Para los estilos crearemos una carpeta llamada Styles y allí vivirán todos los archivos de estilos que tienen que ver con los componentes.
Para usar los estilos es necesario importarlos con import
React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino className
Es posible utilizar Bootstrap con React, sólo debe ser instalado con npm install bootstrap y debe ser importado en el index.js
Existen estilos que son usados de manera global o en varios componentes, así que deben ser importados en el index.js

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Props
Los props que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.

Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Enlazando eventos
React dispone de eventos. Cada vez que se recibe información en un input se obtiene un evento onChange y se maneja con un método de la clase this.handleChange
Los elementos button también tienen un evento que es onClick.
Cuando hay un botón dentro de un formulario, este automáticamente será de tipo submit. Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo button o manejándolo desde el formulario cuando ocurre el evento onSubmit.


# Manejo de estado
Hasta esta clase todos los componentes han obtenido su información a través de props que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del state a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.
Para guardar la información en el estado se usa una función de la clase component llamada setState a la cual se le debe pasar un objeto con la información que se quiere guardar.
Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en setState, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.


# Levantamiento del estado
Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.
Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.


# Introducción a React Router
Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source.

Multi Page Apps: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

React Router (v4): Nos da las herramientas para poder hacer SPA fácilmente. 

Usaremos 4 componentes:
BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.

Route: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.

Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.

Link: Toma el lugar del elemento <a>, evita que se recargue la página completamente y actualiza la URL.
 
 
# División de la aplicación en rutas:

Para instalar React Router lo hacemos desde la terminal con npm install react-router-dom. Como es importante usar exactamente la misma versión, del package.json en “dependencies” se quita lo que está delante del 4.
Link internamente tiene un elemento <a> pero va a interceptar el clic para navegar de manera interna sin refrescar toda la página.


React.Fragment es la herramienta que te ayudará a renderizar varios componentes y/o elementos sin necesidad de colocar un div o cualquier otro elemento de HTML para renderizar sus hijos. Al usar esta característica de React podremos renderizar un código más limpio y legible, ya que React.Fragment no se renderiza en el navegador. 

El 404 es la ruta que se renderizará cuando ninguna otra coincida con la dirección ingresada. 

Otra forma de hacer que todas tus URL’s que no existan sean redirigidas a tu componente de 404 sería de la siguiente forma:

       import { Redirect, Route } from "react-router-dom";
       <Route path="/404" component={MiComponente404} />
       <Redirect from="*" to="/404" />
Como podemos observar llamamos a nuestro componente 404 y luego utilizamos Redirect, el cual es un componente de React Router para hacer redirecciones; en este caso hacemos que todas las URL’s que no correspondan a alguna que hayamos declarado, sean redirigidas a MiComponente404.

# Introducción llamadas a un API

Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:
Loading: cuando la petición se envía y estamos esperando.
Error: se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
Data: los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.

# React.js: Cómo traer datos de un API en React

Una llamada a una API es un proceso asíncrono, es decir que lo comenzamos pero no sabemos cuándo acabará. Por lo mismo la función a escribir debe ser asíncrona.
La llamada se hará usando fetch que es una función de JavaScript que al pasarle una dirección de internet, hará una petición GET y lo que sea que exista ahí será devuelto.

# Solicitando datos (GET)

En esta clase, nuestra meta es usar datos reales que vengan de una API a nuestra aplicación, hasta ahora todos los datos que hemos utilizado han sido simulados los HardCodeamos en la aplicación y los presentamos, ya aquí conocemos los 3 estados de una petición a un API, usaremos esos mismos estados para realizar la petición y usar datos reales.

Vamos a nuestro archivo de Badges aquí ya teníamos unos datos que estábamos simulando y le diremos que los datos no están definidos aun.

Primero lo primero, nos dirigiremos a nuestro archivo de badges y eliminaremos los datos simulados para colocarlos de manera undefined

        state = {
        loading: true,
        error: null,
        data: undefined
      }
      
Loading lo vamos a inicializar en “true” porque cuando cargue esta pagina lo primero que vamos a hacer es cargar los datos y asi los inicializamos y por ultimo, aun no tenemos “error” por lo que vamos a colocarlo nulo.

Si vamos a nuestra app y la revisamos, nos daremos cuenta de que nos dira que “map” es undefined, lo que sucede es que dentro de badges, este esta sin definirse “data” esta sin definirse porque asi lo hemos colocado, por lo que nuestro siguiente paso seria manejar el estado donde loading sea cierto.

       render(){

        if (this.state.loading === true){
            return'Loading...';
        }

Luego de esto comenzaremos a trabajar en la petición. El mejor lugar para comenzar a trabajar en una petición de un API es en el componentDidMount, eso nos asegura que el código de nuestro componente ya esta listo, cualquier efecto secundario o llamada exterior a una API los podemos hacer con seguridad de que nuestro datos están listos para recibirlos
classBadgesextendsReact.Component{
    
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount () {
        this.fetchData()
    }

    fetchData= () => {
        this.setState( { loading: true, error:null })
    }
Luego de esta crearemos nuestro metodo fetchData y la declararemos abajo en el cual declararemos igualmente nuestro setState pasandole los valores de 

             “{loading: true, error: null}” 

esto es porque es posible que un futuro volvamos a llamar a fetch data en cuyo caso que nea la primera vez, loading se habría vuelto falso por lo que hay que regresarlo a cierto y el error si ya existía, hay que cancelarlo, hay que regresarlo a null.

El segundo paso es comenzar la llamada a la API, eso lo vamos a hacer con un TryCatch de manera que;
        
        try {
        const data = []
        this.setState({ loading: false, data: data })
        
    } catch (error) {
        this.setState({ loading: false, error: error })
        
    }

Ahora desglosando el siguiente código, lo que estamos haciendo es pasarle inicializar nuestra data vacía, para si tenemos suerte y sale todo bien, recibimos datos y esos datos vamos a guardarlos en nuestro estado mas abajo, le decimos que loading ya acabo y los datos allí están y en caso de que hubiese un error, le estamos diciendo que loading ya acabo y que tenemos un error y lo queremos guardar.

Para hacer la llamada a la API hemos creado un archivo que s un tipo de librería que nos ayudara, es un raper o una librería para hacer una llamada al servidor local que ya estamos corriendo, haciendo la llamada al localhost.

Crearemos nuestro archivo “api.js” en nuestra carpeta “src” y le pegaremos el archivo proporcionado en el curso y la importaremos a badges

     import React from 'react';
     import { Link } from 'react-router-dom';

     import './styles/Badges.css';
     import confLogo from '../images/badge-header.svg'
     import BadgesList from '../components/BadgesList';

     import api from '../api'

Y hacemos nuestra llamada;

     try {
            const data = api.badges.list();
            this.setState({ loading: false, data: data })
            
        } catch (error) {
            this.setState({ loading: false, error: error })
            
        }
Dejando asi data en vez de vacia, hacemos la llamada a badges donde queremos la lista de todos los badges, pasa que esta es una llamada asíncrona regresa una promesa, lo que podemos hacer aca es usar async await para esperar la contestación pero para poder declarar await, debemos declarar nuestra función como async de manera que;

        fetchData= async () => {
        this.setState( { loading: true, error:null })

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data })
            
        } catch (error) {
            this.setState({ loading: false, error: error })
            
        }
        
 Si en nuestra constante de data ocurriese un error, entonces la llamada va a ser rechazada, la promesa se rechaza y tira error, por eso es que tenemos un tryCatch, si aquí hay error, lo capturamos en nuestro error y lo guardamos en el estado.
 
Si observamos nuestra pagina y la recargamos, podremos notar que nuestro loading se queda allí un rato y luego nos carga la lista de los miniBadges, es decir obtenemos los resultados y los presentamos, es posible que ;la llamada en lugar de regresar datos, regresa dato pero vacio, hagamos la prueba para ello. Vamonos a api.js y simulemoslo.

Colocaremos en nuestro código el siguiente arreglo vacio

      const api = {
        badges: {
          list() {
              return [];
            //return callApi('/badges');
          },
Comprobaremos que no habrá ningún dato en nuestra pagina luego de esto.

Manejemos este caso porque no queda bien la interface cuando los datos regresan vacios de esta manera y pudimos haber presentado el estado de un dato vacio, para ello vamos a BadgesList;

      classBadgesListextendsReact.Component{
        render() {
          if(this.props.badges.length === 0){
            return(
              <div>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                  Createnew badge
                </Link>
              </div>
            )
          }

Con esto lo que hacemos es que si no recibimos ninguna data en nuesta primse, se le indicara a la pagina que nos de el mensaje de que no obtuvimos una respuesta fructífera y daremos la opción de crear un nuevo badge con nuestro sistema creado previamente, recordando importar “Link” de react router en la parte de arriba.

Luego de esto, vamos a nuestra pagina, nos vamos a badges list y vemos que nuestro botón nos lleva a la app, todo perfecto, pero esto fue una simulación asi que vamos a hacer ahora el trabajo real, nos vamos a api.js y eliminamos el estado vacio que agregamos y reactivamos nuestro llamado a la api como lo teníamos previamente.

Ahora nos falta el último caso, el cual es donde tenemos un error, para ello vamos a hacer lo siguiente en lugar de regresar datos, automáticamente, tiraremos un error de manera que ;

      const api = {
        badges: {
          list() {
              thrownewError('Not Found')
            //return callApi('/badges');
          },
Luego de esto vamos a nuestro archivo Badges.js
Y agregamos otra condicional en render de manera que;

        if (this.state.error){
            return `Error: ${this.state.error.message}`;
        }
Lo que hara que al momento de recibir el state de error nos colocara nuestro mensaje en display

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Hooks
Hasta ahora todos los componentes que hemos desarrollado son de dos tipos o son clases o son funciones, cuando son funciones es porque ese componente no tiene un estado propio que manejar no tiene ciclos de vida a los que se tiene que suscribir mientras que las clases si, cuando queremos hacer una petición a un api tal vez la comenzamos desde el componentDidMount también cambiamos estados de loading a true, lo apagamos cuando tenemos los datos los guardamos en el estado o si hubo un error también lo guardamos.

React tiene un feature que se llama hooks y va a permitir que las funciones también tengan features que solo tienen las clases a través de estas funciones llamadas hooks;
Por ejemplo;

    -useState: esta función la vamos a llamar cuando nuestro componente funcional quiera cambiar su estado.
    -useEffect: nos va a permitir suscribirnos al ciclo de vida, queremos que algo ocurra cuando el componente se presenta por      primera vez, lo tenemos, cuando haga el unmount, cuando se actualice. Todo eso.
    
    -useReducer: nos va a permitir tomar acciones basados en otras acciones.
Estos son un conjunto limitado de todos los hooks que react tiene.
Los que no tiene, nosotros los inventamos y son llamados custom hooks.
Hay una regla para usar los custom hooks y es que cualquier hook que nosotros escribamos, en su nombre, en el nombre de esta función también tiene que comenzar con la palabra “use” y la regla numero dos es que nunca lo pondemos ejecutar condicionalmente, esto quiere decir que no podemos hacer algo como “if” una condición, cierta o falsa y adentro en ese bloque hay un hook, no podemos, siempre que sigamos esas reglas todo bien.

Para probar realizaremos un contador dentro de los badgeDetails, sera un botón que se desplegara y cada vez que demos click aumentara el contador;

     <buttononClick={()=>{}}
     className="btn btn-primary mr-4">
                         Increase Count: {count}
                     </button>

Pare ello iniciamos con el botón el botón tendrá un función onClick que definiremos ahora mismo y tendrá un texto con un contador dentro;
functionBadgeDetails(props){
    const count = 3;

Alli arriba definimos count como 3 y verificamos en nuestro botón que este todo en orden, luego haremos al implementación de los hooks por lo que si queremos usarla, solo debemos usar React.useState(), esta función nos va a regresar 2 argumentos que los vamos a recibir dentro de 2 brackets cuadrados, es como si fuese un arreglo porque useState nos regresa exactamente eso, un arreglo ;
functionBadgeDetails(props){
    const [ count, setCount] = React.useState(0);
    const count = 3;

Si te fijas en los arreglos, estos básicamente son state y setState solo que cambian los nombres y el estado lo podemos inicializar de 0. Ahora nos dirigimos nuevamente al botón;

                <buttononClick={()=>{
                    setCount(1);
                }} className="btn btn-primary mr-4">
                    Increase Count: {count}
                </button>
Creamos la función que se activara al dar click la cual tendrá un método setCount() el cual aumentara a 1 el count, probamos en nuestra webApp y por lo que podremos apreciar que el count sube a 1 al clickear el botón, pero esto no es lo que queremos.

Realmente lo que buscamos es hacer un contador que cuando demos click, sume un numero mas por lo que realizaremos lo siguiente, colocaremos nuestra variable count y le diremos que aumentar +1

                <buttononClick={()=>{
                    setCount(count + 1);
                }} className="btn btn-primary mr-4">
                    Increase Count: {count}
                </button>
                
De momento no estamos usando el setState de la clase sino que estamos usando el setState del Hook de useState, hagamos nuestro propio customHook;

function useIncreaseCount(max){
    const [ count, setCount ] = React.useState(0);

    if (count > max){
        setCount(0);
    }

    return[count, setCount];

}

    function BadgeDetails(props) {
    const [ count, setCount] = useIncreaseCount(4);
    
A nuestra función le pasamos un parámetro que sera el numero máximo y la vamos a usar desde nuestra constante abajo, a la cual le psamos como parámetro un máximo de 4.

    functionuseIncreaseCount(max){
    const [ count, setCount ] = React.useState(0);
    
Recuperamos Tambien el count y setCount del useState y siempre lo inicializaremos en 0 y por ultimo en nuestra función también esta incluido que ;

    if (count > max){
        setCount(0);
    }

    return[count, setCount];

    }
# Si el conteo es mayor que el máximo, vamos a regresar el valor a 0, pero vamos a terminar regresando siempre el arreglo de los valores de count y setCount y listo. Ya esta hecho nuestro contador.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Search Filter
En esta clase usaremos ReactHooks, la lista en si en código esta dentro de BadgesList, el problema que tenemos para hacerlo allí es que los hooks solo sirven dentro e componentes funcionales asi que en esta caso tenemos una clase y debemos hacer ese cambio;
functionBadgesList (props) {
  const badges = props.badges;

    if(badges.length === 0){
      return(
        <div>
          <h3>No badges were found</h3>
          <LinkclassName="btn btn-primary"to="/badges/new">
            Create new badge
          </Link>
        </div>
      )
    }

    return (
      <divclassName="BadgesList">
        <ulclassName="list-unstyled">
          {badges.map(badge => {
            return (
              <likey={badge.id}>
                <LinkclassName="text-reset text-decoration-none"to={`/badges/${badge.id}`}>
                <BadgesListItembadge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
Para ello lo primero que haremos sera cambiar el “class” que teníamos anteriormente por function y además pasarle props como parámetro, luego eliminaremos los tris.props que teníamos en nuestro código y crearemos una constante para darle a “badges” el valor de props.badges y por ultimo eliminamos el ultimo corchete que nos sobra. 
Verificamos que nuestro código funcione de manera correcta y si esta todo en orden pasamos al siguiente paso.
Ahora;

      return (
        <divclassName="BadgesList">
          <divclassName="form-group">
              <label>Filter Badges</label>
              <inputtype="text"className="form-control"/>
          </div>

Lo primero que hacemos es crear un form-group y colocarle la etiqueta y una barra input de texto con las clases de BootStrap. Verificamos que este todo en orden y luego procederemos a hacer que esta filter las palabras que escribamos en ella con relación a los badges creados en nuestra lista.

El primer paso sera darle un value a nuestro input al momento de escribir algo en el, asi que para ello usamos dos props, el primero es el value y el segundo es el onChange, cuando ocurra el onChange va a pasar un evento y después del evento vamos a leerlo con “console.log(e.target.value)” y de alguna forma queremos guardar el cambio efectuado por el evento en el value, asi que vamos a usar el Hook de useState, vamos hasta arriba y ;

     functionBadgesList(props){
       const badges = props.badges;

       const [query, setQuery] = React.useState('')
       
El useState nos regresa dos valores los cuales serán el query y el setQuery “state y setState” usamos el React.useState y como valor inicial le damos el string vacio, este query es el que vamos a usar en el value y lo que sea que este en ese estado es lo que vamos a desplegar, asi que vamos a nuestra función que tenemos en onChange ;

    return (
      <div className="BadgesList">
        <div className="form-group">
            <label>Filter Badges</label>
            <input 
            value={query}
            type="text" 
            className="form-control"
            onChange={(e)=>{
              setQueryv(e.target.value)
            }}
            />
        </div>


Y en vez de console.log, le diremos setQuery al valor que tenemos en la función de onChange que tendrá por parámetro nuestro value, ya con esto tenemos nuestro value declarado, aun nos falta filtrarlo, ese es el próximo paso, para hacer eso vamos a usar la combinación de la lista de los badges y la del query;

    const filteredBadges = badges.filter(badge => {
      return badge.includes(query);
    })

El resultado de lo que vamos a hacer lo vamos a guardar dentro de una nueva variable a la que vaos a llamas filteredBadges y vamos a decir que sobre los badges queremos filtrarlos y a la función fiulter le pasamos una función como argumento en este caso nos va a dar cada uno de los filter y si nosotros regresamos “true” nos quedamos con el valor y si regresamos algo “false” lo descartamos, asi que los badges que queremos regresar con los que contengan lo que se esta escribiendo, es decir, lo que esta en el query.
Lo siguiente es reemplazar el uso de “badges” porque ya no tenesmoq que estar pendiente de todos los badges sino solo los que esten filtrados asi que ;

    if(filteredBadges.length === 0){
         return(
           <div>
             <h3>No badges were found</h3>
             <LinkclassName="btn btn-primary"to="/badges/new">
               Create new badge
             </Link>
           </div>
         )
       }

    return (
      <divclassName="BadgesList">
        <divclassName="form-group">
            <label>Filter Badges</label>
            <input 
            value={query}
            type="text" 
            className="form-control"
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
            />
        </div>


        <ulclassName="list-unstyled">
          {filteredBadges.map(badge => {
            return (
              <likey={badge.id}>
                <LinkclassName="text-reset text-decoration-none"to={`/badges/${badge.id}`}>
                <BadgesListItembadge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
    }
Y veremos que tendremos un error, pero esto es porque inlcudes no es una funcion sino firstName.includes, de manera que;


    functionBadgesList(props){
      const badges = props.badges;

      const [query, setQuery] = React.useState('')

      const filteredBadges = badges.filter(badge => {
        return badge.firstName.includes(query);
      })

De esta manera ya podremos filtrar, pero tenemos un bug en la pagina, cuando no encontramos nada se nos va el search filter, esto pasa porque cuanbdo comenzamos a escribir, se nos filtra el valor, cambiamos la lista y esta misma llega a 0 asi que caimos en el caso de crear un new badge.

Tenemos una opcion, hacer una copia de nuestra search filter y pegarla arriba encima de no badges Found asi no perdemos nuestra barra;

    if(filteredBadges.length === 0){
      return(
        <div>
          <divclassName="form-group">
            <label>Filter Badges</label>
            <input 
            value={query}
            type="text" 
            className="form-control"
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
            />
        </div>
          <h3>No badges were found</h3>
El filtro tiene ahora otro detalle y es que no nos toma las minúsculas al momento de buscar un nombre, al menos en el caso de las letras iniciales de los nombres que es la que nos interesa por lo que vamos a hacer algo que se llama normalizar, vamos a nuestro código ;

      functionBadgesList(props){
        const badges = props.badges;

        const [query, setQuery] = React.useState('')

        const filteredBadges = badges.filter(badge => {
          return badge.firstName.toLowerCase().includes(query);
        })

Y le colocamos el toLowerCase() para que en efectos de buscar los valores, lo hará con nuestro nombre en minúsculas y para agregar nuestro apellido al método de búsqueda, vamos a colocar los strings y encerrarlos de esta manera;

      const filteredBadges = badges.filter(badge => {
        return`${badge.firstName}${badge.lastName}`.toLowerCase().includes(query);
      })
Ahora buscamos en nuestro searchFilter y veremos que funciona perfectamente excepto cuando buscamos con la letra inicial en mayuscula, pero eso es porque ovlidamos pasar nuestro Query a lowerCase;

     const [query, setQuery] = React.useState('')

     const filteredBadges = badges.filter(badge => {
       return`${badge.firstName}${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
     })
Con esto funcionara perfecto, pero, el detalle es que nuestra lista es corta de momento pero cuando nuestra lista sea mucho mas grande, sera un cuello de botella para nuestra app para ello vamos a usar otro hook que trae React que se llama useMemo, le vamos a dar un función y unos argumentos y la primera vez que reciba ese par de argumentos va a correr la función y va a calcular el resultado y lo regresa, pero la segunda vez que tenga esos argumentos de nuevo ya tiene la contestación asi que la tiene memorizada y te la regresa rápido, asi que;

     const filteredBadges = React.useMemo(badges.filter(badge => {
         return`${badge.firstName}${badge.lastName}`
         .toLowerCase()
         .includes(query.toLowerCase());
       }));
       
El primer argumento de useMemo sera otra función;

       const filteredBadges = React.useMemo(
         () =>{badges.filter(badge => {
         return `${badge.firstName} ${badge.lastName}`
         .toLowerCase()
         .includes(query.toLowerCase());
       })
     });

En este caso va a ser la que teníamos, ahora tenemos que regresar este valor o al menos guardarlo de alguna forma ;

      const filteredBadges = React.useMemo(
        () =>{
          constresult = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
      })
    });

Y el segundo argumento de useMemo es una lista asi que vamos;
  
        const filteredBadges = React.useMemo(
        () =>{
          constresult = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
      })
     }, [ badges, query ]);
     
Estos son los argumentos que siempre que sean iguales la contestación si ya esta memorizada te la regresa de inmediato sino la calcula por primera vez, los argumentos que usarenis detro de ella para hacer el calculo, sera badges y el query, si el query cambia hay que volver a calcular el result, si la lista de badges cambia también hay que volverlo a calcular, cuando lleguemos a este punto el valor lo tenemos que guardar en el valor, pero el valor lo debemos guardar en algún sitio que luego se pueda usar fuera de useMemo;

      const [filteredResults, setFilterRedults ] = React.useState(badges)

         React.useMemo(
          () =>{
            constresult = badges.filter(badge => {
          return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
        })

Por lo que para ello vamos a crear un estado, eliminamos el filteredbadges y creamos arriba un state usando el hook useState pasando filteredResults y setFilteredResults, este hook tendra como valor inicial la lista completa de los badges, entonces cuando ya tengamos ese resultado lo tenemos que guardar;

        const [query, setQuery] = React.useState('')
        const [filteredBadges, setFilteredBadges] = React.useState(badges)

         React.useMemo(
          () =>{
            constresult = badges.filter(badge => {
          return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
        })

        setFilteredBadges(result)
      }, [ badges, query ]);

Por lo que llamaremos el setFilteredBadges y le pasaremos nuestro resultado (cambiamos el result por badges en los hooks), privamos si funciona y si esta todo bien, perfecto entonces, ya la lista esta calculada asiq ue nuestra app es mucho más rápida, ahora nuestro siguiente paso sera empaquetar todo en un customHook;

       function useSearchBadges(badges){
         const [query, setQuery] = React.useState('')
         const [filteredBadges, setFilteredBadges] = React.useState(badges)

          React.useMemo(
           () =>{
             constresult = badges.filter(badge => {
           return `${badge.firstName} ${badge.lastName}`
           .toLowerCase()
           .includes(query.toLowerCase());
         })

         setFilteredBadges(result)
       }, [ badges, query ]);

         return { query, setQuery, filteredBadges}
       }

Ahora encapsulamos todo en el custom Hook y retornamos el valor que sera una forma de poner el setQuery junto con el filteredBadges y regresamos el query tambien, para usar nuestro custom hook vamos a hacer lo siguiente;

      functionBadgesList (props) {
        const badges = props.badges;

        const { query, setQuery, filteredBadges } = useSearchBadges(badges)

Vamos a llamar nuestro custom hook de esta manera llamamos nuestra función hook con la lista de los badges como parámetro. Probamos que todo funcione perfectamente. Ahora podemos buscar una persona entre miles de ellas con nuestro search Filter, y encapsulamos toda esa lógica en una función sin que afectara nuestra interface en un solo sitio, ese custom hook ahora podemos usarlo en varios otros componentes, especialmente si son componentes que presentan una lista de invitados o de badges, ahora debemos aprender a identificar esas oportunidades donde podemos usar hooks en nuestros componentes y crear nuestros propios hooks para reducir la repetición de código y disminuir cada una de las responsabilidades que los hooks tienen.


		
		 
