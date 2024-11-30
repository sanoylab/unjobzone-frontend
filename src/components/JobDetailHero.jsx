import React from 'react'
import { Link } from 'react-router-dom'
function JobDetailHero({title, logo, duty_station, jn}) {
  return (

    <div className="rts__section breadcrumb__background">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 position-relative d-flex justify-content-between align-items-center">
                <div className="breadcrumb__area max-content breadcrumb__padding">
                    <div className="rts__job__card__big bg-transparent p-0 position-relative z-1 flex-wrap justify-content-between d-flex gap-4 align-items-center">
                        <div className="d-flex gap-4 align-items-center flex-md-row flex-column mx-auto mx-md-0">
                            <div className=" rounded-2 bg-white">
                                <img className="" src={logo} alt="" style={{width: '200px', height: 'auto'}} />
                            </div>
                            <div className="job__meta w-100 d-flex text-center text-md-start flex-column gap-2" style={{maxWidth: '850px'}}>
                                <div className="">
                                    <h3 className="job__title h3 mb-0">{title}</h3>
                                </div>
                                <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap mb-3 mt-2">
                                    <div className="d-flex gap-2 align-items-center">
                                        <i className="fa-light fa-location-dot"></i> {duty_station}
                                    </div>
                                    <div className="d-flex gap-2 align-items-center">
                                        <i className="fa-light rt-briefcase"></i> {jn}
                                    </div>
                                   
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb__apply max-content">
                        <a href="#" className="rts__btn apply__btn be-1 fill__btn">Get a cover letter</a>
                    </div>             
                </div>
                <div className="breadcrumb__area__shape d-flex gap-4 justify-content-end align-items-center">
                    <div className="shape__one common">
                       
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

export default JobDetailHero