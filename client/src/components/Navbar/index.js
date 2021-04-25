import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/search" className= "nav-link">Search</Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved" className= "nav-link">Search</Link></li>
            </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;