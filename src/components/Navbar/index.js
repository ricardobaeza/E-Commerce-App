import React, {Component} from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className= "navbar navbar-expand-lg navbar-light myNavbarStyles">
            <div className="nav-container" na>
                    <NavLink to="/">
                        <div className="logo-container">
                            <FontAwesomeIcon icon={"stroopwafel"} id="logo" />
                            <a className= "navbar-brand" id="titleText"> Shopj</a>
                        </div>
                    </NavLink>
                    
                <NavLink to="/cart">
                    <FontAwesomeIcon icon={"shopping-cart"} color="white" onClick={props.navigateToCart}/>
                </NavLink>
            </div>
            
        </nav>
    )
}

export default Navbar; 