import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import Pagination from "./Pagination";
import { getJobs } from "../Api";
import ListJob from "./ListJob";
import ThumbnailJob from "./ThumbnailJob";
import Spinner from "./Spinner";

// Placeholder for a large UN emblem or abstract graphic if chosen
const StatsGraphic = () => {
  return (
    <div style={{
      fontSize: '12rem', // Example size
      color: 'rgba(27, 75, 130, 0.05)', // Very faint UN Blue
      textAlign: 'center',
      lineHeight: 1,
      userSelect: 'none',
      // In a real scenario, use an SVG or a specific character
    }}>
      <i className="fas fa-globe-americas"></i> {/* Example Font Awesome icon */}
    </div>
  );
};

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

  if (isHome) {
    return (
      <section style={{
        background: 'transparent',
        padding: '6rem 0 4rem 0',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Faint animated UN globe in the background */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '0',
          transform: 'translateX(-50%)',
          zIndex: 0,
          opacity: 0.07,
          fontSize: '16rem',
          pointerEvents: 'none',
          width: '100%',
          textAlign: 'center',
          animation: 'floatSectionBlob 18s ease-in-out infinite',
        }}>
          <i className="fas fa-globe-africa"></i>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}>
            <h2 style={{
              fontSize: '2.3rem',
              fontWeight: 800,
              color: '#1B4B82',
              marginBottom: '0.5rem',
              letterSpacing: '-1px',
              background: 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Featured UN Jobs
            </h2>
            <p style={{
              fontSize: '1.13rem',
              color: '#334E68',
              margin: '0 auto',
              maxWidth: '540px',
              fontWeight: 500,
            }}>
              Explore a selection of the latest and most impactful opportunities from across the United Nations system.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {jobs.slice(0, 6).map((job) => (
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
          <div style={{ textAlign: 'center', marginTop: '2.8rem' }}>
            <Link to="/jobs" style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)',
              color: '#fff',
              padding: '1.15rem 3.2rem',
              borderRadius: '2.5rem',
              fontSize: '1.18rem',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(27, 75, 130, 0.13)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              letterSpacing: '-0.5px',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(27, 75, 130, 0.18)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(27, 75, 130, 0.13)';
            }}
            >
              Browse All Jobs
            </Link>
          </div>
        </div>
        <style>{`
          @keyframes floatSectionBlob {
            0%, 100% { transform: translateX(-50%) scale(1); }
            50% { transform: translateX(-50%) scale(1.08); }
          }
        `}</style>
      </section>
    );
  }

  return (
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