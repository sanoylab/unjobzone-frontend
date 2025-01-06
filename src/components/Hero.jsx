import React from 'react'
import { Link } from 'react-router-dom'
function Hero({title}) {
  return (
    <div className="rts__section breadcrumb__background">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 position-relative d-flex justify-content-between align-items-center">
                <div className="breadcrumb__area max-content breadcrumb__padding z-2">
                    <h5 className="breadcrumb-title h3 mb-3" style={{color: "white"}}>{title}</h5>
                                   
                </div>
                <div className="breadcrumb__area__shape d-flex gap-4 justify-content-end align-items-center">
                    <div className="shape__one common">
                        <img src="assets/img/breadcrumb/shape-1.svg" alt="" />
                    </div>
                    <div className="shape__two common">
                        <img src="assets/img/breadcrumb/shape-2.svg" alt="" />
                    </div>
                    <div className="shape__three common">
                        <img src="assets/img/breadcrumb/shape-3.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero