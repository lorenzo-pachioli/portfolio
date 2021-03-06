import React  from 'react';
import {  Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skils';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import TopBar from './components/TopBar';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/skills'  element={<Skills />}/>
        <Route path='/about'  element={<About />}/>
        <Route path='/portfolio'  element={<Portfolio />}/>
        <Route path='/contact'  element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
