import React from 'react';
import '../pages/styles/BadgeNew.css';
import Navbar from '../components/Navbar.js';
import Header from '../images/samurai.png';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';


class BadgeNew extends React.Component {
  state = {
    form: {
      FirstName: '',
      LastName: '',
      Email: '',
      JobTitle: '',
      Twitter: '',
    },
  };

  handleChange = e => {
    this.setState({ //https://es.reactjs.org/docs/faq-state.html
      form: {
        ...this.state.form, //cuando hacemos esto aca dejamos caer todos los valores del state form
        [e.target.name]: e.target.value,
      },
    });
  };
render() {
    return (
      <div>
        <Navbar/>
        <div className ="BadgeNew__hero">
            <img className="img-fluid" src={Header} alt="Logo"/>
        </div>
        <div className= "container">
            <div className="row">
                <div className="col-6">
                    <Badge 
                     firstName = {this.state.form.firstName} 
                     lastName = {this.state.form.lastName} 
                     jobTitle = {this.state.form.jobTitle} 
                     twitter = {this.state.form.twitter} 
                     email= {this.state.form.email} 
                     AvatarURL = "https://www.gravatar.com/avatar/e79975d3c8ba4392890e18143730eb0c?s=300"
                     />
                     </div>
              <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;