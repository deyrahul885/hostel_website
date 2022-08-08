import React,{useState} from 'react'
import {ImHome} from 'react-icons/im'
import Model from '../Model/Model'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link to='/' className='d-flex align-items-center'> 
      <ImHome className='home-icon'/>
      <span className='navbar-brandName'>
      <h4 className='m-0'>ANAND BHAWAN</h4>
      <p className='m-0'>Girl's Hostel</p>
      </span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to='/about' >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      <button type="button" className='btn nav-button' data-bs-toggle="modal"  data-bs-target="#staticBackdrop" >
              Contact Us
      </button>
            <Model style={{marginTop:'130px'}}/>
      </div>
    </div>
  </nav>
    </>
        
  )
}

export default Navbar