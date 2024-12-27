import React from "react";
import { Link } from "react-router-dom";

const ThumbnailJob = ({
  id,
  end_date,
  duty_station,
  recruitment_type,
  job_title,
  dept,
  jl,
  logo,
}) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="rts__job__card style__six" style={{ minHeight: "420px" }}>
        <div className="d-flex align-items-center flex-wrap justify-content-between">
          <div className="company__icon">
            <img src={logo} alt="" />
          </div>
          <div className="featured__option">
            
            <span style={{ color: new Date(end_date).toDateString() === new Date().toDateString() ? 'red' : 'inherit' }}>
            <i className="fa-light fa-clock"></i>{" "}&nbsp;

              {new Date(end_date).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
        <div className="d-flex gap-3 mt-4 flex-wrap">
          <div className="d-flex gap-2 align-items-center font-sm">
            <i className="fa-light fa-location-dot"></i> {duty_station}
          </div>
          <div className="d-flex gap-2 align-items-center font-sm">
            <i className="fa-light fa-briefcase"></i>
            {recruitment_type}
          </div>
        </div>
        <div className="font-20 fw-semibold job__title mt-3 mb-2">
          <Link to={`/job/${id}`} className="job__title">
            {job_title.length > 100
              ? `${job_title.substring(0, 100)}...`
              : job_title}
          </Link>
        </div>
        {jl && (
          <div>
            <i className="fa-light rt-briefcase"></i> {jl}
          </div>
        )}
        <p className="font-sm">{dept}</p>
      </div>
    </div>
  );
};

export default ThumbnailJob;
