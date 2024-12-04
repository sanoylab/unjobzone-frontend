import LatestBlog from "./LatestBlog"

function RecentBlog() {
  return (
    <section className="rts__section pb-120 mt-60">
    <div className="container">
        <div className="row justify-content-center mb-60">
            <div className="col-xl-6 col-lg-10">
<div className="rts__section__content text-center  wow animated fadeInUp">
<h3 className="rts__section__title section__mb">Read Our Latest Blog</h3>
<p className="rts__section__desc"> Our mission is to provide you with valuable insights</p>
</div>
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