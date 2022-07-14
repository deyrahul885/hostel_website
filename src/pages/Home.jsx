import React from 'react'
import About from '../components/About-us/About'
import HeroSection from '../components/Hero-section/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import Gallery from '../components/Gallery/Gallery'
import Contact from '../components/Contact/Contact'
import Hero from '../components/hero/Hero'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Services/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home