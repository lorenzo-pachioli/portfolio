import React from 'react';
import {history} from './history';
import '../Skills/Skills.css';
import './About.css'

export default function About(){

    const effects = {
        animation: '1.0s ease-out 0s 1 slideInFromRight forwards'
        }
   


    return(
        <div className='skills-container'>
            <div className='clip-skill' style={effects} />
            <div className='skills-subcontainer'>
                <h1 className="title-skills" >About me </h1>
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
                    


                    {/* <div className="card1">
                        <p className='label' style={card1}>Acamica</p>    
                        <p className='info'></p>  
                    </div>
                    <div className="card2">
                        <p className='label' style={card2}>UTNBA</p> 
                        <p className='info'></p>      
                    </div>
                    <div className="card3">
                        <p className='label' style={{backgroundColor:"lightblue"}}>Before coding</p> 
                        <p className='info'></p>     
                    </div> */}
                    

                </div>
            </div>
        </div>
    )
}