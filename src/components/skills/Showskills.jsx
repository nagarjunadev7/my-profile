import React from 'react';
import Skillsone from './Skillsone';
import Skillstwo from './Skillstwo';
import './Showskills.css'
function Showskills(){
    return(
        <div className='my_skills'>
        <Skillsone />
        <Skillstwo />
        </div>
    )
}

export default Showskills;