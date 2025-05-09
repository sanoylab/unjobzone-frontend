import React from 'react'
import Blog from '../components/Blog';
import FeaturedBlog from '../components/FeaturedBlog';

function BlogPage() {
  return (
    <div style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #EDF2F7 100%)' }}>
      {/* Modern Hero Section */}
      <div style={{
        position: 'relative',
        padding: '6rem 0 8rem',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #F9FAFB 0%, #B3D8FF 60%, #1B8EF2 100%)',
        boxShadow: 'inset 0 -1px 0 0 rgba(255,255,255,0.1)',
      }}>
        {/* Decorative Elements */}
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
            <pattern id="blogHeroPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#1B8EF2" opacity="0.13" />
              <circle cx="10" cy="10" r="1.5" fill="#F59E42" opacity="0.10" />
              <circle cx="50" cy="50" r="1.5" fill="#34C759" opacity="0.10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blogHeroPattern)" />
        </svg>
        
        {/* Small floating circles */}
        <div style={{
          position: 'absolute',
          left: '15%',
          top: '40%',
          width: '10px',
          height: '10px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          animation: 'float1 8s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute',
          left: '25%',
          top: '30%',
          width: '6px',
          height: '6px',
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '50%',
          animation: 'float2 12s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute',
          right: '30%',
          top: '35%',
          width: '8px',
          height: '8px',
          background: 'rgba(255,255,255,0.25)',
          borderRadius: '50%',
          animation: 'float3 10s ease-in-out infinite alternate',
        }} />
        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                fontWeight: '800',
                color: '#1B4B82',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
                textShadow: '0 2px 10px rgba(0,0,0,0.05)',
                animation: 'fadeInUp 0.8s ease-out',
              }}>
                Insights & Stories
              </h1>
              <p style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                color: '#4A5568',
                maxWidth: '750px',
                margin: '0 auto 2rem',
                lineHeight: '1.6',
                animation: 'fadeInUp 0.8s 0.2s ease-out both',
              }}>
                Explore the latest trends, news and insights from the UN job market and career development
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                animation: 'fadeInUp 0.8s 0.4s ease-out both',
              }}>
                <a href="#featured" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.9rem 2rem',
                  background: '#1B8EF2',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(27, 142, 242, 0.2)',
                  transition: 'all 0.3s ease',
                }}>
                  Featured Articles
                </a>
                <a href="#all-blogs" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.9rem 2rem',
                  background: 'rgba(27, 75, 130, 0.1)',
                  color: '#1B4B82',
                  fontWeight: '600',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}>
                  Browse All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Blog Section */}
      <div id="featured" style={{
        marginTop: '-4rem',
        marginBottom: '3rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container">
          <div className="featured-content" style={{
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            overflow: 'hidden',
            animation: 'fadeInUp 0.8s 0.6s ease-out both',
          }}>
            <FeaturedBlog />
          </div>
        </div>
      </div>

      {/* Main Blog Section */}
      <div id="all-blogs" style={{ padding: '3rem 0 6rem' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 style={{
                fontSize: '2.25rem',
                fontWeight: '700',
                color: '#1a4980',
                marginBottom: '1.5rem',
                position: 'relative',
                display: 'inline-block',
              }}>
                Latest Articles
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  height: '4px',
                  width: '70px',
                  background: 'linear-gradient(90deg, #4299e1 0%, #3182ce 100%)',
                  borderRadius: '2px',
                }}></div>
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#4a5568',
                maxWidth: '650px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}>
                Dive into our collection of insightful articles on UN careers, development, and opportunities
              </p>
            </div>
          </div>
          
          {/* Filter Tabs (optional - can be implemented with state) */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}>
                <button style={{
                  padding: '0.6rem 1.5rem',
                  background: '#1a4980',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  All
                </button>
                <button style={{
                  padding: '0.6rem 1.5rem',
                  background: '#e2e8f0',
                  color: '#4a5568',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  Career Tips
                </button>
                <button style={{
                  padding: '0.6rem 1.5rem',
                  background: '#e2e8f0',
                  color: '#4a5568',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  Job Market
                </button>
                <button style={{
                  padding: '0.6rem 1.5rem',
                  background: '#e2e8f0',
                  color: '#4a5568',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  Industry News
                </button>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <Blog />
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float1 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        
        @keyframes float2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-15px); }
        }
        
        @keyframes float3 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-25px); }
        }
        
        @keyframes subtleFloat1 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50px, 30px); }
        }
        
        @keyframes subtleFloat2 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, -30px); }
        }
        
        @keyframes floatHeroBlob {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.05); }
          100% { transform: translate(20px, -20px) scale(0.95); }
        }
        
        /* Fix for masonry grid */
        .my-masonry-grid {
          display: flex;
          margin-left: -30px;
          width: auto;
        }
        
        .my-masonry-grid_column {
          padding-left: 30px;
          background-clip: padding-box;
        }
        
        .my-masonry-grid_column > div {
          margin-bottom: 30px;
          transition: transform 0.3s ease;
        }
        
        .my-masonry-grid_column > div:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}

export default BlogPage