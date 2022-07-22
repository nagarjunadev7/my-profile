import React from 'react';
import Contactform from './Contactform';
import Contactmap from './Contactmap';
import './Contactme.css'

function Contactme(){
    return(
        <div className='contact'>
        <h1 className='contact_head'>Contact Me,</h1>
        <Contactform/>
        <Contactmap />
        </div>
    )
}

export default Contactme;