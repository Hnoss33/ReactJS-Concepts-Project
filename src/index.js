import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App.js';
import './global.css';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('App');

ReactDom.render(< App/>, container); //cada vez que vayamos a renderizar algo necesitamos colocar el nombre del archivo 

// ReactDom.render(<Badge
//      FirstName = "Narayan" 
//      LastName = "Isamu"
//      JobTitle = "Hitman"
//      Afiliation = "Affiliation | Combat Cab"
//      AvatarURL = "https://www.gravatar.com/avatar/e79975d3c8ba4392890e18143730eb0c?s=300"
//      />, container);//cuando no tiene los mayor que menor que tenemos un componente , pero a este reactDom tenemnos que darle un elemnto
//     //  Props
//     //  Los props que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.
//      //  Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

