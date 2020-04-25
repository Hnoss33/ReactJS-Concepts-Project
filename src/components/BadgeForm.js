import React from 'react'

class badgeForm extends React.Component {
    // state = {} //con este estado vacio podemos ver. LA INFORMACION SE QUEDA ACA Y QUEREMOS COMPARTIRLA
    handleClick = e => { //manejador del evento al escribir, este metodo recibe el evento  
        console.log("Button was clicked");
       };
//este simbolo {e} es un veneto sintetico abajo en el metodo
       handleSubmit = e => { //manejador de evento al hacer click, Los elementos button también tienen un evento que es onClick.
        e.preventDefault();
        console.log("form was submitted");
        console.log(this.state); //con esto imprimimos todo el estado (la info)
        };
//Cuando hay un botón dentro de un formulario, este automáticamente será de 
//tipo submit. Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo button o manejándolo 
//desde el formulario cuando ocurre el evento onSubmit.
    render(){
        return (
            <div>
                <h1>New Attendant</h1>
    <form onSubmit={this.handleSubmit}> {/* con esto todos los imput ahora van a usuar el prop onchange */}
        
        <div className="form-group">
        <label>First Name</label>
        <input 
        onChange={this.props.onChange}
         className="form-control" 
         type="text"
         name="firstName"
         value={this.props.formValues.firstName} //esto es para leer el estado y controlar la info, en este caso this.props.formValues.firstName leemos el first name 
         />
        </div>

        <div className="form-group">
        <label>Last Name</label>
        <input 
        onChange={this.props.onChange} 
        className="form-control" 
        type="text" 
        name="lastName"
        value={this.props.formValues.lastName}
        />
        </div>

        <div className="form-group">
        <label>Email</label>
        <input 
        onChange={this.props.onChange} 
        className="form-control" 
        type="text" 
        name="email"
        value={this.props.formValues.email}
        />
        </div>

        <div className="form-group">
        <label>Job Title</label>
        <input 
        onChange={this.props.onChange} 
        className="form-control" 
        type="text" 
        name="jobTitle"
        value={this.props.formValues.jobTitle}
        />
        </div>

        <div className="form-group">
        <label>Twitter</label>
        <input 
        onChange={this.props.onChange} 
        className="form-control" 
        type="text" 
        name="twitter"
        value={this.props.formValues.twitter}
        />
        </div>
{/* LOS IMPUT DE RETURN TOMAN LOS VALORES DESDE BadgeNew que le esta pasando todos los valores*/}
            <button onClick={this.handleClick} className= "btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default badgeForm;

