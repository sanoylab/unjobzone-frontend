import React from 'react'
import { Link } from 'react-router-dom'

const ListJob = ({ id, end_date,duty_station, recruitment_type,job_title, dept}) => {
  return (

<div className="col-lg-12">
                            <div className="rts__job__card__big style__gradient__two 
                            flex-wrap d-flex justify-content-between align-items-center gap-3">
                                <div className="d-flex gap-3 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-center">
                                    <div className="organization__logo mr-5">
                                        <img src="./assets/img/unfpa.png" alt={dept} />
                                    </div>
                                    <div className="job__meta">
                                        <div className="d-flex align-items-center gap-3 job_title">
                                            <Link to={`/job-detail/${id}`} className="job__title h6">{job_title}</Link>
                                        </div>
                                        <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
                                        <div className="d-flex gap-2 align-items-center">
                                        <i className="fa-light rt-briefcase"></i> {dept}
                                            </div>
                                            <div className="d-flex gap-2 align-items-center">
                                                <i className="fa-light fa-location-dot"></i> {duty_station}
                                            </div>
                                            {/* <div className="d-flex gap-2 align-items-center">
                                                <i className="fa-light rt-briefcase"></i> {recruitment_type}
                                            </div> */}
                                            <div className="d-flex gap-2 align-items-center">
                                                <i className="fa-light fa-clock"></i> {new Date(end_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex gap-4 flex-wrap align-items-center">
                                  
                                    <div className="d-flex gap-3 flex-wrap">
                                        
                                        <button className="apply__btn">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>










  )
}

export default ListJob