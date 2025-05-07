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
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        className="modern-job-card"
        style={{
          background: 'rgba(255,255,255,0.65)',
          backdropFilter: 'blur(16px) saturate(180%)',
          borderRadius: '1.7rem',
          border: '1.5px solid rgba(27, 75, 130, 0.10)',
          boxShadow: '0 8px 32px rgba(27, 75, 130, 0.10)',
          padding: '2.1rem 1.5rem 1.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '390px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.32s cubic-bezier(.22,1,.36,1), box-shadow 0.32s cubic-bezier(.22,1,.36,1)',
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'translateY(-8px) scale(1.025)';
          e.currentTarget.style.boxShadow = '0 16px 48px 0 rgba(27, 142, 242, 0.18)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(27, 75, 130, 0.10)';
        }}
      >
        {/* Gradient accent bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '6px',
          background: 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)',
          borderTopLeftRadius: '1.7rem',
          borderTopRightRadius: '1.7rem',
          zIndex: 2,
        }} />
        <div className="d-flex align-items-center flex-wrap justify-content-between mb-3">
          <div style={{
            width: '96px',
            height: '96px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '0.5rem',
          }}>
            <img src={logo} alt="" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
          </div>
          <div className="featured__option" style={{ fontSize: '0.98rem', fontWeight: 500, color: '#1B4B82' }}>
            <i className="fa-light fa-clock"></i>{' '}
            <span style={{ color: new Date(end_date).toDateString() === new Date().toDateString() ? '#E53E3E' : '#1B4B82' }}>
              {new Date(end_date).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
        <div className="d-flex gap-2 mt-2 flex-wrap mb-2">
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(27, 142, 242, 0.10)',
            color: '#1B4B82',
            borderRadius: '2rem',
            padding: '0.32rem 1.1rem',
            fontSize: '0.97rem',
            fontWeight: 600,
            marginRight: '0.5rem',
            gap: '0.4rem',
          }}>
            <i className="fa-light fa-location-dot"></i> {duty_station}
          </span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(27, 75, 130, 0.10)',
            color: '#1B4B82',
            borderRadius: '2rem',
            padding: '0.32rem 1.1rem',
            fontSize: '0.97rem',
            fontWeight: 600,
            gap: '0.4rem',
          }}>
            <i className="fa-light fa-briefcase"></i> {recruitment_type}
          </span>
        </div>
        <div style={{
          fontSize: '1.18rem',
          fontWeight: 800,
          color: '#1B4B82',
          margin: '1.1rem 0 0.5rem 0',
          lineHeight: 1.25,
          letterSpacing: '-0.5px',
          minHeight: '2.5em',
        }}>
          <Link to={`/job/${id}`} className="job__title" style={{ color: '#1B4B82', textDecoration: 'none', transition: 'color 0.2s' }}>
            {job_title.length > 100 ? `${job_title.substring(0, 100)}...` : job_title}
          </Link>
        </div>
        {jl && (
          <div style={{ color: '#334E68', fontSize: '0.98rem', fontWeight: 500, marginBottom: '0.2rem' }}>
            <i className="fa-light rt-briefcase"></i> {jl}
          </div>
        )}
        <p style={{ color: '#4A5568', fontSize: '0.97rem', fontWeight: 500, margin: 0 }}>{dept}</p>
      </div>
      <style>{`
        .modern-job-card:hover .job__title {
          color: #1B8EF2 !important;
        }
      `}</style>
    </div>
  );
};

export default ThumbnailJob;
