import React from 'react';
import { Link } from 'react-router-dom';
import line from '../assets/line.svg';
 import './TopBar.css';



export default function TopBar(){ 

    let checkbox = document.getElementById('hamburgesa') as HTMLInputElement;
    
    const handleMobileClick = (e:any) => {

        let screenON = e.target.style.display
        
        if(screenON === 'flex'){
            e.target.style={filter:'brightness(80%)'}
        }
        
        checkbox.checked = false;
    }
    
    return(
        <div className='topBar-container'>
            <h3> PACH<span>IOLI</span></h3>
            <div className='menu'>
                <input type='checkbox' id='hamburgesa'   /> 
                <label htmlFor="hamburgesa" >
                    <img className='line1' src={line} alt='' />
                    <img className='line2' src={line} alt='' />
                    <img className='line3' src={line} alt='' />
                </label>
                <ul>
            
                    <li>
                    <Link className='link' onClick={handleMobileClick} to='/'  > Home </Link>
                    </li>
                    <li>
                    <Link className='link' onClick={handleMobileClick} to='/skills' > Skills </Link>
                    </li>
                    <li>
                    <Link className='link' onClick={handleMobileClick} to='/about' > About </Link>
                    </li>
                    <li>
                    <Link className='link' onClick={handleMobileClick} to='/portfolio' > Portfolio </Link>
                    </li>
                    <li>
                    <Link className='link' onClick={handleMobileClick} to='/contact' > Contact </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}