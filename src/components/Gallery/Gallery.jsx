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
            <div>
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
                            <div className="col-lg-4 col-sm-6">
                             <div className="card">
                              <img src={image} class="card-img-top" alt="..."/>
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
            {/* <div>
              <h2>College And Library</h2>
              <div className="row" style={{paddingBottom:'30px'}}>
              <div className="col">
              <div className="card">
              <img src={sslnt} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">SSLNT College</h5>
                  <div>
                  <p className="card-text"><strong>Distance:</strong> 1 km</p>
                  </div>
                </div>
              </div>
              </div>
              <div className="col">
              <div className="card">
              <img src={pkRoy} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">SSLNT College</h5>
                  <div>
                  <p className="card-text"><strong>Distance:</strong> 1 km</p>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div>
              <h2>Parks And Entertainment</h2>
              <div className="row" style={{paddingBottom:'30px'}}>
              <div className="col">
              <div className="card">
              <img src={Park1} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Birsa Munda Park</h5>
                  <div>
                  <p className="card-text"><strong>Distance:</strong> 1 km</p>
                  </div>
                </div>
              </div>
              </div>
              <div className="col">
              <div className="card">
              <img src={Park2} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">BekarBand Park</h5>
                  <div>
                  <p className="card-text"><strong>Distance:</strong> 1 km</p>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div> */}
        </div>
    </section>
    </>
  )
}

export default Gallery