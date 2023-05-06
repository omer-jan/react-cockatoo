import React from 'react'; 
import { Link } from 'react-router-dom'; 
import navStyle from './NavigationMenu.module.css'; 

function NavigationMenu() {
  return (
    <nav>
        <div className={navStyle.navWrapper}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
        </div>
    </nav> 
  );
}

export default NavigationMenu;
