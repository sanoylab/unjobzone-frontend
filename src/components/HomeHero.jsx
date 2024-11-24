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
          <div className="shape__three shape">
            <img src={unhcr_logo} alt="" />
          </div>
          <div className="shape__four shape">
            <img src={who_logo} alt="" />
          </div>
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
              Explore United Nations New Jobs
            </h1>
            <p className="mb-40 br-lg-none  wow animated fadeInUp">
              Looking for a new job can be both exciting and daunting.
              Navigating the job market involves exploring <br /> various
              avenues, including online job boards.
            </p>
            <div className="rts__job__search form-2 z-1 position-relative mx-auto max-content mb-5 mb-lg-0  wow animated fadeInUp">
              <form
                action="#"
                className="d-flex align-items-center flex-wrap flex-md-nowrap  gap-4 justify-content-between"
              >
                <div className="input-group flex-md-nowrap d-flex gap-4">
                  <div className="single__input d-flex flex-column">
                    <input type="text" placeholder="Enter Type of job" />
                    <div className="search__icon fa-light fa-magnifying-glass"></div>
                  </div>
                  <div className="single__input d-flex flex-column">
                    <div className="nice-select" tabIndex="0">
                      <span className="current">Select Location</span>
                      <ul className="list">
                        <li
                          data-value="1"
                          className="option selected focus"
                        >
                          Select Location
                        </li>
                        <li data-value="2" className="option">
                          Dhaka
                        </li>
                        <li data-value="3" className="option">
                          Barisal
                        </li>
                        <li data-value="4" className="option">
                          Chittagong
                        </li>
                      </ul>
                    </div>
                    <div className="fa-sharp fa-thin fa-location-dot location__icon"></div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="rts__btn he-3 fill__btn job__search "
                  aria-label="Search"
                >
                  Search Job
                </button>
              </form>
            </div>
          </div>
          <div className="rts__banner__images d-flex justify-content-center justify-content-sm-between flex-wrap flex-sm-nowrap">
            <div>
              <img
                className="rounded-full"
                src="../assets/img/home-6/banner/banner-image-1.jpg"
                alt=""
              />
            </div>
            <div className="shape d-none d-lg-block">
              <img
                src={hero_banner}
                alt=""
              />
            </div>
            <div>
              <img style={{ width: '310px' }}
                className="rounded-2"
                src={sdg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default HomeHero