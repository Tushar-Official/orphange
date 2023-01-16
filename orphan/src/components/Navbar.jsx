import React from 'react'
import './Navbar.css';
import logo from './logo.png'
function Navbar() {
  return (
    <>
    <div className='heading'>
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <div className="care"><h1>SOCIAL CHILDREN WELFARE </h1></div>
        <div className="menu">
            <a href=" "><button>CONTACT US</button></a>
            <a href="/#" ><button>DONATE</button></a>
        </div>


      </div>
    </>
  )
}

export default Navbar