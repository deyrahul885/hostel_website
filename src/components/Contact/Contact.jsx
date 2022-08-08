import React from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {RiWhatsappLine} from 'react-icons/ri'
import './contact.css'

const Contact = () => {
  return (
    <>
    <section className="contact-section" id='contact'>
        <div className="container">
            <div className="title">
            <h2>Contact</h2> 
            </div>
            <div className="row">
              <div className="col-sm-6 address_text">
                <div>
                  <h2><strong>Address:</strong></h2>
                    <h4>Near Red Cross<br/>
                    Luby Circular Road,<br/>
                    Dhanbad,<br/>
                    Jharkhand</h4>
                </div>
                <div>
                  <h2><strong>Contact:</strong></h2>
                    <h4>
                      <span className='contact-icon'><BsTelephoneFill/></span><bold>620 1942 871</bold><br/>
                    
                      <span className='contact-icon'><RiWhatsappLine/></span><bold>620 1942 871</bold><br/>
                    </h4>
                </div>
              </div>
              <div className="col-sm-6 address_map">
              {/* <iframe className='map_location' id="frame1" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1542.2575787695503!2d86.43387103208447!3d23.805232763406988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1657526464323!5m2!1sen!2sin" 
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                <iframe className='map_location' id="frame1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4539777875334!2d86.43521821481629!3d23.802450584563804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd482a51dd67%3A0x5111a1cf44e5aef8!2sAnand%20Bhawan!5e0!3m2!1sen!2sin!4v1659155093273!5m2!1sen!2sin" width='600' height='450' style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact