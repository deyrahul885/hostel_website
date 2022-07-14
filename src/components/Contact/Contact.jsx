import React from 'react'
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
                <h4><strong>Address:</strong><br/>
                    Near Red Cross<br/>
                    Luby Circular Road,<br/>
                    Dhanbad,<br/>
                    Jharkhand
                </h4>
                <h4><strong>Contact:</strong><br/>
                    <bold>8210231091</bold><br/>
                    <bold>8210231091</bold>
                </h4>
              </div>
              <div className="col-sm-6 address_map">
              <iframe className='map_location' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1542.2575787695503!2d86.43387103208447!3d23.805232763406988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1657526464323!5m2!1sen!2sin" 
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact