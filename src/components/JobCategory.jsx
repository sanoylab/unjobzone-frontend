import React from 'react'

function JobCategory() {
  return (
    <div className="rts__section section__padding overflow-hidden">
    <div className="container">
      <div className="row justify-content-between mb-50 gap-4 position-relative ">
        <div className="col-xl-6 col-lg-10">
          <div className="rts__section__content text-start  wow animated fadeInUp">
            <h3 className="rts__section__title section__mb">
              Browse Job Category
            </h3>
            <p className="rts__section__desc">
              Looking for your next career opportunity. Look no further
            </p>
          </div>
        </div>
        <div className="rts__links d-flex max-content align-items-end">
          <a
            href="job-list-3.html"
            className="d-flex gap-2 align-items-center text-dark fw-medium"
          >
            View All<i className="fa-light fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="row g-30">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="single__cat style__six align-items-center d-flex gap-4">
            <div className="single__cat__icon">
              <img
                className="rounded-2"
                src="/src/assets/img/home-6/icon/marketing.svg"
                alt=""
              />
            </div>
            <div className="single__cat__link d-flex w-100 justify-content-between flex-wrap">
              <a href="job-list-2.html" aria-label="cat__label">
                Marketing
              </a>
              <span>130+ Jobs</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="single__cat style__six align-items-center d-flex gap-4">
            <div className="single__cat__icon">
              <img
                className="rounded-2"
                src="/src/assets/img/home-6/icon/development.svg"
                alt=""
              />
            </div>
            <div className="single__cat__link d-flex w-100 justify-content-between flex-wrap">
              <a href="job-list-2.html" aria-label="cat__label">
                Development
              </a>
              <span>130+ Jobs</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="single__cat style__six align-items-center d-flex gap-4">
            <div className="single__cat__icon">
              <img
                className="rounded-2"
                src="/src/assets/img/home-6/icon/design.svg"
                alt=""
              />
            </div>
            <div className="single__cat__link d-flex w-100 justify-content-between flex-wrap">
              <a href="job-list-2.html" aria-label="cat__label">
                Design & Art
              </a>
              <span>130+ Jobs</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="single__cat style__six align-items-center d-flex gap-4">
            <div className="single__cat__icon">
              <img
                className="rounded-2"
                src="/src/assets/img/home-6/icon/health.svg"
                alt=""
              />
            </div>
            <div className="single__cat__link d-flex w-100 justify-content-between flex-wrap">
              <a href="job-list-2.html" aria-label="cat__label">
                Health & Care
              </a>
              <span>130+ Jobs</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="single__cat style__six align-items-center d-flex gap-4">
            <div className="single__cat__icon">
              <img
                className="rounded-2"
                src="/src/assets/img/home-6/icon/icon.svg"
                alt=""
              />
            </div>
            <div className="single__cat__link d-flex w-100 justify-content-between flex-wrap">
              <a href="job-list-2.html" aria-label="cat__label">
                Accounting
              </a>
              <span>130+ Jobs</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="single__cat style__six align-items-center d-flex gap-4">
            <div className="single__cat__icon">
              <img
                className="rounded-2"
                src="/src/assets/img/home-6/icon/data.svg"
                alt=""
              />
            </div>
            <div className="single__cat__link d-flex w-100 justify-content-between flex-wrap">
              <a href="job-list-2.html" aria-label="cat__label">
                Data Science
              </a>
              <span>130+ Jobs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default JobCategory