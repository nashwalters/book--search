import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Google Books</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/search" className= "nav-link">Search</Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved" className= "nav-link">Search</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;