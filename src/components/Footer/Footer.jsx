import React from 'react'
import './footer.css'
import {Link} from 'react-scroll'
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
    <ScrollToTop smooth color='#fff' style={{backgroundColor: '#7f5a83',
  backgroundImage: 'linear-gradient(315deg, #a4508b 0%, #0d324d 74%)'}}/>
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