import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios';
import Home from './pages/Home';
import Admin from './pages/Admin';
import {Routes,Route} from 'react-router-dom'
import Services from './components/Services/Services';
import About from './components/About-us/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <Footer/>  
    </div>
  );
}

export default App;
