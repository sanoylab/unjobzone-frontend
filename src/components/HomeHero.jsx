import Search from './Search'
import unicef_logo from '../assets/images/unicef-logo.png'
import unfpa_logo from '../assets/images/unfpa.png'
import un_logo from '../assets/images/un-logo.png'
import unaids_logo from '../assets/images/unaids-logo.png'
import who_logo from '../assets/images/who-logo.png'
import unhcr_logo from '../assets/images/unhcr-logo.png'
import hero_banner from '../assets/img/home-6/banner/banner-shape.svg'
import sdg from '../assets/images/sdg.png'
import big_un from '../assets/img/home-6/banner/banner-image-2.png'
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
                            <img src={who_logo} alt="" />
                        </div>
                        <div className="shape__four shape">
                            <img src={unhcr_logo} alt="" />
                        </div>
          <div className="shape__five shape">
            <img src={unfpa_logo} alt="" />
          </div>
          <div className="shape__six shape">
            <img src={unaids_logo} alt="" />
          </div>
        </div>
        <div className="rts__banner__wrapper position-relative z-3 text-center">
          <div className="rts__banner__content" style={{ color: 'white' }}> 
            <h1 className="rts__banner__title mb-4  wow animated fadeInUp"  style={{ color: 'white' }}>
              Explore UN Jobs
            </h1>
            <p className="mb-40 br-lg-none  wow animated fadeInUp">
            Embarking on a career with the United Nations is a journey filled with purpose and global impact.

            </p>
            <Search />
          </div>
          <div id='banner-image' className="rts__banner__images d-flex justify-content-center justify-content-sm-between flex-wrap flex-sm-nowrap">          <div>
                                <img className="rounded-full" src="assets/img/home-6/banner/banner-image-1.png" alt="" style={{width: '280px'}} />
                            </div>
                            <div className="shape d-none d-lg-block">
                                <img src="assets/img/home-6/banner/banner-shape.svg" alt=""  />
                            </div>
                            <div>
                                <img className="rounded-2" src={big_un} alt="" style={{paddingTop: '45px', }}/>
                            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default HomeHero