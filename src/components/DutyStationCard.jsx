import React from 'react'
import { Link } from 'react-router-dom'
const DutyStationCard = ({title, totalJobs}) => {
  return (


    <div className="col-lg-3" >
                            <div className="rts__job__card__big style__gradient__two 
                            flex-wrap d-flex justify-content-between align-items-center gap-3" style={{minHeight: "150px"}}>
                                <div className="d-flex gap-3 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-center">
                                    
                                    <div className="job__meta">
                                        <div className="d-flex align-items-center gap-3 job_title">
                                            <Link to={`/jobs?duty_station=${encodeURIComponent(title)}`} className="job__title h6">{title}</Link>
                                        </div>
                                        <span>{totalJobs} Open Jobs</span>
                                    </div>
                                </div>
                             
                            </div>
                        </div>




















    
  )
}

export default DutyStationCard