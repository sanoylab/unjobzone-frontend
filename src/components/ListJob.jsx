import React from "react";
import { Link } from "react-router-dom";

const ListJob = ({
  id,
  end_date,
  duty_station,
  recruitment_type,
  job_title,
  jl,
  dept,
  logo,
}) => {
  // Calculate days remaining until end date
  const today = new Date();
  const endDateObj = new Date(end_date);
  const daysRemaining = Math.ceil((endDateObj - today) / (1000 * 60 * 60 * 24));
  
  // Format end date
  const formattedEndDate = endDateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  // Check if job is ending soon (within 3 days)
  const isEndingSoon = daysRemaining <= 3 && daysRemaining >= 0;
  
  // Check if job has expired
  const hasExpired = daysRemaining < 0;

  return (
    <div className="col-lg-12" style={{ paddingRight: '0px', marginBottom: '16px' }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        padding: '20px 24px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        border: '1px solid rgba(226, 232, 240, 0.6)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
      }}>
        {/* Left accent bar - UN blue */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          background: 'linear-gradient(180deg, #3182CE 0%, #2B6CB0 100%)',
        }}></div>

        {/* Logo and job details */}
        <div style={{
          display: 'flex', 
          alignItems: 'center', 
          flexGrow: 1,
          gap: '20px',
          flexWrap: 'wrap',
        }}>
          {/* Organization logo - simplified and bigger */}
          <div style={{
            width: '90px',
            height: '70px',
            minWidth: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '8px',
          }}>
            <img 
              src={logo} 
              alt={dept} 
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Job information container */}
          <div style={{ flex: 1 }}>
            {/* Job title */}
            <Link 
              to={`/job/${id}`} 
              style={{
                fontSize: '1.18rem',
                fontWeight: 800,
                color: '#1B4B82',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '8px',
                transition: 'color 0.2s ease',
                lineHeight: 1.25,
                letterSpacing: '-0.5px',
              }}
            >
              {job_title.length > 100 ? `${job_title.substring(0, 100)}...` : job_title}
            </Link>

            {/* Job details grid */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              fontSize: '0.97rem',
              color: '#4A5568',
            }}>
              {/* Department */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <i className="fa-light rt-briefcase" style={{ color: '#1B4B82', fontSize: '14px' }}></i>
                <span style={{ fontWeight: 500 }}>{dept}</span>
              </div>

              {/* Location */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <i className="fa-light fa-location-dot" style={{ color: '#1B4B82', fontSize: '14px' }}></i>
                <span style={{ fontWeight: 500 }}>{duty_station}</span>
              </div>

              {/* Job Level */}
              {jl && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <i className="fa-light fa-layer-group" style={{ color: '#1B4B82', fontSize: '14px' }}></i>
                  <span style={{ fontWeight: 500 }}>{jl}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right side - End date information */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          borderRadius: '8px',
          minWidth: '120px',
          textAlign: 'center',
        }}>
          {/* Deadline label */}
          <span style={{
            fontSize: '0.92rem',
            fontWeight: 500,
            color: '#718096',
            marginBottom: '4px',
          }}>
            Deadline
          </span>
          
          {/* Date display */}
          <span style={{
            fontSize: '0.98rem',
            fontWeight: 500, 
            color: hasExpired ? '#E53E3E' : isEndingSoon ? '#DD6B20' : '#1B4B82',
            whiteSpace: 'nowrap',
          }}>
            {formattedEndDate}
          </span>
          
          {/* Status indicator */}
          {hasExpired ? (
            <span style={{
              fontSize: '0.97rem',
              color: '#E53E3E',
              background: 'rgba(229, 62, 62, 0.1)',
              padding: '3px 10px',
              borderRadius: '2rem',
              marginTop: '6px',
              fontWeight: 600,
            }}>
              Expired
            </span>
          ) : isEndingSoon ? (
            <span style={{
              fontSize: '0.97rem',
              color: '#DD6B20',
              background: 'rgba(221, 107, 32, 0.1)',
              padding: '3px 10px',
              borderRadius: '2rem',
              marginTop: '6px',
              fontWeight: 600,
            }}>
              Ending Soon
            </span>
          ) : (
            <span style={{
              fontSize: '0.97rem',
              color: '#38A169',
              background: 'rgba(56, 161, 105, 0.1)',
              padding: '3px 10px',
              borderRadius: '2rem',
              marginTop: '6px',
              fontWeight: 600,
            }}>
              Active
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListJob;
