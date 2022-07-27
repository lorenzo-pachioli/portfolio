import React from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import email from '../assets/email.svg';
import './Footer.css';

export default function Footer(){

    return(
        <div className='footer-container'>
            <p>Lorenzo pachioli</p>
            <div className='contacto'>
                <ul>
                    <li><a className='web' href='https://www.linkedin.com/in/lorenzo-pachioli/'><img src={linkedin} alt='' /></a></li>
                    <li><a className='web' href='https://github.com/lorenzo-pachioli'><img src={github} alt='' /></a></li>
                    <li><Link className='web' to='/contact' ><img src={email} alt='' /></Link></li>
                </ul>
            </div>
        </div>
    )
}