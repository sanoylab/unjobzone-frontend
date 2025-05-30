import SocialShare from "./SocialShare"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

function Footer() {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <footer style={{
      background: darkMode 
        ? 'linear-gradient(120deg, #121212 0%, #1f3a60 100%)'
        : 'linear-gradient(120deg, #EAF2FA 0%, #B3D8FF 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '0',
      zIndex: 1,
    }}>
      {/* Animated background globe/blob */}
      <div style={{
        position: 'absolute',
        right: '-10%',
        bottom: '-20%',
        width: '420px',
        height: '420px',
        background: darkMode 
          ? 'radial-gradient(circle at 40% 40%, #0a4b91 0%, #121212 100%)'
          : 'radial-gradient(circle at 40% 40%, #1B8EF2 0%, #1B4B82 100%)',
        opacity: 0.10,
        filter: 'blur(80px)',
        zIndex: 0,
        animation: 'floatFooterBlob 22s ease-in-out infinite alternate',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0' }}>
        <div style={{
          background: darkMode ? 'rgba(40, 40, 40, 0.85)' : 'rgba(255,255,255,0.85)',
          borderRadius: '2.2rem',
          boxShadow: darkMode ? '0 8px 40px 0 rgba(0, 0, 0, 0.2)' : '0 8px 40px 0 rgba(27, 75, 130, 0.10)',
          padding: '3.2rem 2.5rem 2.2rem 2.5rem',
          marginTop: '3rem',
          marginBottom: '1.5rem',
          backdropFilter: 'blur(10px) saturate(140%)',
          border: darkMode ? '1.5px solid rgba(80, 80, 80, 0.3)' : '1.5px solid rgba(27, 75, 130, 0.10)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          {/* Logo & Tagline */}
          <a href="#" className="footer__logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem', justifyContent: 'center' }}>
            <span style={{
              fontWeight: 900,
              fontSize: '2.2rem',
              color: darkMode ? '#e4e4e4' : '#1B4B82',
              letterSpacing: '-1px',
              background: darkMode 
                ? 'linear-gradient(90deg, #4b90d6 0%, #e4e4e4 100%)'
                : 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>UN JobZone</span>
          </a>
          <span style={{ color: darkMode ? '#b0b0b0' : '#334E68', fontWeight: 500, fontSize: '1.08rem', marginTop: '0.7rem', textAlign: 'center', marginBottom: '2.2rem' }}>
            Your Gateway to Global Careers
          </span>
          {/* Social Icons */}
          <div className="d-flex gap-4 mb-2 justify-content-center" style={{ marginBottom: '2.2rem' }}>
            <SocialShare />
          </div>
        </div>
        {/* Bottom row */}
        <div className="text-center py-4" style={{ color: darkMode ? '#b0b0b0' : '#1B4B82', fontWeight: 500, fontSize: '1.01rem', opacity: 0.8 }}>
          &copy; 2025 All Rights Reserved by UNJobZone
        </div>
      </div>
      <style>{`
        @keyframes floatFooterBlob {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-30px) scale(1.07); }
        }
        .footer__logo:hover span {
          filter: brightness(1.2) drop-shadow(0 2px 8px ${darkMode ? '#4b90d6aa' : '#1B8EF2aa'});
        }
      `}</style>
    </footer>
  )
}

export default Footer