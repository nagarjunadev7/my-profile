import React from 'react';
import Aboutme from '../components/Aboutme/Aboutme';
import Contactme from '../components/Contactme/Contactme';
import Hero from '../components/hero/Hero';
import Showskills from '../components/skills/Showskills';
import Mywork from '../components/work/Mywork';

function Homepage(){
    return(
        <div>
        <Hero />
        <Showskills />
        <Mywork/>
        <Aboutme/>
        <Contactme/>
        </div>
        
    )
}

export default Homepage;