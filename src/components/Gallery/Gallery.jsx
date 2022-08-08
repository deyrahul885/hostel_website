import React from 'react'
import places from './galleryDB'
import './gallery.css'


const Gallery = () => {
  return (
    <>
    <section className="gallery-section" id='gallery'>
        <div className="container">
            <div className="title">
            <h2>Near By Places</h2>
            </div>
            <div className='top-title'>
            {
                places.map((item)=>{
                  const[{type}] = [item]
                  return(
                    <>
                    <h2>{type}</h2>
                    <div className="row" style={{paddingBottom:'30px'}}>
                        {
                          item.details.map((detail)=>{
                            const[{name,distance,image}] = [detail]

                            return(
                            <>
                            <div className="col-lg-3 col-sm-6">
                             <div className="card gallery_card mb-3">
                              <img src={image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">{name}</h5>
                                  <div>
                                  <p className="card-text"><strong>Distance:</strong>{distance} km</p>
                                  </div>
                                </div>
                                </div>
                              </div> 
                            </>
                            )
                          })
                        }
                        </div>
                    </>
                  )
                })
              }
            </div>
        </div>
    </section>
    </>
  )
}

export default Gallery