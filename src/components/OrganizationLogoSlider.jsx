
const OrganizationLogoSlider = () => {
  return (
    <div className="rts__brand  wow animated fadeInUp  ">
        <div className="container">
          <div className="bg-white">
            <div className="row align-items-center">
              <div
                className="rts__brand__slider overflow-hidden swiper-data"
                data-swiper='{
                            "slidesPerView":7,
                            "loop": true,
                            "speed": 1000,
                            "autoplay":{
                                "delay":"7000"
                            },
            
                            "breakpoints": {
                                "0": {
                                    "slidesPerView": 2
                                },
                                "768": {
                                    "slidesPerView": 3
                                },
                                "1024": {
                                    "slidesPerView": 4
                                },
                                "1200": {
                                    "slidesPerView": 6
                                },
                                "1400": {
                                    "slidesPerView": 7
                                }
                            }
            
                        }'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <a href="#" className="brand__item__link" aria-label="brand">
                        <img
                          src="/src/assets/img/home-1/brand/b51.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <a href="#" className="brand__item__link" aria-label="brand">
                        <img
                          src="/src/assets/img/home-1/brand/image1.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <a href="#" className="brand__item__link" aria-label="brand">
                        <img
                          src="/src/assets/img/home-1/brand/image2.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <a href="#" className="brand__item__link" aria-label="brand">
                        <img
                          src="/src/assets/img/home-1/brand/image3.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <a href="#" className="brand__item__link" aria-label="brand">
                        <img
                          src="/src/assets/img/home-1/brand/image4.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <a href="#" className="brand__item__link" aria-label="brand">
                        <img
                          src="/src/assets/img/home-1/brand/image5.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <a href="#" className="brand__item__link" aria-label="brand">
                        <img
                          src="/src/assets/img/home-1/brand/image1.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <a href="#" className="brand__item__link" aria-label="brand">
                        <img
                          src="/src/assets/img/home-1/brand/linkedin-logo-png-20321.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OrganizationLogoSlider