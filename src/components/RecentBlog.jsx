import LatestBlog from "./LatestBlog"
import { Link } from "react-router-dom"
function RecentBlog() {
  return (
    <section className="rts__section pb-120 mt-60">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-xl-6 col-lg-10">
            <div className="rts__section__content text-center  wow animated fadeInUp">
              <h3 className="rts__section__title section__mb">Read Our Latest Blog</h3>
              <p className="rts__section__desc">Keep uptodate with our latest blog posts</p>
            </div>
          </div>
          <div className="rts__links d-flex max-content align-items-end">
            <Link
              to="/blog"
              className="d-flex gap-2 align-items-center text-dark fw-medium"
            >
              View All<i className="fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="row g-30 align-items-center">
          <LatestBlog />
        </div>
      </div>
    </section>
  )
}

export default RecentBlog