import React from 'react'; 
import { Link } from 'react-router-dom';
import imagen from '../../assets/perfil.jpg';
import './Main.css';



export default function Main(){
    

    return(
        <div className='main-container'>
            <img src={imagen} alt='img not found' />
            <h3>Welcome to my website</h3>
            <h1>Front-End Web Developer</h1>
            <div className='main-button'>
                <button>
                    <Link className='contact-btn' to='/contact' > Contact me </Link>
                </button>
            </div>
            
        </div>
    )
}