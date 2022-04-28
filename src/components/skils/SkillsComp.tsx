import React from 'react';
import { skillsList } from './skillsList';
import './Skills.css';

export default function SkillsComp(){

   const effects = {
    animation: '1.0s ease-out 0s 1 slideInFromRight forwards'
    }
    

    return(
        <div className='skills-container'>
            <div className='clip-skill' style={effects} />
            <div className='skills-subcontainer'>
                <h1 className="title-skills" >My set of skills </h1>
                <div className='back' />
                <ul className='skills'>
                {skillsList.map((skill)=>{
                    return(
                        
                            <li key={skillsList.indexOf(skill)}>
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