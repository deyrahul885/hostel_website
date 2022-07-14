import React from 'react'
import './hero-section.css'
import Hero from '../hero/Hero'


const HeroSection = () => {
  return (
    <>
       <section className='hero-section' id='/'>
        <div className='container'  >
            <div className='row hero_row'>
              <Hero/>
            </div>
        </div>
       </section> 
    </>
  )
}

export default HeroSection