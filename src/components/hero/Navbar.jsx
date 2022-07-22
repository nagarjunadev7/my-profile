import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import React from 'react';
import './Navbar.css'
function Navbar(){
    return(
        <div className='navbar'>
        <div className='my_logo'>
                <ul>
                    <li id='letter_two'>N</li>
                    <li id="logo_name" className='bounce'>Nagarjuna</li>
                    <li id="sub_name" className='bounce'>Full-Stack Developer</li>
                </ul>
                </div>
        <div className='list'>
        <ul>
                <li>Home</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li>Resume</li>
                <li>Contact</li>
                
            </ul>
        </div>
        <div className='my_logos'>
            <div className='social_icons'>
            <ul>
                <li><LinkedInIcon fontSize='small'/></li>
                <li><GitHubIcon fontSize='small'/></li>
                <li><TerminalIcon fontSize='small'/></li>
            </ul>
            </div>
        </div>
        </div>
    )

}

export default Navbar;