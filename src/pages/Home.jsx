import React from 'react'
import About from '../components/About-us/About'
import HeroSection from '../components/Hero-section/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import Gallery from '../components/Gallery/Gallery'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Services/>
    <Gallery/>
    <Contact/>
    </>
  )
}

export default Home