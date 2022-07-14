import React from 'react'
import {ImHome} from 'react-icons/im'
import Model from '../Model/Model'
import {Link} from 'react-scroll'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <Link class="navbar-brand" to="/"><span><ImHome/></span>My Hostel</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/' class="nav-link active" aria-current="page" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >Home</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link"  to='about' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="services" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="gallery" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >Gallery</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="contact" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >Contact</Link>
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