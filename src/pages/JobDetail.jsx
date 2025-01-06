import React, { useEffect, useState } from "react";
import { getJobDetail } from "../Api";
import JobDetailHero from "../components/JobDetailHero";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import SocialShare from "../components/SocialShare";
function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const APP_URL = import.meta.env.VITE_APP_URI;

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const data = await getJobDetail(id);
        console.log(data);
        setJob(data.data[0]);
      } catch (error) {
        console.error("Error fetching job detail:", error);
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };
    fetchJobDetail();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!job) {
    return <div>No job detail available.</div>;
  }

  return (
    <div>
      <JobDetailHero job={job} />

      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-30">
            <div className="col-lg-7 col-xl-8">
              <div className="rts__job__details">
                <div id="description" className="mb-30">
                  <h6 className="fw-semibold mb-20">Job Description</h6>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked(job.job_description),
                    }}
                  />{" "}
                </div>

                <div className="d-flex flex-wrap gap-4 mt-40 mb-60">
                  <a
                    href={job.apply_link}
                    target="_blank"
                    class="rts__btn apply__btn fw-bold"
                  >
                    Apply This Position
                  </a>
                  <div className="d-flex gap-3 align-items-center">
                    <span className="h6 fw-semibold">Share</span>
                    <div className="rts__social d-flex gap-3">
                      <SocialShare />                       
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4 d-flex flex-column gap-40">
              <div class="company__card">
                <h5 class="company__name mt-20">{job.dept}</h5>
                <a
                  href={job.apply_link}
                  target="_blank"
                  class="rts__btn apply__btn mt-40"
                >
                  Apply This Position
                </a>
              </div>
              {/* <div class="company__card">
                <p>
                  Sign in with your LinkedIn account{" "}
                  <i className="fab fa-linkedin"></i> to get an automatically
                  generated cover letter for this job.
                </p>
                <a href="#" class="rts__btn apply__btn mt-20">
                  Get a Cover Letter
                </a>
              </div> */}
              <div className="job__overview">
                <h6 className="fw-semibold mb-20">Job Overview</h6>
                <div className="job__overview__content">
                  <ul>
                    <li className="d-flex flex-wrap gap-0 gap-sm-0 ">
                      <span className="left-text"> Type</span>
                      <span className="left-text">
                        : {job.recruitment_type}
                      </span>
                    </li>
                    <li className="d-flex flex-wrap gap-3 gap-sm-0 ">
                      <span className="left-text"> Job Posted</span>
                      <span className="left-text">
                        :{" "}
                        {new Date(job.start_date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </span>
                    </li>
                    <li className="d-flex flex-wrap gap-3 gap-sm-0 ">
                      <span className="left-text"> Job Deadline</span>
                      <span className="left-text">
                        :{" "}
                        {new Date(job.end_date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </span>
                    </li>
                    <li className="d-flex flex-wrap gap-1 gap-sm-0 ">
                      <span className="left-text"> Job Category</span>
                      <span className="left-text">: {job.category_code}</span>
                    </li>
                    <li className="d-flex flex-wrap gap-3 gap-sm-0 ">
                    <span className="left-text"> Duty Station: &nbsp;</span>

                      <span className="left-text"> {job.duty_station}</span>
                    </li>
                    {/* <li className="d-flex flex-wrap gap-3 gap-sm-0 ">
                      <span className="left-text"> Language: &nbsp;</span>
                      <span className="left-text">{job.language}</span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
