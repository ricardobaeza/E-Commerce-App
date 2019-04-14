import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className= "navbar navbar-expand-lg navbar-light myNavbarStyles">
            <div className="nav-container" >
                    <Link to="/">
                        <div className="logo-container">
                            <FontAwesomeIcon icon={"stroopwafel"} id="logo" />
                            <span  id="titleText"> Shopj</span>
                        </div>
                    </Link>
                    
                <NavLink to="/cart">
                    <FontAwesomeIcon icon={"shopping-cart"} color="white" onClick={props.navigateToCart}/>
                </NavLink>
            </div>
            
        </nav>
    )
}

export default Navbar; 