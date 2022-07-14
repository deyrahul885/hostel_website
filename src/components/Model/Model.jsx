import React from 'react'
import './model.css'
import {BsTelephoneFill} from 'react-icons/bs'
import {RiWhatsappLine} from 'react-icons/ri'
import {Link} from 'react-scroll'


const Model = () => {
  return (
    <>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Contact Us</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className= 'modal-text'>
            <BsTelephoneFill className='call_icon'/>
            <span>8210231091</span>
          </div>
          <div className= 'modal-text'>
            <div className="col">
            <RiWhatsappLine className='call_icon' />
            <span>8210231091</span>
            </div>
          </div>
        </div>
        {/* <div className="modal-footer">
            <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn"><Link to="contact" >View more</Link></button>
        </div> */}
        </div>
    </div>
    </div>
    </>
  )
}

export default Model