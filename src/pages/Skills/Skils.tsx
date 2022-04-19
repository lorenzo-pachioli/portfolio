import React from 'react';
import { skillsList } from './skillsList';
import './Skills.css';

export default function Skills(){

   const effects = {
    animation: '1.0s ease-out 0s 1 slideInFromRight forwards'
    }
    

    return(
        <div className='skills-container'>
            <div className='clip-skill' style={effects} />
            <div className='skills-subcontainer'>
                <h1 className="title-skills" data-text= "Spotlight">My set of skills </h1>
                <ul className='skills'>
                {skillsList.map((skill)=>{
                    return(
                        
                            <li>
                                <img src={skill.svg} alt='' />
                                <p>{skill.name}</p>
                            </li>
                        
                    )
                })}
                </ul>
                

            </div>
           
        </div>
    )
}