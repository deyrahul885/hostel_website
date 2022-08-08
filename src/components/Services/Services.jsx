import React from 'react'
import {Link} from 'react-scroll'
import './services.css'
import singleBed from '../../assets/single_bed.jpg'
import dblBed from '../../assets/dbl_bed.jpg'
import fourBed from '../../assets/4-bed.webp'
import foodIcon from '../../assets/icon1.png'
import cameraIcon from '../../assets/icon-camera.png'
import diningIcon from '../../assets/dining-icon.png'
import electricityIcon from '../../assets/electricity-icon.png'
import waterIcon from '../../assets/water-icon.png'
import bedIcon from '../../assets/bed-icon.png'
import wifi from '../../assets/wifi-icon.png'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const Services = () => {
  return (
    <>
    <section className="service-section" id='services'>
        <div className="container">
            <div className="title">
            <h2>Services And Facilities</h2>
            </div>
            <div className='service_content'>
            <h3>Basic Safety and Security Features <img src={cameraIcon} className="icon8" alt="..."/></h3>
            <p>
              For the safety purpose the whole building is covered with security cameras.
            </p>
            <h3>Lodging and Fooding <img src={foodIcon} className="icon8" alt="..."/></h3>
            <p>
              We take care of our students and so along with the lodging we also provide healthy and hygenic food.<br/>
              We provide foods for <strong>Breakfast, Lunch & Dinner</strong>.
            </p>
            <h3>Comman Dinning Room <img src={diningIcon} className="icon8" alt="..."/></h3>
            <p>
              We provide common dinning area , where they can have their breakfast , lunch and dinner.
              And spent some time to create memories.
            </p>
            <h3>Types of Room Available <img src={bedIcon} className="icon8" alt="..."/></h3>
            <div className='row' style={{paddingBottom:'30px'}}>
              <div className="col-lg-4 col-sm-6 card-wrapper">
              <div className="card">
              <img src={singleBed} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Single Bed Room</h5>
                  <p className="card-text">This room consist of one single bed along with attached bathroom.</p>
                  <Link to="services" className="btn">Know more...</Link>
                </div>
              </div>
              </div>
              <div className="col-lg-4 col-sm-6 card-wrapper">
                <div className="card">
                <img src={dblBed} class="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Double Bed Room</h5>
                    <p className="card-text">This room consist of two single beds along with attached bathroom.</p>
                    <Link to="services" className="btn">Know more...</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 card-wrapper">
              <div className="card">
              <img src={fourBed} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Four Bed Room</h5>
                  <p className="card-text">This room consist of four single beds along with attached bathroom.</p>
                  <Link to="services" className="btn">Know more...</Link>
                </div>
              </div> 
             </div>
            </div>
            <h3>Wifi And Other Facilities</h3>
            <p>We also provide free WiFi <img src={wifi} className="icon8" alt="..."/> facility in the whole building.</p>
            <p>And you will also get 24 * 7  Electricity <img src={electricityIcon} className="icon8" alt="..."/> and Water Supply<img src={waterIcon} className="icon8" alt="..."/>.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services