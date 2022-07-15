import React from 'react'
import {ImHome} from 'react-icons/im'
import Model from '../Model/Model'
import {Link} from 'react-scroll'
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
    {/* <Link className="navbar-brand fw-bold" to="/"><span><ImHome/></span>ANAND BHAWAN<p>Girl's Hostel</p></Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link"  to='about' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="services" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="gallery" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >Contact</Link>
        </li>
      </ul>
      <button type="button" className='btn nav-button' data-bs-toggle="modal"  data-bs-target="#staticBackdrop" >
              Call Us
      </button>
            <Model/>
      </div>
    </div>
  </nav>
    </>
        
  )
}

export default Navbar