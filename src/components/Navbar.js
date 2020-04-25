import React from 'react'
import "../components/styles/Navbar.css"
import logo from '../images/cyberpunk.png'

class NavBar extends React.Component {
    render(){
        return (
        <div className = "Navbar">
            <div className = "container-fluid">
               <a className = "Navbar__brand" href="/">
                   <img className = "Navbar__brand-logo" src={logo} alt="Logo"/>
                   <span className= "font-weight-light">CyberPunk</span>
                   <span className= "font-weight-bold">Conf</span>
               </a>
               </div>
            </div>
        )
    }
}
export default NavBar;