import React from 'react';
import Main from '../../components/home/Main';
import TopBar from '../../components/TopBar';
import FooterHome from '../../components/home/FooterHome';
import Footer from '../../components/Footer';
import './Home.css';


export default function Home(){

    return(
        <div className='home-container'>
            <TopBar />
            <Main />
            <FooterHome />
            <Footer />
        </div>
    )
}