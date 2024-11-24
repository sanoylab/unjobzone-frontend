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
    fetchJobs(currentPage);
  }, [currentPage]);

  const fetchJobs = async (page) => {
    try {
      const data = await getJobs(page, 10,isHome);
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

  return (
    isHome ? (
      <div className="rts__section pb-120 overflow-hidden">
      <div className="container">
          <div className="row justify-content-center mb-50 position-relative mtn-1">
              <div className="col-lg-6">
                  <div className="rts__section__content wow animated fadeInUp text-center">
                      <h3 className="rts__section__title mb-3">There Are More Then 1000+ Jobs in UN JobZone</h3>
                      <p className="rts__section__desc">From entry-level positions to senior roles browse through.</p>
                  </div>
              </div>
              
          </div>
          <div className="row g-30">
  
            {jobs.map((job) => (
              <ThumbnailJob key = {job.id}    
              id = {job.id}       
              end_date = {job.end_date}
              duty_station = {job.duty_station}
              recruitment_type = {job.recruitment_type}
              job_title = {job.job_title}
              dept = {job.dept}
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

    )
    
  );
}
export default Jobs;
