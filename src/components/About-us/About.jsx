import React from 'react'
import Imgg1 from '../../assets/Imgg1-min.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <section className='about-section' id='about'>
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h2 className='title'>About Us</h2>
                    <p>A hostel means simply a shared accommodation. 
                        Instead of staying in a private room with a private bathroom, you stay in a dorm room sharing the room with other people.
                        <br/>This hostel was founded by Dr Y Jha in the year 2009. <br/>
                        And the accomodation over here is Only for Girls.</p>
                        <span>Living in a hostel is an experience that makes you grow as a person.</span>
                              
                </div>
                <div className="col-sm-6">
                    <div className="about_img_wrapper">
                        <img src={Imgg1} className="about_img" alt=''  width='100%'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About