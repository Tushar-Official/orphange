import React from 'react'
import './App.css';
import About from './components/About';
import Details from './components/details';
//import Donate from './components/donate';
import Heading from './components/Heading';
import Navbar from './components/Navbar.jsx';
import { useState } from 'react';

function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <Heading/>
      <About/>
      <Details/>
               
            
         
    </div>
  );
}

export default App;
