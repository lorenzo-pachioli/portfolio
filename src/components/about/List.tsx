import React from 'react';
import {history} from './aboutData';
import '../skils/Skills.css';
import './List.css';

export default function List(){

    const effects = {
        animation: '1.0s ease-out 0s 1 slideInFromRight forwards'
        }
   


    return(
        <div className='skills-container'>
            <div className='clip-skill' style={effects} />
            <div className='skills-subcontainer'>
                <h1 className="title-skills" >About me </h1>
                <div className='back' />
                <div className="about-subconteiner">
                    {
                        history.map((H)=>{
                            return(
                                <div className={H.class}>
                                    <p className='label' style={H.style}>{H.name}</p>
                                    <p className='info'>{H.storie}</p> 
                                </div>

                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}