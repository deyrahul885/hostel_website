import React from 'react'
import './footer.css'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <>
    <section className='footer-section'>
        <div className="container">
            <div className="row text-center">
                <div className='footer_brand'>
                       <h2>ANAND BHAWAN</h2> 
                       <h5>Girl's Hostel</h5>
                </div>
                <div className='footer_copyright'>
                        <p>Copyright @ 2022 Anand Bhawan</p>
                </div>
                <div className='footer_navItem'>
                    <ul className='nav-menu'>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <h3>|</h3>
                        <li className="nav-item">
                        <Link className="nav-link" to="about">About</Link>
                        </li>
                        <h3>|</h3>
                        <li className="nav-item">
                        <Link className="nav-link" to="services">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Footer