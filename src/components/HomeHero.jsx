import Search from './Search'
import unicef_logo from '../assets/images/unicef-logo.png'
import unfpa_logo from '../assets/images/unfpa.png'
import un_logo from '../assets/images/un-logo.png'
import unaids_logo from '../assets/images/unaids-logo.png'
import who_logo from '../assets/images/who-logo.png'
import unhcr_logo from '../assets/images/unhcr-logo.png'
import hero_banner from '../assets/img/home-6/banner/banner-shape.svg'
import big_un from '../assets/img/home-6/banner/banner-image-2.png'

function HomeHero() {
  const agencyLogos = [un_logo, who_logo, unicef_logo, unhcr_logo, unfpa_logo, unaids_logo];

  // Define the clip-path polygon for the diagonal bottom edge
  // Slants down from left to right: top-left, top-right, bottom-right (higher), bottom-left (lower)
  // Example: For a gentler slant, use something like 100% 95%, 0 100%
  // For a steeper slant, use something like 100% 85%, 0 100%
  const diagonalClipPath = 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'; // Steeper diagonal (from 92% to 80%)

  return (
    <section style={{
      minHeight: '65vh',
      width: '100%',
      background: 'linear-gradient(135deg, #F9FAFB 0%, #B3D8FF 60%, #1B8EF2 100%)', // More color depth
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '3rem 0 5rem 0',
      zIndex: 1,
      clipPath: diagonalClipPath,
    }}>
      {/* Animated Background Gradients */}
      <div style={{
        position: 'absolute',
        top: '-30%',
        left: '-20%',
        width: '80vw',
        height: '80vw',
        background: 'radial-gradient(circle, rgba(179, 216, 255, 0.22) 0%, transparent 60%)',
        filter: 'blur(80px)',
        zIndex: -2,
        animation: 'subtleFloat1 20s ease-in-out infinite alternate'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-25%',
        right: '-15%',
        width: '70vw',
        height: '70vw',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.13) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: -2,
        animation: 'subtleFloat2 25s ease-in-out infinite alternate'
      }} />
      {/* Animated Blob for Energy */}
      <div style={{
        position: 'absolute',
        left: '55%',
        top: '60%',
        width: '420px',
        height: '420px',
        background: 'radial-gradient(circle at 60% 40%, #1B8EF2 0%, #1B4B82 100%)',
        opacity: 0.10,
        filter: 'blur(80px)',
        zIndex: -2,
        animation: 'floatHeroBlob 18s ease-in-out infinite alternate',
      }} />
      {/* SVG Pattern Overlay */}
      <svg width="100%" height="100%" viewBox="0 0 1440 400" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
        <defs>
          <pattern id="heroPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="#1B8EF2" opacity="0.13" />
            <circle cx="10" cy="10" r="1.5" fill="#F59E42" opacity="0.10" />
            <circle cx="50" cy="50" r="1.5" fill="#34C759" opacity="0.10" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroPattern)" />
      </svg>

      {/* Scattered UN Agency Logos */}
      {/* Each logo is absolutely positioned at a visually balanced spot, larger and with higher opacity */}
      <img src={un_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '7%', top: '18%', width: '100px', height: '100px', opacity: 0.18, zIndex: 0, filter: 'grayscale(60%) contrast(80%) brightness(1.1)', objectFit: 'contain' }} />
      <img src={who_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '70%', top: '10%', width: '100px', height: '100px', opacity: 0.16, zIndex: 0, filter: 'grayscale(60%) contrast(80%) brightness(1.1)', objectFit: 'contain' }} />
      <img src={unicef_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '18%', top: '65%', width: '100px', height: '100px', opacity: 0.15, zIndex: 0, filter: 'grayscale(60%) contrast(80%) brightness(1.1)', objectFit: 'contain' }} />
      <img src={unhcr_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '80%', top: '60%', width: '100px', height: '100px', opacity: 0.15, zIndex: 0, filter: 'grayscale(60%) contrast(80%) brightness(1.1)', objectFit: 'contain' }} />
      <img src={unfpa_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '40%', top: '80%', width: '100px', height: '100px', opacity: 0.13, zIndex: 0, filter: 'grayscale(60%) contrast(80%) brightness(1.1)', objectFit: 'contain' }} />
      <img src={unaids_logo} alt="UN Agency Logo" style={{ position: 'absolute', left: '60%', top: '40%', width: '100px', height: '100px', opacity: 0.14, zIndex: 0, filter: 'grayscale(60%) contrast(80%) brightness(1.1)', objectFit: 'contain' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}> {/* Main content container has higher z-index */}
        <div className="row align-items-center" style={{ minHeight: 'calc(65vh - 8rem)' }}> {/* Adjust minHeight if padding changed significantly */}
          {/* Left: Content */}
          <div className="col-lg-7">
            <div className="hero-content" style={{ maxWidth: '600px', animation: 'fadeInUpHero 1.1s cubic-bezier(.23,1.01,.32,1) 0.1s both' }}>
              {/* Refined Badge */}
              <div style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '0.6rem 1.3rem',
                borderRadius: '10px',
                marginBottom: '1.75rem',
                border: '1px solid rgba(27, 75, 130, 0.15)',
                fontWeight: 600,
                color: '#1B4B82',
                fontSize: '0.9rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: '0 4px 12px rgba(30, 64, 175, 0.05)',
                backdropFilter: 'blur(4px)',
                animation: 'fadeInUpHero 1s cubic-bezier(.23,1.01,.32,1) 0.2s both',
              }}>
                United Nations Careers
              </div>

              {/* Elegant Heading */}
              <h1 style={{
                fontSize: '3.6rem',
                fontWeight: 700,
                lineHeight: '1.15',
                marginBottom: '1.5rem',
                color: '#102A43',
                letterSpacing: '-1px',
                animation: 'fadeInUpHero 1s cubic-bezier(.23,1.01,.32,1) 0.35s both',
              }}>
                Explore UN Jobs
              </h1>

              {/* Clear Description */}
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.75',
                color: '#334E68',
                marginBottom: '2.5rem',
                fontWeight: 400,
                maxWidth: '90%',
                animation: 'fadeInUpHero 1s cubic-bezier(.23,1.01,.32,1) 0.5s both',
              }}>
Embarking on a career with the United Nations is a journey filled with purpose and global impact.

</p>

              {/* Integrated Search Bar Container */}
              <div style={{
                maxWidth: '580px',
                marginBottom: '2.5rem',
                width: '100%',
                marginTop: '1.5rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '2.5rem',
                background: 'rgba(255,255,255,0.82)',
                boxShadow: '0 8px 32px rgba(27, 75, 130, 0.10)',
                padding: '1.1rem 1.3rem',
                backdropFilter: 'blur(10px) saturate(140%)',
                border: '1.5px solid rgba(27, 75, 130, 0.10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'fadeInUpHero 1s cubic-bezier(.23,1.01,.32,1) 0.65s both',
              }}>
                <Search />
              </div>

              {/* Minimalist Status Indicators */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', animation: 'fadeInUpHero 1s cubic-bezier(.23,1.01,.32,1) 0.8s both' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1B4B82' }}>
                  <span style={{ width: '10px', height: '10px', background: '#28A745', borderRadius: '50%', boxShadow: '0 0 8px rgba(40, 167, 69, 0.5)' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>Live Opportunities</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1B4B82' }}>
                  <span style={{ width: '10px', height: '10px', background: '#007BFF', borderRadius: '50%', boxShadow: '0 0 8px rgba(0, 123, 255, 0.5)' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>Global Positions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Polished Illustration */}
          <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center" style={{ animation: 'gentleFloat 10s ease-in-out infinite alternate, fadeInRightHero 1.1s cubic-bezier(.23,1.01,.32,1) 0.5s both', minHeight: 'calc(65vh - 8rem)' }}> {/* Adjust minHeight */}
            <div style={{ position: 'relative' }}>
              <img src={big_un} alt="UN Careers Illustration" style={{
                width: '100%',
                maxWidth: '420px',
                filter: 'drop-shadow(0 15px 35px rgba(30, 64, 175, 0.12))',
                borderRadius: '1.5rem',
                animation: 'gentleFloat 10s ease-in-out infinite alternate',
              }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes subtleFloat1 {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          100% { transform: translateY(-20px) translateX(15px) scale(1.05); }
        }
        @keyframes subtleFloat2 {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          100% { transform: translateY(25px) translateX(-20px) scale(1.03); }
        }
        @keyframes gentleFloat {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-15px); }
        }
        @keyframes fadeInUpHero {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRightHero {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatHeroBlob {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-30px) scale(1.07); }
        }
      `}</style>
    </section>
  )
}

export default HomeHero