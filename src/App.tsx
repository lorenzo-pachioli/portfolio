import React, {useContext}  from 'react';
import { AppContext } from './context/AppContext3';
import {  Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skils';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  
  /* const {} = useContext(AppContext) */



  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/skills'  element={<Skills />}/>
        <Route path='/about'  element={<About />}/>
        <Route path='/portfolio'  element={<Portfolio />}/>
        <Route path='/contact'  element={<Contact />}/>
      </Routes>
      
    </div>
  );
}

export default App;
