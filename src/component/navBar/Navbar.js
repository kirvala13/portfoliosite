import React from "react";
import "./Navbar.css"
function NavBar() {
    return(
        <nav>
            <div className="logo">Soso</div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="Contact">
                <a href="#">Contact Us</a>
            </div>
        </nav>
    )
}

export default NavBar;