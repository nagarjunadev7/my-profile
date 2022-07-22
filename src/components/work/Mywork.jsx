import React from 'react';
import './Mywork.css';
import Worktemp from './Worktemp';
import  {Projectsdata}  from './Projectsdata';
function Mywork(){
    return(
      <div className='proj_head'>
        <h1 className='my_head'>Projects that I am proud of</h1>
        <p className='my_para'>Here are a few projects I have worked on as a student. Most of them are experiments because as a student, I had the freedom to try new things. All of them individually represent something I really love, for I am always on-the-go for learning something new.</p>
        {
          Projectsdata.map(data=>{
            return(
              <Worktemp data={data}/>
            )
          }) 
        }
      </div>
      
    )
}

export default Mywork;