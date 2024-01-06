import React from 'react';
import './Navbar.css';



const Navbar = () => {
  return (
    <div className="nav">

          <nav>
            <div className="nav_container">

            <a href="index.html" className="nav__logo"><h3>SmartFitNess</h3></a>

            <ul className="nav_items">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Programs</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact</a></li>

            </ul>

          
            <div className="nav__signin-signup">
                <a href="#" class="btn">Register</a>

            </div>

          

        </div>

    </nav>
    

    </div>
  )
}

export default Navbar;