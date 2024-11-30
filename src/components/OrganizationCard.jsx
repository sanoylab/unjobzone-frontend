import React from 'react'
import { Link } from 'react-router-dom'
const OrganizationCard = ({image, title, totalJobs}) => {
  return (

<div className="col-xl-4 col-lg-4 col-md-6" >
      <div class="rts__job__card rounded-2 style__four" style={{ height: '390px' }}>
        <div class="mx-auto rounded-0">
            <img src={image} alt="" style={{height: '130px'}} />
        </div>
        <div class="h6 job__title mt-3 mb-2">
            <Link to={`/jobs?dept=${encodeURIComponent(title)}`} aria-label="job">
            {title}
            </Link>
        </div>
       
        
        <Link to={`/jobs?dept=${encodeURIComponent(title)}`} class="rts__btn fill__btn rounded-2">{totalJobs} open jobs </Link>
    </div>
</div>












    
  )
}

export default OrganizationCard