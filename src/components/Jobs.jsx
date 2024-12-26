import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Pagination from "./Pagination";
import { getJobs } from "../Api";
import ListJob from "./ListJob";
import ThumbnailJob from "./ThumbnailJob";
import Spinner from "./Spinner";

function Jobs({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const pageSize = 12; // Assuming the page size is 12

  const location = useLocation();
  const navigate = useNavigate();
  const APP_URL = import.meta.env.VITE_APP_URI;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get("page")) || 1;
    setCurrentPage(page);
  }, [location.search]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const duty_station = queryParams.get("duty_station");
    const dept = queryParams.get("dept");
    const job_title = queryParams.get("job_title");
    const recruitement_type = queryParams.get("recruitement_type");
    const start_date = queryParams.get("start_date");
    const end_date = queryParams.get("end_date");
    const jn = queryParams.get("jn");
    const jf = queryParams.get("jf");
    const jc = queryParams.get("jc");
    const jl = queryParams.get("jl");

    fetchJobs(currentPage, job_title, duty_station, dept, recruitement_type, start_date, end_date, jn, jf, jc, jl);
  }, [currentPage, location.search]);

  const fetchJobs = async (page, job_title, duty_station, dept, recruitement_type, start_date, end_date, jn, jf, jc, jl) => {
    try {
      setLoading(true);
      const data = await getJobs(page, pageSize, isHome, job_title, duty_station, dept, recruitement_type, start_date, end_date, jn, jf, jc, jl);
      console.log(data)
      setJobs(data.data); // Adjust according to your API response structure
      setTotalRecords(data.totalRecords);
      setTotalPages(Math.ceil(data.totalRecords / pageSize));
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("page", page);
      navigate(`?${queryParams.toString()}`);
    }
  };

  const startRecord = (currentPage - 1) * pageSize + 1;
  const endRecord = Math.min(currentPage * pageSize, totalRecords);
  const formattedTotalRecords = totalRecords.toLocaleString();

  return isHome ? (
    <div className="rts__section pb-120 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center mb-50 position-relative mtn-1">
          <div className="col-lg-6">
            <div className="rts__section__content wow animated fadeInUp text-center">
              <h3 className="rts__section__title mb-3">
                There Are More Then 1000+ Jobs in UN JobZone
              </h3>
              <p className="rts__section__desc">
                From entry-level positions to senior roles browse through.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-30">
          {jobs.map((job) => (
            <ThumbnailJob
              key={job.id}
              id={job.id}
              end_date={job.end_date}
              duty_station={job.duty_station}
              recruitment_type={job.recruitement_type}
              job_title={job.job_title}
              dept={job.dept}
              jl={job.jl}
              logo={`${APP_URL}/assets/logo/${job.logo}`}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="row g-30" style={{ paddingRight: "0px" }}>
        <div className="top__query mb-40 d-flex flex-wrap gap-4 gap-xl-0 justify-content-between align-items-center">
          <span className="text-dark font-20 fw-medium">
          Showing {startRecord}-{endRecord} of {formattedTotalRecords} results
          </span>
          <div className="d-flex flex-wrap align-items-center gap-4">
            <div className="d-flex align-items-center gap-3" id="nav-tab" role="tablist">
              <button className="rts__btn no__fill__btn list-style nav-link active" data-bs-toggle="tab" data-bs-target="#list"> <i className="rt-list"></i> List</button>
              <button className="rts__btn no__fill__btn grid-style nav-link" data-bs-toggle="tab" data-bs-target="#grid"> <i className="rt-hamburger"></i> Grid</button>
            </div>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane grid__style fade" role="tabpanel" id="grid">
            <div className="row g-30 mb-40">
              <div className="rts__pagination d-block mx-auto pt-60 max-content">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
            <div className="row g-30">
              {loading ? (
                <Spinner loading={loading} />
              ) : (
                <>
                  {jobs.map((job) => (
                    <ThumbnailJob
                      key={job.id}
                      id={job.id}
                      end_date={job.end_date}
                      duty_station={job.duty_station}
                      recruitment_type={job.recruitement_type}
                      job_title={job.job_title}
                      dept={job.dept}
                      jl={job.jl}
                      logo={`${APP_URL}/assets/logo/${job.logo}`}
                    />
                  ))}
                </>
              )}
            </div>
            <div className="row g-30">
              <div className="rts__pagination d-block mx-auto pt-60 max-content">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
          <div className="tab-pane fade show active list__style" role="tabpanel" id="list">
            <div className="row g-30">
              <div className="rts__pagination d-block mx-auto pt-60 max-content">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>

              {loading ? (
                <Spinner loading={loading} />
              ) : (
                <>
                  {jobs.map((job) => (
                    <ListJob
                      key={job.id}
                      id={job.id}
                      end_date={job.end_date}
                      duty_station={job.duty_station}
                      recruitment_type={job.recruitement_type}
                      job_title={job.job_title}
                      dept={job.dept}
                      jl={job.jl}
                      logo={`${APP_URL}/assets/logo/${job.logo}`}
                    />
                  ))}
                </>
              )}
              <div className="rts__pagination d-block mx-auto pt-60 max-content">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;