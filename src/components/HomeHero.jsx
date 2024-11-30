import Search from './Search'
import unicef_logo from '../assets/images/unicef-logo.png'
import itc_logo from '../assets/images/itc-logo.png'
import un_logo from '../assets/images/un-logo.png'
import unaids_logo from '../assets/images/unaids-logo.png'
import who_logo from '../assets/images/who-logo.png'
import unhcr_logo from '../assets/images/unhcr-logo.png'
import hero_banner from '../assets/img/home-6/banner/banner-shape.svg'
import sdg from '../assets/images/sdg.png'
function HomeHero() {
  return (
    <section className="rts__banner position-relative home__six__banner">
    <div className="container">
      <div className="row justify-content-between">
        <div className="rts__banner__shape d-none d-lg-block">
          <div className="shape__one shape">
            <img src={unicef_logo} alt="" className='small-image' />
          </div>
          {/* <div className="shape__two shape" style={{ borderRadius: '50%' }}>
                        <img src={itc_logo} alt="" />
          </div> */}
          
          
          <div className="shape__five shape">
            <img src={un_logo} alt="" />
          </div>
          <div className="shape__six shape">
            <img src={unaids_logo} alt="" />
          </div>
        </div>
        <div className="rts__banner__wrapper position-relative z-3 text-center">
          <div className="rts__banner__content">
            <h1 className="rts__banner__title mb-4  wow animated fadeInUp">
              Explore UN Jobs
            </h1>
            <p className="mb-40 br-lg-none  wow animated fadeInUp">
              Looking for a new job can be both exciting and daunting.
              Navigating the job market involves exploring <br /> various
              avenues, including online job boards.
            </p>
            <Search />
          </div>
          <div className="rts__banner__images d-flex justify-content-center justify-content-sm-between flex-wrap flex-sm-nowrap">
          
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default HomeHero