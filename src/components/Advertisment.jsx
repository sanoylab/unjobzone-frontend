import React from "react";

const features = [
  { icon: "fa-globe", text: "Make a global impact", color: "#1B8EF2" },
  { icon: "fa-users", text: "Work with diverse teams", color: "#F59E42" },
  { icon: "fa-graduation-cap", text: "Access to continuous learning", color: "#34C759" },
  { icon: "fa-medal", text: "Competitive benefits and compensation", color: "#FF5E5B" },
];

const sdgIcons = [
  "fa-leaf", "fa-heart", "fa-lightbulb", "fa-hands-helping", "fa-globe-africa"
];

const Advertisment = () => {
  return (
    <section style={{
      width: '100%',
      padding: 0,
      background: 'linear-gradient(120deg, #EAF2FA 0%, #B3D8FF 40%, #1B8EF2 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '600px',
      zIndex: 1,
    }}>
      {/* Layered SVG waves */}
     
      {/* Animated blobs */}
      <div style={{ position: 'absolute', left: '-10%', top: '10%', width: '340px', height: '340px', background: 'radial-gradient(circle at 40% 40%, #1B8EF2 0%, #F59E42 100%)', opacity: 0.22, filter: 'blur(60px)', zIndex: 0, animation: 'floatBlobA 14s ease-in-out infinite alternate' }} />
      <div style={{ position: 'absolute', right: '-12%', top: '40%', width: '260px', height: '260px', background: 'radial-gradient(circle at 60% 60%, #FF5E5B 0%, #34C759 100%)', opacity: 0.18, filter: 'blur(60px)', zIndex: 0, animation: 'floatBlobB 18s ease-in-out infinite alternate' }} />
      <div style={{ position: 'absolute', left: '45%', bottom: '-18%', width: '320px', height: '320px', background: 'radial-gradient(circle at 60% 60%, #1B8EF2 0%, #1B4B82 100%)', opacity: 0.15, filter: 'blur(60px)', zIndex: 0, animation: 'floatBlobC 16s ease-in-out infinite alternate' }} />
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: 0 }}>
        <div className="row align-items-center justify-content-center" style={{ minHeight: '600px', padding: '4.5rem 0' }}>
          {/* Single full-width column */}
          <div className="col-lg-12 d-flex align-items-center justify-content-center position-relative" style={{ minHeight: '600px' }}>
            <div style={{
              background: 'rgba(255,255,255,0.92)',
              borderRadius: '2.7rem',
              boxShadow: '0 12px 48px 0 rgba(27, 75, 130, 0.13)',
              padding: '3.2rem 2.7rem 2.7rem 2.7rem',
              maxWidth: '1100px',
              width: '100%',
              backdropFilter: 'blur(14px) saturate(160%)',
              border: '2px solid rgba(27, 75, 130, 0.13)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'visible',
            }}>
              {/* Confetti/floating icons inside the card */}
              {Array.from({ length: 12 }).map((_, i) => (
                <i key={i} className={`fa-solid ${sdgIcons[i % sdgIcons.length]}`} style={{
                  position: 'absolute',
                  left: `${8 + Math.random() * 84}%`,
                  top: `${8 + Math.random() * 84}%`,
                  fontSize: `${1.2 + Math.random() * 2.2}rem`,
                  color: ["#1B8EF2", "#F59E42", "#34C759", "#FF5E5B"][i % 4],
                  opacity: 0.13 + Math.random() * 0.18,
                  zIndex: 3,
                  pointerEvents: 'none',
                  animation: `floatIcon${i % 3} ${8 + Math.random() * 8}s ease-in-out infinite alternate`,
                }} />
              ))}
              {/* Left: Content */}
              <div style={{ flex: 1, minWidth: 0, zIndex: 4 }}>
                <h2 style={{
                  fontSize: '2.7rem',
                  fontWeight: 900,
                  background: 'linear-gradient(90deg, #1B8EF2 0%, #F59E42 30%, #34C759 60%, #FF5E5B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '1.2rem',
                  letterSpacing: '-1.5px',
                  lineHeight: 1.13,
                  animation: 'gradientMove 6s linear infinite',
                  backgroundSize: '200% 200%',
                }}>
                  🌍 UN Careers: Where the World Comes Together
                </h2>
                <p style={{
                  fontSize: '1.22rem',
                  color: '#334E68',
                  marginBottom: '2.3rem',
                  fontWeight: 600,
                  lineHeight: 1.7,
                  textShadow: '0 2px 8px #fff8',
                }}>
                  Join a global celebration of opportunity, diversity, and impact. The United Nations is your stage to shine, grow, and change the world—one mission at a time.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2.5rem' }}>
                  {features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', marginBottom: '1.2rem', animation: `fadeInUp 0.7s ${0.2 + i * 0.13}s both` }}>
                      <span style={{
                        width: '2.7rem', height: '2.7rem', borderRadius: '50%',
                        background: f.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.45rem', color: f.color, fontWeight: 700, boxShadow: `0 2px 12px ${f.color}22`,
                        animation: `pulseIcon 2.5s ${0.2 + i * 0.2}s infinite alternate`,
                      }}>
                        <i className={`fa-solid ${f.icon}`}></i>
                      </span>
                      <span style={{ fontWeight: 700, color: '#1B4B82', fontSize: '1.13rem', letterSpacing: '-0.5px' }}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(90deg, #1B8EF2 0%, #F59E42 30%, #34C759 60%, #FF5E5B 100%)',
                  color: '#fff',
                  padding: '1.25rem 3.2rem',
                  borderRadius: '2.7rem',
                  fontSize: '1.22rem',
                  fontWeight: 900,
                  textDecoration: 'none',
                  boxShadow: '0 12px 48px rgba(27, 75, 130, 0.18)',
                  transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
                  letterSpacing: '-0.7px',
                  animation: 'pulseBtn 2.2s infinite alternate',
                }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.06)';
                    e.currentTarget.style.background = 'linear-gradient(90deg, #FF5E5B 0%, #34C759 30%, #F59E42 60%, #1B8EF2 100%)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(27, 75, 130, 0.22)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.background = 'linear-gradient(90deg, #1B8EF2 0%, #F59E42 30%, #34C759 60%, #FF5E5B 100%)';
                    e.currentTarget.style.boxShadow = '0 12px 48px rgba(27, 75, 130, 0.18)';
                  }}
                >
                  Celebrate Your UN Journey
                </a>
              </div>
              {/* Right: Colorful UN/People Illustration + SDG icons */}
              <div style={{ position: 'relative', width: '370px', height: '370px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4 }}>
                {/* Neon border blob */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 90deg, #1B8EF2 0%, #F59E42 40%, #34C759 70%, #FF5E5B 100%)',
                  opacity: 0.22,
                  filter: 'blur(12px)',
                  zIndex: 1,
                  animation: 'spinBlob 12s linear infinite',
                }} />
                {/* Main illustration */}
                <img src="/assets/img/hom-4/banner/Illustration.png" alt="UN Community" style={{
                  width: '260px', height: '260px', borderRadius: '50%', objectFit: 'cover',
                  border: '8px solid #fff', boxShadow: '0 12px 48px rgba(27, 75, 130, 0.18)', position: 'relative', zIndex: 2
                }} />
                {/* Foreground floating SDG icons */}
                {sdgIcons.map((icon, i) => (
                  <div key={icon} style={{
                    position: 'absolute',
                    left: `${18 + 60 * Math.cos((i / sdgIcons.length) * 2 * Math.PI)}%`,
                    top: `${18 + 60 * Math.sin((i / sdgIcons.length) * 2 * Math.PI)}%`,
                    width: '54px', height: '54px', borderRadius: '50%',
                    background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 4px 16px ${features[i % features.length].color}33`, zIndex: 3,
                    animation: `floatSDG${i % 2} 4s ${i * 0.5}s infinite alternate`,
                    border: `2.5px solid ${features[i % features.length].color}`,
                  }}>
                    <i className={`fa-solid ${icon}`} style={{ color: features[i % features.length].color, fontSize: '2rem' }}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes floatBlobA {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-30px) scale(1.07); }
        }
        @keyframes floatBlobB {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(25px) scale(1.04); }
        }
        @keyframes floatBlobC {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-18px) scale(1.06); }
        }
        @keyframes spinBlob {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes pulseBtn {
          0% { box-shadow: 0 0 0 0 #1B8EF244; }
          100% { box-shadow: 0 0 32px 8px #F59E4244; }
        }
        @keyframes pulseIcon {
          0% { box-shadow: 0 0 0 0 #1B8EF244; }
          100% { box-shadow: 0 0 16px 4px #F59E4244; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatIcon0 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-18px); }
        }
        @keyframes floatIcon1 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(12px); }
        }
        @keyframes floatIcon2 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        @keyframes floatSDG0 {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-12px) scale(1.08); }
        }
        @keyframes floatSDG1 {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(10px) scale(0.96); }
        }
      `}</style>
    </section>
  );
};

export default Advertisment;