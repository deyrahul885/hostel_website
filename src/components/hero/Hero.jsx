import React from 'react'
import './hero.css'
import Img1 from '../../assets/Img1.jpg'
import Img2 from '../../assets/Img2.jpg'
import Img4 from '../../assets/Img4.jpg'


const Hero = () => {
  return (
    <>
    <div className="carosoul_wrapper">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Img1} className="d-block w-100 bg-Img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Img4} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='middle-text'>
  <h2>Only for Girls</h2>
</div>
    </div>
    </>
  )
}

export default Hero