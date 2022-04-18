import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';



export default function TopBar(){

    return(
        <div className='topBar-container'>
            <h3> PACH<span>IOLI</span></h3>
            <ul>
                <li>
                <Link className='link' to='/' > Home </Link>
                </li>
                <li>
                <Link className='link' to='/skills' > Skills </Link>
                </li>
                <li>
                <Link className='link' to='/about' > About </Link>
                </li>
                <li>
                <Link className='link' to='/portfolio' > Portfolio </Link>
                </li>
                <li>
                <Link className='link' to='/contact' > Contact </Link>
                </li>
            </ul>
        </div>
    )
}