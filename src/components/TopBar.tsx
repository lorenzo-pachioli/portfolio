import React from 'react';
import { Link } from 'react-router-dom';



export default function TopBar(){

    return(
        <div className='home-container'>
            <ul>
                <li>
                <Link to='/' >Home</Link>
                </li>
                <li>
                <Link to='/skills' >Skills</Link>
                </li>
                <li>
                <Link to='/about' >About</Link>
                </li>
                <li>
                <Link to='/portfolio' >Portfolio</Link>
                </li>
                <li>
                <Link to='/contact' >Contact</Link>
                </li>
            </ul>
        </div>
    )
}