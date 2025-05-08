import React from "react";
import { Link } from "react-router-dom";
import un_logo from '../assets/img/un-logo.png';
import who_logo from '../assets/img/who-logo.png';
import unicef_logo from '../assets/img/unicef-logo.png';
import unhcr_logo from '../assets/img/unhcr-logo.png';
import unfpa_logo from '../assets/img/unfpa.png';
import unaids_logo from '../assets/img/unaids-logo.png';

const APP_URL = import.meta.env.VITE_APP_URI;

function JobDetailHero({ job }) {
  return (
    <section style={{
      width: '100%',
      background: 'linear-gradient(100deg, #f8fafc 0%, #edf2f7 100%)',
      position: 'relative',
      overflow: 'visible',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      padding: '2.2rem 1rem 2.4rem',
      minHeight: '200px',
      boxShadow: 'inset 0 -1px 0 0 rgba(0,0,0,0.05)',
      marginBottom: '20px',
    }}>
      {/* Simple accent line */}
      <div style={{
        position: 'absolute',
        left: '0',
        top: '50%',
        width: '15%',
        height: '2px',
        background: 'linear-gradient(90deg, #3182ce 0%, transparent 100%)',
        zIndex: 0,
      }} />
      
      {/* Scattered UN Agency Logos */}
      <img src={un_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '5%', top: '20%', width: '60px', height: '60px', opacity: 0.1, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo1 14s ease-in-out infinite alternate' }} />
      <img src={who_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '82%', top: '15%', width: '65px', height: '65px', opacity: 0.1, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo2 16s ease-in-out infinite alternate' }} />
      <img src={unicef_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '12%', top: '72%', width: '62px', height: '62px', opacity: 0.09, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo3 18s ease-in-out infinite alternate' }} />
      <img src={unhcr_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '74%', top: '68%', width: '58px', height: '58px', opacity: 0.1, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo4 15s ease-in-out infinite alternate' }} />
      <img src={unfpa_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '25%', top: '30%', width: '55px', height: '55px', opacity: 0.09, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo5 17s ease-in-out infinite alternate' }} />
      <img src={unaids_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '66%', top: '24%', width: '60px', height: '60px', opacity: 0.1, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo6 19s ease-in-out infinite alternate' }} />
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '1.8rem',
        borderRadius: '0.75rem',
        background: 'white',
        boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
        animation: 'fadeInUpHero 0.8s ease-out both',
        gap: '24px',
      }}>
        {/* Organization logo */}
        <div style={{
          width: '120px',
          height: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
        
        {/* Job information */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            color: '#1B4B82',
            lineHeight: 1.3,
            margin: 0,
            maxWidth: '100%',
            textWrap: 'balance',
            letterSpacing: '-0.3px',
          }}>
            {job.job_title}
          </h2>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.97rem',
            color: '#4A5568',
          }}>
            {/* Location */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <i className="fa-light fa-location-dot" style={{ color: '#1B4B82', fontSize: '14px' }}></i>
              <span style={{ fontWeight: 500 }}>{job.duty_station}</span>
            </div>
            
            {/* Job category */}
            {job.jc && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <i className="fa-light rt-briefcase" style={{ color: '#1B4B82', fontSize: '14px' }}></i>
                <span style={{ fontWeight: 500 }}>{job.jc}</span>
              </div>
            )}
            
            {/* Job level */}
            {job.job_level && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <i className="fa-light fa-layer-group" style={{ color: '#1B4B82', fontSize: '14px' }}></i>
                <span style={{ fontWeight: 500 }}>{job.job_level}</span>
              </div>
            )}
            
            {/* Job code title */}
            {job.job_code_title && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <i className="fa-light fa-hashtag" style={{ color: '#1B4B82', fontSize: '14px' }}></i>
                <span style={{ fontWeight: 500 }}>{job.job_code_title}</span>
              </div>
            )}
            
            {/* JL */}
            {job.jl && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <i className="fa-light fa-chart-simple" style={{ color: '#1B4B82', fontSize: '14px' }}></i>
                <span style={{ fontWeight: 500 }}>{job.jl}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Simple accent line (right side) */}
      <div style={{
        position: 'absolute',
        right: '0',
        top: '60%',
        width: '15%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, #3182ce 100%)',
        zIndex: 0,
      }} />
      
      <style>{`
        @keyframes fadeInUpHero {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatLogo1 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        @keyframes floatLogo2 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        @keyframes floatLogo3 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-7px); }
        }
        @keyframes floatLogo4 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-9px); }
        }
        @keyframes floatLogo5 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-6px); }
        }
        @keyframes floatLogo6 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}

export default JobDetailHero;
