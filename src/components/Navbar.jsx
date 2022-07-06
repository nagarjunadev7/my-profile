import { Link } from '@material-ui/core';
import logo from './logo.png'
import React from 'react';
import './Navbar.css'
function Navbar(){
    return(
        <div className='navbar'>
        <div className='list'>
        <ul>
                <Link href='#'><img src={logo} className="my_logo" alt="myImage"/></Link>
                <li>Home</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li>Resume</li>
                <li>Contact</li>
                
            </ul>
        </div>
        </div>
    )

}

export default Navbar;