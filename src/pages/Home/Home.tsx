import React from 'react';
import Main from '../../components/home/Main';

import FooterHome from '../../components/home/FooterHome';

import './Home.css';

export default function Home(){

    return(
        <div className='home-container'>
            
            <Main />
            <FooterHome />
            
        </div>
    )
}