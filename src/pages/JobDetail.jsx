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
        setJob(data.data[0]);
      } catch (error) {
        console.error("Error fetching job detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetail();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!job) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '70vh',
        flexDirection: 'column',
        gap: '16px',
        color: '#4A5568'
      }}>
        <i className="fa-light fa-file-circle-question" style={{ fontSize: '48px', color: '#3182CE' }}></i>
        <h3>No job detail available</h3>
        <p>The job you're looking for could not be found.</p>
      </div>
    );
  }

  // Calculate days remaining until deadline
  const today = new Date();
  const endDateObj = new Date(job.end_date);
  const daysRemaining = Math.ceil((endDateObj - today) / (1000 * 60 * 60 * 24));
  const isEndingSoon = daysRemaining <= 3 && daysRemaining >= 0;
  const hasExpired = daysRemaining < 0;

  return (
    <div style={{ background: '#F8FAFC' }}>
      <JobDetailHero job={job} />

      <div style={{ 
        padding: '40px 0 60px', 
        position: 'relative'
      }}>
        <div className="container">
          <div className="row g-30">
            {/* Main content area */}
            <div className="col-lg-7 col-xl-8">
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                padding: '28px 32px',
                marginBottom: '24px',
                border: '1px solid rgba(226, 232, 240, 0.6)',
              }}>
                {/* Job Description */}
                <div style={{ marginBottom: '30px' }}>
                  <h2 style={{ 
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    color: '#2D3748',
                    marginBottom: '20px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid #EDF2F7' 
                  }}>
                    Job Description
                  </h2>
                  <div 
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#4A5568'
                    }}
                    dangerouslySetInnerHTML={{
                      __html: marked(job.job_description),
                    }}
                  />
                </div>

                {/* Apply and Share */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '24px',
                  marginTop: '30px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 0 0',
                  borderTop: '1px solid #EDF2F7'
                }}>
                  <a
                    href={job.apply_link}
                    target="_blank"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px 24px',
                      backgroundColor: hasExpired ? '#A0AEC0' : isEndingSoon ? '#DD6B20' : '#3182CE',
                      color: 'white',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                      cursor: hasExpired ? 'not-allowed' : 'pointer',
                      gap: '8px'
                    }}
                  >
                    {hasExpired ? (
                      <>
                        <i className="fa-light fa-clock-rotate-left"></i>
                        <span>Application Closed</span>
                      </>
                    ) : (
                      <>
                        <i className="fa-light fa-paper-plane"></i>
                        <span>Apply for this Position</span>
                      </>
                    )}
                  </a>
                  
                  <div style={{ 
                    display: 'flex', 
                    gap: '12px',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#4A5568'
                    }}>Share:</span>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <SocialShare />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-5 col-xl-4">
              {/* Organization card */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                padding: '24px',
                marginBottom: '24px',
                border: '1px solid rgba(226, 232, 240, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}>
                {/* Organization Logo */}
                <div style={{
                  width: '120px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <img 
                    src={`${APP_URL}/assets/logo/${job.logo}`}
                    alt={job.dept}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  color: '#2D3748',
                  margin: '0 0 20px 0',
                }}>{job.dept}</h3>
                
                {!hasExpired && (
                  <a
                    href={job.apply_link}
                    target="_blank"
                    style={{
                      width: '100%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px 16px',
                      backgroundColor: isEndingSoon ? '#DD6B20' : '#3182CE',
                      color: 'white',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      gap: '8px'
                    }}
                  >
                    <i className="fa-light fa-paper-plane"></i>
                    <span>Apply Now</span>
                  </a>
                )}
              </div>
              
              {/* Job Overview */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                padding: '24px',
                border: '1px solid rgba(226, 232, 240, 0.6)',
              }}>
                <h2 style={{ 
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  color: '#2D3748',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #EDF2F7' 
                }}>
                  Job Overview
                </h2>
                <div>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px'
                  }}>
                    <li style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: '#4A5568',
                      fontSize: '0.95rem'
                    }}>
                      <i className="fa-light fa-briefcase" style={{ 
                        color: '#3182CE',
                        fontSize: '16px',
                        width: '20px',
                        textAlign: 'center'
                      }}></i>
                      <div>
                        <span style={{ fontWeight: 500 }}>Type: </span>
                        <span>{job.recruitment_type}</span>
                      </div>
                    </li>
                    <li style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: '#4A5568',
                      fontSize: '0.95rem'
                    }}>
                      <i className="fa-light fa-calendar-plus" style={{ 
                        color: '#3182CE',
                        fontSize: '16px',
                        width: '20px',
                        textAlign: 'center'
                      }}></i>
                      <div>
                        <span style={{ fontWeight: 500 }}>Posted: </span>
                        <span>
                          {new Date(job.start_date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </li>
                    <li style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: hasExpired ? '#E53E3E' : isEndingSoon ? '#DD6B20' : '#4A5568',
                      fontSize: '0.95rem'
                    }}>
                      <i className="fa-light fa-calendar-clock" style={{ 
                        color: hasExpired ? '#E53E3E' : isEndingSoon ? '#DD6B20' : '#3182CE',
                        fontSize: '16px',
                        width: '20px',
                        textAlign: 'center'
                      }}></i>
                      <div>
                        <span style={{ fontWeight: 500 }}>Deadline: </span>
                        <span>
                          {new Date(job.end_date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          })}
                          {hasExpired ? (
                            <span style={{ 
                              backgroundColor: 'rgba(229, 62, 62, 0.08)',
                              fontSize: '0.75rem',
                              padding: '2px 8px',
                              borderRadius: '12px',
                              marginLeft: '8px',
                              color: '#E53E3E',
                              fontWeight: 500
                            }}>Expired</span>
                          ) : isEndingSoon ? (
                            <span style={{ 
                              backgroundColor: 'rgba(221, 107, 32, 0.08)',
                              fontSize: '0.75rem',
                              padding: '2px 8px',
                              borderRadius: '12px',
                              marginLeft: '8px',
                              color: '#DD6B20',
                              fontWeight: 500
                            }}>Ending Soon</span>
                          ) : null}
                        </span>
                      </div>
                    </li>
                    <li style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: '#4A5568',
                      fontSize: '0.95rem'
                    }}>
                      <i className="fa-light fa-folder" style={{ 
                        color: '#3182CE',
                        fontSize: '16px',
                        width: '20px',
                        textAlign: 'center'
                      }}></i>
                      <div>
                        <span style={{ fontWeight: 500 }}>Category: </span>
                        <span>{job.category_code}</span>
                      </div>
                    </li>
                    <li style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: '#4A5568',
                      fontSize: '0.95rem'
                    }}>
                      <i className="fa-light fa-location-dot" style={{ 
                        color: '#3182CE',
                        fontSize: '16px',
                        width: '20px',
                        textAlign: 'center'
                      }}></i>
                      <div>
                        <span style={{ fontWeight: 500 }}>Duty Station: </span>
                        <span>{job.duty_station}</span>
                      </div>
                    </li>
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
