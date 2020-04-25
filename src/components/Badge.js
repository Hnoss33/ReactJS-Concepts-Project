import React from 'react';// importamos el react primer paso
import Logo from '../images/cyberpunk.png';
import '../components/styles/Badge.css'; // si importamos este css debemos colocar los estilos en cada contenedor con la respectiva clase

class Badge extends React.Component { //TODOS ESTOS COMPONENTES REQUIEREN POR LO MENOS UN METODO / es obligatorio!!
render() { // este render nos muestra el resultado en pantalla
  
 return <div className = "Badge"> 
<div className = "Badge__header">
  <div className = "Badge__img">
  <img src= {Logo} alt= "Logo de la conferencia"/>
  </div>
</div>

<div className = "Badge__section-name">
<img className = "Badge__avatar" src= {this.props.AvatarURL} alt= "Avatar"/>
<h1> {this.props.firstName} <br/> {this.props.lastName} </h1>
</div>

<div className = "Badge__section-info">
  <h3>{this.props.jobTitle}</h3>
  <div>@{this.props.twitter}</div>
</div>

<div className = "Badge__footer">
 <p>{this.props.email}</p>
</div>
  </div>

  }
}

export default  Badge; //con esto exportamos este archivo 