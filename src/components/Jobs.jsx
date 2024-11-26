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
  const pageSize = 10; // Assuming the page size is 10

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get("page")) || 1;
    setCurrentPage(page);
  }, [location.search]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const duty_station = queryParams.get("duty_station");
    const dept = queryParams.get("dept");
    const recruitement_type = queryParams.get("recruitement_type");
    const start_date = queryParams.get("start_date");
    const end_date = queryParams.get("end_date");
    const jn = queryParams.get("jn");
    const jf = queryParams.get("jf");
    const jc = queryParams.get("jc");
    const jl = queryParams.get("jl");

    fetchJobs(currentPage, duty_station, dept, recruitement_type, start_date, end_date, jn, jf, jc, jl);
  }, [currentPage, location.search]);

  const fetchJobs = async (page, duty_station, dept, recruitement_type, start_date, end_date, jn, jf, jc, jl) => {
    try {
      setLoading(true);
      const data = await getJobs(page, 10, isHome, duty_station, dept, recruitement_type, start_date, end_date, jn, jf, jc, jl);
      setJobs(data.data); // Adjust according to your API response structure
      const totalRecords = data.totalRecords;
      setTotalPages(Math.ceil(totalRecords / pageSize));
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      navigate(`?page=${page}`);
    }
  };

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
              recruitment_type={job.recruitment_type}
              job_title={job.job_title}
              dept={job.dept}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="rts__pagination d-block mx-auto pt-60 max-content">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="row g-30">
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
                recruitment_type={job.recruitment_type}
                job_title={job.job_title}
                dept={job.dept}
              />
            ))}
          </>
        )}
      </div>
      <div className="rts__pagination d-block mx-auto pt-60 max-content">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default Jobs;