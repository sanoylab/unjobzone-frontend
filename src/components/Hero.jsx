import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from "../contexts/ThemeContext";
import un_logo from '../assets/img/un-logo.png';
import who_logo from '../assets/img/who-logo.png';
import unicef_logo from '../assets/img/unicef-logo.png';
import unhcr_logo from '../assets/img/unhcr-logo.png';
import unfpa_logo from '../assets/img/unfpa.png';
import unaids_logo from '../assets/img/unaids-logo.png';

function Hero({ title, subtitle }) {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <section style={{
      width: '100%',
      background: darkMode ? '#121212' : 'linear-gradient(100deg, #f8fafc 0%, #edf2f7 100%)',
      position: 'relative',
      overflow: 'visible',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      padding: '1.8rem 1rem 2rem',
      minHeight: '160px',
      maxHeight: '240px',
      boxShadow: darkMode ? 'inset 0 -1px 0 0 rgba(255,255,255,0.05)' : 'inset 0 -1px 0 0 rgba(0,0,0,0.05)',
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
      <img src={un_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '5%', top: '20%', width: '60px', height: '60px', opacity: darkMode ? 0.05 : 0.1, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo1 14s ease-in-out infinite alternate' }} />
      <img src={who_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '82%', top: '15%', width: '65px', height: '65px', opacity: darkMode ? 0.05 : 0.1, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo2 16s ease-in-out infinite alternate' }} />
      <img src={unicef_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '12%', top: '72%', width: '62px', height: '62px', opacity: darkMode ? 0.04 : 0.09, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo3 18s ease-in-out infinite alternate' }} />
      <img src={unhcr_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '74%', top: '68%', width: '58px', height: '58px', opacity: darkMode ? 0.05 : 0.1, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo4 15s ease-in-out infinite alternate' }} />
      <img src={unfpa_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '25%', top: '30%', width: '55px', height: '55px', opacity: darkMode ? 0.04 : 0.09, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo5 17s ease-in-out infinite alternate' }} />
      <img src={unaids_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '66%', top: '24%', width: '60px', height: '60px', opacity: darkMode ? 0.05 : 0.1, zIndex: 0, filter: 'grayscale(60%) contrast(70%) brightness(1.1)', objectFit: 'contain', animation: 'floatLogo6 19s ease-in-out infinite alternate' }} />
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '700px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        background: darkMode ? '#1f1f1f' : 'white',
        boxShadow: darkMode ? '0 1px 2px rgba(0,0,0,0.2)' : '0 1px 2px rgba(0,0,0,0.06)',
        textAlign: 'center',
        animation: 'fadeInUpHero 0.8s ease-out both',
      }}>
        <div
          style={{
            fontSize: '2rem',
            fontWeight: 600,
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            color: darkMode ? '#e4e4e4' : '#2A4365',
            letterSpacing: '0.4px',
            textTransform: 'none',
            marginBottom: subtitle ? '0.35rem' : '0',
            lineHeight: 1.2,
            paddingTop: '0',
            borderTop: 'none',
            display: 'block',
          }}
        >
          {title}
        </div>
        {subtitle && (
          <p style={{
            fontSize: '0.92rem',
            color: darkMode ? '#b0b0b0' : '#4A5568',
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.5,
            maxWidth: '520px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>{subtitle}</p>
        )}
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
  )
}

export default Hero