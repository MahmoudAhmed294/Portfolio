import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render(){

    return (
        <div className="navbar">
            
            <div className="container">
                
                <div className="logo">
                    <h2 className="logo-text">Mahmoud </h2>
                </div>
                
                
                <ul className="ul-list">
                    <li className="list-item"><NavLink to="/">Home</NavLink></li>
                    <li className="list-item"><NavLink to="#">Work</NavLink></li>
                    <li className="list-item"><NavLink to="#">Portfolio</NavLink></li>
                    <li className="list-item"><NavLink to="#">Resume</NavLink></li>
                    <li className="list-item"><NavLink to="#">About</NavLink></li>
                    <li className="list-item"><NavLink to="/Content">Contact</NavLink></li>
                </ul>
                
            </div>
            
        </div>
      )
    }
}

export default Navbar;
