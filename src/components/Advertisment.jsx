import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const features = [
  { icon: "fa-globe", text: "Work with a Global Mission", color: "#1B8EF2" },
  { icon: "fa-users", text: "Join Diverse Teams", color: "#F59E42" },
  { icon: "fa-lightbulb", text: "Innovate for Impact", color: "#34C759" },
  { icon: "fa-medal", text: "Grow & Succeed", color: "#FF5E5B" },
];

const sdgIcons = [
  "fa-leaf", "fa-heart", "fa-lightbulb", "fa-hands-helping", "fa-globe-africa"
];

const Advertisment = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <section style={{
      width: '100%',
      minHeight: '520px',
      background: darkMode 
        ? 'linear-gradient(120deg, #121212 0%, #1f3a60 60%, #1a1a1a 100%)'
        : 'linear-gradient(120deg, #EAF2FA 0%, #B3D8FF 60%, #F5F8FF 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      flexDirection: 'column',
      padding: '64px 0',
    }}>
      {/* Animated background gradient blob */}
      <div style={{
        position: 'absolute',
        left: '60%',
        top: '40%',
        width: '600px',
        height: '600px',
        background: darkMode 
          ? 'radial-gradient(circle at 60% 40%, #0a4b91 0%, #121212 100%)'
          : 'radial-gradient(circle at 60% 40%, #1B8EF2 0%, #1B4B82 100%)',
        opacity: 0.10,
        filter: 'blur(120px)',
        zIndex: 0,
        animation: 'floatAdvertBlob 18s ease-in-out infinite alternate',
      }} />
      {/* Faint UN globe watermark */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '16rem',
        color: darkMode ? '#0a4b91' : '#1B8EF2',
        opacity: darkMode ? 0.10 : 0.07,
        zIndex: 0,
        pointerEvents: 'none',
        animation: 'spinAdvertGlobe 40s linear infinite',
      }}>
        <i className="fas fa-globe-africa"></i>
      </div>
      {/* Floating accent shape */}
      <div style={{
        position: 'absolute',
        right: '8%',
        top: '18%',
        width: '90px',
        height: '90px',
        background: 'linear-gradient(135deg, #F59E42 0%, #FF5E5B 100%)',
        opacity: darkMode ? 0.15 : 0.13,
        borderRadius: '50%',
        filter: 'blur(8px)',
        zIndex: 1,
        animation: 'floatAccent 7s ease-in-out infinite alternate',
      }} />
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '520px',
        padding: '0 1.2rem',
        gap: '3.5rem',
      }}>
        {/* Left: Content */}
        <div style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
          <h2 style={{
            fontSize: '2.7rem',
            fontWeight: 900,
            background: darkMode 
              ? 'linear-gradient(90deg, #4b90d6 0%, #e4e4e4 100%)'
              : 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.1rem',
            letterSpacing: '-1.5px',
            lineHeight: 1.12,
            fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
            textAlign: 'left',
          }}>
            Make Your Mark on the World
          </h2>
          <p style={{
            fontSize: '1.18rem',
            color: darkMode ? '#b0b0b0' : '#334E68',
            marginBottom: '2.2rem',
            fontWeight: 500,
            lineHeight: 1.7,
            fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
            maxWidth: '600px',
            marginLeft: 0,
            marginRight: 0,
            textAlign: 'left',
          }}>
            Join the United Nations and help shape a better future. Work with passionate people, drive real change, and grow your career on a global stage.
          </p>
          {/* Features */}
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            marginBottom: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.2rem 2.2rem',
            justifyContent: 'flex-start',
          }}>
            {features.map((f, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.1rem',
                minWidth: '210px',
                marginBottom: 0,
                justifyContent: 'flex-start',
                background: darkMode ? 'rgba(40, 40, 40, 0.65)' : 'rgba(255,255,255,0.65)',
                borderRadius: '2rem',
                padding: '0.7rem 1.3rem',
                boxShadow: `0 2px 12px ${f.color}11`,
                border: darkMode ? `1.5px solid ${f.color}33` : `1.5px solid ${f.color}22`,
                backdropFilter: 'blur(4px)',
              }}>
                <span style={{
                  width: '2.7rem', height: '2.7rem', borderRadius: '50%',
                  background: f.color + (darkMode ? '33' : '22'), 
                  display: 'flex', alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.45rem', color: f.color, fontWeight: 700, 
                  boxShadow: `0 2px 12px ${f.color}${darkMode ? '44' : '33'}`,
                  border: `2.5px solid ${f.color}${darkMode ? '44' : '33'}`,
                  filter: 'drop-shadow(0 0 8px ' + f.color + (darkMode ? '33' : '22') + ')',
                  transition: 'box-shadow 0.2s',
                }}>
                  <i className={`fa-solid ${f.icon}`}></i>
                </span>
                <span style={{ fontWeight: 700, color: darkMode ? '#e4e4e4' : '#1B4B82', fontSize: '1.13rem', fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>{f.text}</span>
              </li>
            ))}
          </ul>
          {/* CTA Button */}
          <a href="#" style={{
            display: 'inline-block',
            background: darkMode 
              ? 'linear-gradient(90deg, #0a4b91 0%, #1f3a60 100%)'
              : 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)',
            color: '#fff',
            padding: '1.18rem 3.1rem',
            borderRadius: '2.8rem',
            fontSize: '1.18rem',
            fontWeight: 900,
            textDecoration: 'none',
            boxShadow: darkMode ? '0 12px 48px rgba(0, 0, 0, 0.3)' : '0 12px 48px rgba(27, 75, 130, 0.18)',
            letterSpacing: '-0.5px',
            position: 'relative',
            overflow: 'hidden',
            border: 'none',
            transition: 'transform 0.22s cubic-bezier(.23,1.01,.32,1), box-shadow 0.22s, background 0.22s',
            animation: 'fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1) 0.3s both',
          }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.045)';
              e.currentTarget.style.background = darkMode 
                ? 'linear-gradient(90deg, #1f3a60 0%, #0a4b91 100%)'
                : 'linear-gradient(90deg, #1B4B82 0%, #1B8EF2 100%)';
              e.currentTarget.style.boxShadow = darkMode 
                ? '0 20px 64px rgba(0, 0, 0, 0.4)'
                : '0 20px 64px rgba(27, 75, 130, 0.22)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.background = darkMode 
                ? 'linear-gradient(90deg, #0a4b91 0%, #1f3a60 100%)'
                : 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)';
              e.currentTarget.style.boxShadow = darkMode 
                ? '0 12px 48px rgba(0, 0, 0, 0.3)'
                : '0 12px 48px rgba(27, 75, 130, 0.18)';
            }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>Explore UN Jobs</span>
            {/* Glowing animated ring */}
            <span style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              borderRadius: '50%',
              background: darkMode 
                ? 'radial-gradient(circle, rgba(10, 75, 145, 0.6) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(27, 142, 242, 0.6) 0%, transparent 70%)',
              opacity: 0,
              zIndex: 1,
              animation: 'pulseRing 2s infinite',
            }}></span>
          </a>
        </div>
        {/* Right: Illustration */}
        <div style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Custom SVG Illustration */}
          <div style={{
            width: '340px',
            height: '340px',
            maxWidth: '100%',
            borderRadius: '50%',
            background: '#EAF2FA',
            boxShadow: '0 8px 40px 0 rgba(27, 75, 130, 0.13)',
            border: '7px solid #fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s',
            animation: 'fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1) 0.2s both',
          }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
              <circle cx="105" cy="105" r="100" fill="#EAF2FA" />
              <circle cx="105" cy="105" r="90" fill="#B3D8FF" opacity="0.18" />
              {/* Globe grid */}
              <ellipse cx="105" cy="105" rx="70" ry="70" stroke="#1B8EF2" strokeWidth="2.5" fill="none" />
              <ellipse cx="105" cy="105" rx="70" ry="30" stroke="#1B8EF2" strokeWidth="2" fill="none" opacity="0.5" />
              <ellipse cx="105" cy="105" rx="30" ry="70" stroke="#1B8EF2" strokeWidth="2" fill="none" opacity="0.5" />
              {/* Meridians */}
              <path d="M35 105 Q105 35 175 105" stroke="#1B8EF2" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M35 105 Q105 175 175 105" stroke="#1B8EF2" strokeWidth="1.5" fill="none" opacity="0.4" />
              {/* Abstract people icons */}
              <circle cx="105" cy="35" r="10" fill="#1B8EF2" />
              <circle cx="175" cy="105" r="10" fill="#F59E42" />
              <circle cx="105" cy="175" r="10" fill="#34C759" />
              <circle cx="35" cy="105" r="10" fill="#FF5E5B" />
              {/* Connection lines */}
              <line x1="105" y1="35" x2="175" y2="105" stroke="#1B8EF2" strokeWidth="2" opacity="0.5" />
              <line x1="175" y1="105" x2="105" y2="175" stroke="#1B8EF2" strokeWidth="2" opacity="0.5" />
              <line x1="105" y1="175" x2="35" y2="105" stroke="#1B8EF2" strokeWidth="2" opacity="0.5" />
              <line x1="35" y1="105" x2="105" y2="35" stroke="#1B8EF2" strokeWidth="2" opacity="0.5" />
              {/* Central dot */}
              <circle cx="105" cy="105" r="7" fill="#1B4B82" />
            </svg>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes floatAdvertBlob {
          0% { transform: translateY(0) scale(1) rotate(0deg); }
          100% { transform: translateY(-25px) scale(1.1) rotate(10deg); }
        }
        @keyframes floatAccent {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-15px) scale(1.1); }
        }
        @keyframes spinAdvertGlobe {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseRing {
          0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0; }
          50% { opacity: 0.2; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        @media (max-width: 900px) {
          div[style*='maxWidth: 1200px'] {
            flex-direction: column !important;
            gap: 2.2rem !important;
          }
          ul[style*='flexWrap: wrap'] {
            flex-direction: column !important;
            gap: 1.2rem 0 !important;
          }
          div[style*='alignItems: center'][style*='justifyContent: center'] > img {
            margin-top: 1.5rem !important;
            margin-bottom: 0 !important;
          }
        }
        @media (max-width: 600px) {
          h2[style*='fontSize: 2.7rem'] {
            font-size: 1.45rem !important;
          }
          section[style*='padding: 64px 0'] {
            padding: 32px 0 !important;
          }
          div[style*='alignItems: center'][style*='justifyContent: center'] > img {
            width: 180px !important;
            height: 180px !important;
            border-width: 4px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Advertisment;