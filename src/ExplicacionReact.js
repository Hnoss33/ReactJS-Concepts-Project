//ESTO ES UN EJEMPLO SIN USAR REACT
// const  element = document.createElement('h1'); // esto crea un elemento en el H1 

// element.innerText = "Hello"; // aca indicamos que vamos a crear un texto

// const container = document.getElementById('app');//aca es donde debemos poner esto ya que en el index.html esta el id 

// //como ya tenemos este contenedor hacemos lo siguiente 
// container.appendChild(element)
// //react es el unico elemento que esta en el html app
// //react importa al html automaticamente
// //en el inspector de elementos del chromo veremos unos elementos en el DOM que no estaban antes
// //entonces 1: tenemos un elemento 2: tenemos un contenedor 3: lo estamos presentando en pantalla
// //con este ejemplo no estamos usanddo react 

// //ACA USAREMOS LO MISMO USANDO REACT

import React from 'react'; //IMPORTAMOS REACT PORQUE VAMOS A UTILIZAR JSX
import ReactDom from 'react-dom';
// estas dos herramientas de react van a trabajar en conjunto
//el analogo de estas dos es el create element para el react, y el react DOM es es el analogo a apend child

// const element = <h1>Hello</h1>; // este es el elemento y abajo creamos el contenedor
// //Hay una alternativa para la linea de codigo anterior 23 y es:
// // const element = document.createElement('h1',{}, 'hola! soy los children') //esto es lo mismo que arriba y lo que esta en es: {atributo}
// const container = document.getElementById('app');
// // ReactDOM.render(__que__, __donde__); // este metodo render toma dos argumentos que y donde lo queremos renderizar
// ReactDom.render(element, container); // ESTE ES EL ORDEN 

//ACA TRABAJAREMOS CON ALGO QUE TENGA UN ATRIBUTO POR EJEMPLO LOS 'a' {en el html} => ESTOS TIENEN EL 'href'
// const jsx = <h1>Hola</h1>;
// const element = React.createElement('a',{ href: 'https://github.com/Hnoss33'}, 'My Github'); 
// const name = 'jose';
// const jsx = <h1>Hola soy, {name}</h1>; //Esto que esta entre llaves nos permite introducir variables o de una forma generica nos permite introducir expreciones de javascript
// //aca adentro {......} no solo es variables es una exprecion : algo que se evalua y se interpreta, 
// const sum = () => 3 + 3; //aca sum es igual a una funcion () que dice 3 + 3 y la llamamos en la linea 37 con los corchetes que estan dentro del H1
// const jsx = <h1>Hola soy, {sum()}</h1>;//podemos llamar otra funcion desde aca 
// //sea lo que sea que esta adentro de los corchetes se va a evaluar y se muestra en pantalla
// // const element = React.createElement('h1',{}, `hola, soy ${name}`)// aca introducimos una variable dentro de todo el contenido la lin ea 34 desabilita esta forma
// const container = document.getElementById('app');

// ReactDom.render(jsx, container); //aca quitamos element para solo llamar jsx


//TAMBIEN PODEMOS HACERLO DE LA SIGUIENTE MANERA 

const jsx = ( // aca esta vez introducimos un contenedor con contenido , esto es JSX  es mejor !!!!
<div>
    <h1>Hola, soy Horacio</h1>
    <p>This is a test</p>
</div>
);
//podemos hacer esto mismo de arriba con react.element pero es mas largo y cpmplicado , aca se llama funcion con argumentos create element cn otros argumentos
// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola'),
//     React.createElement('p', {}, 'this is a test')
// );
const container = document.getElementById('app')
// ReactDom.render(element, container); // este es para la linea 54
ReactDom.render(jsx, container);
