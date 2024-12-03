import React from 'react'
import { Link } from 'react-router-dom'

const OrganizationCard = ({image, title, totalJobs}) => {
  return (

    <div class="rts__job__card rounded-2 style__four organization-card" >
        <div class="company__icon mx-auto rounded-0">
            <img src={image} alt="" />
        </div>
        <div class="h6 job__title mt-3 mb-10">
            <Link to={`/jobs?dept=${encodeURIComponent(title)}`} aria-label="job">
            {title}
            </Link>
        </div>
        <div className="card-footer">
        <Link to={`/jobs?dept=${encodeURIComponent(title)}`} class="rts__btn fill__btn rounded-2 job-link">View {totalJobs} jobs</Link>

      </div>
        
    </div>












    
  )
}

export default OrganizationCard