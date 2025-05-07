import LatestBlog from "./LatestBlog"
import { Link } from "react-router-dom"
function RecentBlog() {
  return (
    <section style={{
      background: 'none',
      position: 'relative',
      overflow: 'hidden',
      padding: '5.5rem 0 5rem 0',
      zIndex: 1,
    }}>
      {/* Animated background blob */}
      <div style={{
        position: 'absolute',
        right: '-10%',
        top: '10%',
        width: '340px',
        height: '340px',
        background: 'radial-gradient(circle at 40% 40%, #1B8EF2 0%, #B3D8FF 100%)',
        opacity: 0.13,
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'floatBlogBlob 18s ease-in-out infinite alternate',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row justify-content-center align-items-end mb-60" style={{ marginBottom: '3.5rem' }}>
          <div className="col-xl-7 col-lg-10">
            <div className="text-center" style={{ marginBottom: 0 }}>
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                background: 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.7rem',
                letterSpacing: '-1px',
              }}>
                Read Our Latest Blog
              </h3>
              <p style={{
                fontSize: '1.13rem',
                color: '#334E68',
                fontWeight: 500,
                marginBottom: 0,
              }}>
                Keep up to date with our latest blog posts
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-12 d-flex justify-content-xl-end justify-content-center mt-4 mt-xl-0">
            <Link
              to="/blog"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)',
                color: '#fff',
                padding: '0.85rem 2.2rem',
                borderRadius: '2rem',
                fontSize: '1.08rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(27, 75, 130, 0.13)',
                transition: 'background 0.2s, transform 0.2s',
                letterSpacing: '-0.5px',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #1B4B82 0%, #1B8EF2 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View All <i className="fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="row g-4 justify-content-center align-items-stretch">
          <LatestBlog />
        </div>
      </div>
      <style>{`
        @keyframes floatBlogBlob {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-30px) scale(1.07); }
        }
      `}</style>
    </section>
  )
}

export default RecentBlog