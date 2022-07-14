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
                       <h2>My Hostel</h2> 
                </div>
                <div className='footer_copyright'>
                        <p>Copyright @ 2022 MyHostel</p>
                </div>
                <div className='footer_navItem'>
                    <ul className='nav-menu'>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
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