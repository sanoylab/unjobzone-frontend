import React from 'react'

const OrganizationCard = ({image, title, totalJobs}) => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
    <div className="single__cat style__six align-items-center d-flex gap-4">
      <div className="single__cat__icon">
        <img
          className="rounded-2"
          src={image}
          alt=""
        />
      </div>
      <div className="single__cat__link d-flex w-100 justify-content-between flex-wrap">
        <a href="job-list-2.html" aria-label="cat__label">
          {title}
        </a>
        <span>{totalJobs}+ Jobs</span>
      </div>
    </div>
  </div>
  )
}

export default OrganizationCard